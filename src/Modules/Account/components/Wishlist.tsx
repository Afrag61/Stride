import ProductItem from "@/components/UI/ProductItem";
import { TWishlistList } from "@/types";
import { ArrowRight, Heart } from "lucide-react";
import Link from "next/link";

interface Props {
    wishListProducts: TWishlistList;
}

const Wishlist: React.FC<Props> = ({ wishListProducts }) => {
    return (
        <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                My Wishlist
            </h1>

            {wishListProducts.length === 0 ? (
                <div className="text-center py-16">
                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-50 dark:bg-gray-850 text-gray-400 mb-6">
                        <Heart className="h-10 w-10" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                        Your wishlist is empty
                    </h3>
                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 max-w-sm mx-auto">
                        Add products to your wishlist to keep track of items you
                        love.
                    </p>
                    <Link
                        href="/products"
                        className="group mt-8 inline-flex items-center gap-2 rounded-full bg-primary-600 px-6 py-3 font-semibold text-white shadow-lg shadow-primary-500/25 transition-all hover:bg-primary-700 hover:shadow-xl cursor-pointer active:scale-95"
                    >
                        Browse Products
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                    {wishListProducts.map((item) => (
                        <ProductItem key={item.product_id} {...item.products} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Wishlist;
