"use client";

import { LogOut } from "lucide-react";
import { useAuth } from "../hooks/useAuth";
import toast from "react-hot-toast";
import { useCart } from "@/Modules/Cart/hooks/useCart";

const Index = () => {
    const { handleClearCart } = useCart();
    const { logout } = useAuth();

    const handleLogout = async () => {
        try {
            handleClearCart();
            await logout();
        } catch (error) {
            toast.error(error as any);
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
