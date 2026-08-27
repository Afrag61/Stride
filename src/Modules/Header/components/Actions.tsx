"use client";

import { Link } from "@/components/UI/Link";
import { Heart, LogIn, User } from "lucide-react";
import ThemeToggle from "@/Modules/Theme/components/theme-toggle";
import Search from "./Search";
import Logout from "@/Modules/Auth/Logout";
import CartButton from "./CartButton";
import { useAuth } from "@/Modules/Auth/hooks/useAuth";

const Actions = () => {
    const { isAuthenticated } = useAuth();

    return (
        <>
            <div className="flex items-center gap-2 dark:text-gray-400 text-gray-600">
                {/* Search Modal & Button */}
                <Search />

                {/* Theme Toggler */}
                <ThemeToggle />

                <Link
                    title="Wishlist"
                    aria-label="Wishlist"
                    href="/wishlist"
                    className="hidden md:block rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 p-2"
                >
                    <Heart className="h-5 w-5" />
                </Link>
                <CartButton />

                <div className="flex items-center gap-1 ml-2 border-l border-border pl-2">
                    {isAuthenticated ? (
                        <>
                            <Link
                                href="/account"
                                className="rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 p-2"
                                title="Account"
                            >
                                <User className="h-5 w-5" />
                            </Link>
                            <Logout />
                        </>
                    ) : (
                        <>
                            <Link
                                href="/login"
                                className="ml-2 hidden sm:flex gap-1 text-sm font-medium font-display dark:text-white text-gray-900 hover:text-primary-600 dark:hover:text-primary-500 px-2.5 py-1 rounded-lg transition-all duration-300"
                            >
                                Login
                                <LogIn className="h-5 w-5" />
                            </Link>
                            <Link
                                href="/login"
                                title="Login"
                                className="flex items-center justify-center sm:hidden text-xs dark:text-white text-gray-900 hover:text-primary-600 dark:hover:text-primary-500 px-2.5 py-1 rounded-lg transition-all duration-300"
                            >
                                <LogIn className="h-5 w-5" />
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </>
    );
};

export default Actions;
