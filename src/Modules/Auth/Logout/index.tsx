"use client";

import { LogOut } from "lucide-react";
import { logout } from "../actions";
import { isRedirectError } from "next/dist/client/components/redirect-error";
import toast from "react-hot-toast";
import { useCart } from "@/Modules/Cart/hooks/useCart";

const Index = () => {
    const { handleClearCart } = useCart();
    const handleLogout = async () => {
        try {
            handleClearCart();
            await logout();
        } catch (error) {
            if (isRedirectError(error)) {
                throw error;
            } else if (error instanceof Error) {
                error.message = "Something went wrong. Please try again.";
                toast.error(error.message);
            } else {
                toast.error("Something went wrong. Please try again.");
            }
        }
    };

    return (
        <button
            onClick={handleLogout}
            className="rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 p-2 text-red-500 cursor-pointer"
            title="Logout"
        >
            <LogOut className="h-5 w-5" />
        </button>
    );
};

export default Index;
