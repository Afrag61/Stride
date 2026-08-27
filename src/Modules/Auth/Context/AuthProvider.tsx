"use client";

import { AuthError, type User } from "@supabase/supabase-js";
import { createContext, use, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase/client";

interface TAuthContext {
    user: User | null;
    isLoading: boolean;
    error: AuthError | null;
    isAuthenticated: boolean;
    login: (
        data: { email: string; password: string },
        redirectTo?: string,
    ) => Promise<{ error?: string }>;
    logout: () => Promise<{ error?: string }>;
    register: (data: {
        fullName: string;
        phone: string;
        email: string;
        password: string;
    }) => Promise<{ error?: string; needsEmailConfirmation?: boolean }>;
    loginWithGoogle: (redirectTo?: string) => Promise<{ error?: string }>;
}

export const AuthContext = createContext<TAuthContext>({
    user: null,
    isLoading: true,
    error: null,
    isAuthenticated: false,
    login: async () => ({}),
    logout: async () => ({}),
    register: async () => ({}),
    loginWithGoogle: async () => ({}),
});

interface AuthProviderProps {
    children: React.ReactNode;
}

const getSafeRedirect = (redirectTo?: string) => {
    if (
        redirectTo &&
        redirectTo.startsWith("/") &&
        !redirectTo.startsWith("//")
    ) {
        return redirectTo;
    }
    return "/";
};

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState<TAuthContext["user"]>(null);
    const [isLoading, setIsLoading] = useState<TAuthContext["isLoading"]>(true);
    const [error, setError] = useState<TAuthContext["error"]>(null);
    const router = useRouter();

    useEffect(() => {
        const getUser = async () => {
            const {
                data: { session },
                error,
            } = await supabase.auth.getSession();

            if (error) {
                setError(error);
            }

            setUser(session?.user || null);
            setIsLoading(false);
        };

        getUser();

        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user || null);
            setIsLoading(false);
        });

        return () => {
            subscription.unsubscribe();
        };
    }, []);

    const login: TAuthContext["login"] = async (data, redirectTo) => {
        const { error } = await supabase.auth.signInWithPassword(data);

        if (error) {
            if (error.code === "invalid_credentials") {
                return { error: "Invalid email or password, please try again" };
            }
            return { error: "Something went wrong. Please try again." };
        }

        router.push(getSafeRedirect(redirectTo));
        router.refresh();
        return {};
    };

    const loginWithGoogle: TAuthContext["loginWithGoogle"] = async (
        redirectTo,
    ) => {
        const safeNext = getSafeRedirect(redirectTo);

        document.cookie = `oauth_next=${encodeURIComponent(safeNext)}; path=/; max-age=600; SameSite=Lax`;

        const { error } = await supabase.auth.signInWithOAuth({
            provider: "google",
            options: {
                redirectTo: `${window.location.origin}/auth/callback`,
            },
        });

        if (error) {
            return { error: "Something went wrong. Please try again." };
        }

        return {};
    };

    const logout: TAuthContext["logout"] = async () => {
        const { error } = await supabase.auth.signOut();

        if (error) {
            return { error: "Something went wrong. Please try again." };
        }

        router.push("/login");
        router.refresh();
        return {};
    };

    const register: TAuthContext["register"] = async (data) => {
        const { data: signUpData, error } = await supabase.auth.signUp({
            email: data.email,
            password: data.password,
            options: {
                data: {
                    name: data.fullName,
                    phone: data.phone,
                },
            },
        });

        if (error) {
            if (error.code === "user_already_exists") {
                return { error: "email already exists" };
            }
            return { error: "Something went wrong. Please try again." };
        }

        if (!signUpData.session) {
            return { needsEmailConfirmation: true };
        }

        router.push("/");
        router.refresh();
        return {};
    };

    const ctxValue: TAuthContext = {
        user,
        isLoading,
        error,
        isAuthenticated: !!user,
        login,
        logout,
        register,
        loginWithGoogle,
    };

    return (
        <AuthContext.Provider value={ctxValue}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;
