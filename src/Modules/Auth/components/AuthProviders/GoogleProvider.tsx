"use client";

import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { Loader2 } from "lucide-react";
import { FcGoogle } from "react-icons/fc";

const GoogleProvider = () => {
    const { loginWithGoogle } = useAuth();
    const [isLoading, setIsLoading] = useState(false);

    const handleGoogleLogin = async () => {
        try {
            setIsLoading(true);
            const { error } = await loginWithGoogle();

            if (error) {
                toast.error(error, {
                    duration: 6000,
                });
                setIsLoading(false);
            }
        } catch (error: any) {
            toast.error(error, {
                duration: 6000,
            });
            setIsLoading(false);
        }
    };

    return (
        <button
            type="button"
            onClick={handleGoogleLogin}
            disabled={isLoading}
            className="flex w-full items-center justify-center gap-3 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50 px-4 py-3 text-sm font-semibold text-gray-700 dark:text-gray-200 shadow-sm transition-all hover:bg-gray-50 dark:hover:bg-gray-800 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
        >
            {isLoading ? (
                <Loader2 className="h-5 w-5 animate-spin" />
            ) : (
                <>
                    <FcGoogle className="h-5 w-5" />
                    Continue with Google
                </>
            )}
        </button>
    );
};

export default GoogleProvider;
