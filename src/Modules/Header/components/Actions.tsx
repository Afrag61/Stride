import { Link } from "@/components/UI/Link";
import { Heart, Handbag, User, LogOut } from "lucide-react";
import { getUserData } from "@/Modules/Auth/actions";
import ThemeToggle from "@/Modules/Theme/components/theme-toggle";
import Search from "./Search";
import Logout from "@/Modules/Auth/Logout";
// import { useCart } from "@/hooks/useCart";

const Actions = async () => {
    // const { totalQuantity } = useCart();

    const isAuthenticated = await getUserData();

    return (
        <>
            <div className="flex items-center gap-2 dark:text-gray-400 text-gray-600">
                {/* Search Modal & Button */}
                <Search />

                {/* Theme Toggler */}
                <ThemeToggle />

                <Link
                    href="/wishlist"
                    className="hidden md:block rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 p-2"
                >
                    <Heart className="h-5 w-5" />
                </Link>
                <Link
                    href="/cart"
                    className="relative rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 p-2"
                >
                    <span className="absolute -top-1 -right-1 bg-primary-600 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold">
                        {/* {totalQuantity} */}0
                    </span>
                    <Handbag className="h-5 w-5" />
                </Link>

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
                        <Link
                            href="/login"
                            className="ml-2 hidden sm:flex items-center gap-2 rounded-full text-sm font-medium font-display text-gray-400 shadow-lg transition-all hover:text-primary-600 active:scale-95"
                        >
                            Sign In
                        </Link>
                    )}
                </div>
            </div>
        </>
    );
};

export default Actions;
