"use client";

import { Heart, Settings, ShoppingBag } from "lucide-react";
import { Link } from "@/components/UI/Link";
import { usePathname } from "next/navigation";

interface Props {
    OrdersCount: number;
    WishlistCount: number;
}

const Navigation: React.FC<Props> = ({ OrdersCount, WishlistCount }) => {
    const pathname = usePathname();

    const activeTab = pathname.split("/").pop();

    return (
        <>
            {/* Desktop Navigation */}
            <div className="rounded-3xl bg-white p-4 shadow-xl dark:bg-gray-900 dark:border-gray-850 hidden lg:block">
                <nav className="space-y-1">
                    <Link
                        href="/account"
                        className={`flex w-full items-center justify-between rounded-2xl px-4 py-3 text-sm font-semibold transition-all cursor-pointer ${
                            activeTab === "account"
                                ? "bg-primary-600 text-white shadow-md shadow-primary-500/20"
                                : "text-gray-700 hover:bg-gray-300 dark:text-gray-300 dark:hover:bg-gray-950"
                        }`}
                    >
                        <span className="flex items-center gap-3">
                            <ShoppingBag className="h-4 w-4" />
                            Order History
                        </span>
                        <span
                            className={`rounded-full px-2 py-0.5 text-xs ${
                                activeTab === "account"
                                    ? "bg-white/20 text-white"
                                    : "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400"
                            }`}
                        >
                            {OrdersCount}
                        </span>
                    </Link>

                    <Link
                        href="/account/wishlist"
                        className={`flex w-full items-center justify-between rounded-2xl px-4 py-3 text-sm font-semibold transition-all cursor-pointer ${
                            activeTab === "wishlist"
                                ? "bg-primary-600 text-white shadow-md shadow-primary-500/20"
                                : "text-gray-700 hover:bg-gray-300 dark:text-gray-300 dark:hover:bg-gray-950"
                        }`}
                    >
                        <span className="flex items-center gap-3">
                            <Heart className="h-4 w-4" />
                            My Wishlist
                        </span>
                        <span
                            className={`rounded-full px-2 py-0.5 text-xs ${
                                activeTab === "wishlist"
                                    ? "bg-white/20 text-white"
                                    : "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400"
                            }`}
                        >
                            {WishlistCount}
                        </span>
                    </Link>

                    <Link
                        href="/account/settings"
                        className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold transition-all cursor-pointer ${
                            activeTab === "settings"
                                ? "bg-primary-600 text-white shadow-md shadow-primary-500/20"
                                : "text-gray-700 hover:bg-gray-300 dark:text-gray-300 dark:hover:bg-gray-950"
                        }`}
                    >
                        <Settings className="h-4 w-4" />
                        Profile Settings
                    </Link>
                </nav>
            </div>
            {/* Mobile Navigation */}
            <div className="flex items-center justify-center border-b border-gray-200 dark:border-gray-800 lg:hidden overflow-x-auto gap-2 pb-2">
                <Link
                    href="/account"
                    className={`flex items-center gap-2 border-b-2 px-4 py-2.5 text-sm font-semibold whitespace-nowrap cursor-pointer transition-all ${
                        activeTab === "account"
                            ? "border-primary-600 text-primary-600 dark:text-primary-500"
                            : "border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white"
                    }`}
                >
                    <ShoppingBag className="h-4 w-4" />
                    Orders ({OrdersCount})
                </Link>
                <Link
                    href="/account/wishlist"
                    className={`flex items-center gap-2 border-b-2 px-4 py-2.5 text-sm font-semibold whitespace-nowrap cursor-pointer transition-all ${
                        activeTab === "wishlist"
                            ? "border-primary-600 text-primary-600 dark:text-primary-500"
                            : "border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white"
                    }`}
                >
                    <Heart className="h-4 w-4" />
                    Wishlist ({WishlistCount})
                </Link>
                <Link
                    href="/account/settings"
                    className={`flex items-center gap-2 border-b-2 px-4 py-2.5 text-sm font-semibold whitespace-nowrap cursor-pointer transition-all ${
                        activeTab === "settings"
                            ? "border-primary-600 text-primary-600 dark:text-primary-500"
                            : "border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white"
                    }`}
                >
                    <Settings className="h-4 w-4" />
                    Settings
                </Link>
            </div>
        </>
    );
};

export default Navigation;
