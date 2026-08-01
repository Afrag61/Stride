import { Link } from "@/components/UI/Link";
import { Heart, Handbag, User, LogOut } from "lucide-react";
import { getUser } from "@/Modules/Auth/lib/getUser";
import ThemeToggle from "@/Modules/Theme/components/theme-toggle";
import Search from "./Search";
import Logout from "@/Modules/Auth/Logout";
import CartButton from "./CartButton";

const Actions = async () => {
    const user = await getUser();

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
                <CartButton userId={user && user?.id} />

                <div className="flex items-center gap-1 ml-2 border-l border-border pl-2">
                    {!!user ? (
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
                            className="ml-2 hidden sm:flex text-sm font-medium font-display text-white px-2.5 py-1 rounded-lg bg-primary-600 hover:bg-primary-700 shadow-md hover:shadow-lg shadow-primary-500/30 hover:shadow-primary-700/30 transition-all duration-300"
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
