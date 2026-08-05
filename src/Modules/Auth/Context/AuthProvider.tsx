"use client";
import { AuthError, type User } from "@supabase/supabase-js";
import { createContext, use, useState, useEffect } from "react";
import { supabase } from "@/lib/supabase/client";

interface TAuthContext {
    user: User | null;
    isLoading: boolean;
    error: AuthError | null;
    isAuthenticated: boolean;
}

export const AuthContext = createContext<TAuthContext>({
    user: null,
    isLoading: true,
    error: null,
    isAuthenticated: false,
});

interface AuthProviderProps {
    children: React.ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState<TAuthContext["user"]>(null);
    const [isLoading, setIsLoading] = useState<TAuthContext["isLoading"]>(true);
    const [error, setError] = useState<TAuthContext["error"]>(null);

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

    const ctxValue: TAuthContext = {
        user,
        isLoading,
        error,
        isAuthenticated: !!user,
    };

    return (
        <AuthContext.Provider value={ctxValue}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;
