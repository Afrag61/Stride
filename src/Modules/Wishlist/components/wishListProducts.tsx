import ProductItem from "@/components/UI/ProductItem";
import type { TWishlistList } from "@/types";
import { MoveRight } from "lucide-react";
import { VscHeart } from "react-icons/vsc";
import { Link } from "@/components/UI/Link";
import WishlistHeader from "./WishlistHeader";
import { createClient } from "@/lib/supabase/server";

let content;

const WishListProducts = async () => {
    const supabase = await createClient();

    const { data: user, error: userError } = await supabase.auth.getUser();

    const { data, error } = await supabase
        .from("wishlist")
        .select("*,products(*, category(id, name))")
        .eq("user_id", user?.user?.id);

    const wishlist = data as TWishlistList;

    if (wishlist.length === 0) {
        content = (
            <>
                <div className="py-16 text-center">
                    <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800">
                        <VscHeart className="h-12 w-12 text-gray-400" />
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">
                        Your wishlist is empty
                    </h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-400">
                        Start adding items you love by clicking the heart icon
                        on any product.
                    </p>
                    <Link
                        href="/products"
                        className="group mt-8 inline-flex items-center gap-2 rounded-full bg-primary-600 px-8 py-4 font-semibold text-white shadow-lg shadow-primary-500/30 transition-all hover:bg-primary-700 hover:shadow-xl"
                    >
                        Start Shopping
                        <MoveRight className="h-5 w-5 transition-all duration-300" />
                    </Link>
                </div>
            </>
        );
    } else {
        content = (
            <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
                {wishlist.map((wishlistItem) => {
                    return (
                        <ProductItem
                            key={wishlistItem.id}
                            {...wishlistItem.products}
                            isFavorite
                        />
                    );
                })}
            </div>
        );
    }
    return (
        <>
            {/* Page Header */}
            <WishlistHeader length={wishlist.length} />
            {/* Wishlist Content */}
            <div className="py-12 lg:py-16">
                <div className="mx-auto max-w-7xl px-4 lg:px-8">{content}</div>
            </div>
        </>
    );
};

export default WishListProducts;
