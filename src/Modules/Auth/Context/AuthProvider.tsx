"use client";

import { AuthError, type User } from "@supabase/supabase-js";
import { createContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase/client";

interface TAuthContext {
    user: User | null;
    isLoading: boolean;
    error: AuthError | null;
    isAuthenticated: boolean;
    login: (data: {
        email: string;
        password: string;
    }) => Promise<{ error?: string }>;
    logout: () => Promise<{ error?: string }>;
    register: (data: {
        fullName: string;
        phone: string;
        email: string;
        password: string;
    }) => Promise<{ error?: string; needsEmailConfirmation?: boolean }>;
    loginWithGoogle: () => Promise<{ error?: string }>;
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

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState<TAuthContext["user"]>(null);
    const [isLoading, setIsLoading] = useState<TAuthContext["isLoading"]>(true);
    const [error, setError] = useState<TAuthContext["error"]>(null);
    const router = useRouter();

    useEffect(() => {
        const handlePopState = () => {
            router.refresh();
        };

        (async () => {
            const {
                data: { session },
                error,
            } = await supabase.auth.getSession();

            if (error) {
                setError(error);
            }

            setUser(session?.user || null);
            setIsLoading(false);
        })();

        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user || null);
            setIsLoading(false);
        });

        window.addEventListener("popstate", handlePopState);

        return () => {
            subscription.unsubscribe();
            window.removeEventListener("popstate", handlePopState);
        };
    }, [router]);

    const login: TAuthContext["login"] = async (data) => {
        const { error } = await supabase.auth.signInWithPassword(data);

        if (error) {
            if (error.code === "invalid_credentials") {
                return { error: "Invalid email or password, please try again" };
            }
            return { error: "Something went wrong. Please try again." };
        }

        window.location.href = "/auth/callback";

        return {};
    };

    const loginWithGoogle: TAuthContext["loginWithGoogle"] = async () => {
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

        window.location.href = "/auth/callback";
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
