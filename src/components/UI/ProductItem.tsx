import type { TProduct } from "@/types";
import { calculateDiscount } from "@/lib/calculateDiscount";
import { Handbag, Heart, Star } from "lucide-react";
import { Link } from "@/components/UI/Link";
import Image from "next/image";
// import toast from "react-hot-toast";
// import { useCart } from "@/hooks/useCart";
// import { useWishList } from "@/hooks/useWishList";
// import { useAuth } from "@/hooks/useAuth";
// import { useNavigate } from "react-router";
// import { useState } from "react";

interface Props extends TProduct {}

const ProductItem: React.FC<Props> = ({
    id,
    images,
    availableSizes,
    category,
    colors,
    discount,
    name,
    price,
    rate,
    tag,
    price_after_discount,
}) => {
    // const { addToWishlist, removeFromWishlist, wishlist } = useWishList();
    // const { handleAddToCart } = useCart();
    // const { isAuthenticated } = useAuth();
    // const navigate = useNavigate();

    const { priceAfterDiscount } = calculateDiscount(price, discount);

    // const isFavorite = wishlist.some(
    //     (wishlistItem) => wishlistItem.product_id === id,
    // );
    // const [isLiked, setIsLiked] = useState(isFavorite);

    // const handleLike = () => {
    //     if (!isAuthenticated) {
    //         toast.error("Please sign in to manage your wishlist");
    //         navigate("/login");
    //         return;
    //     }

    //     if (!isLiked) {
    //         const promise = addToWishlist(id).unwrap();
    //         toast
    //             .promise(promise, {
    //                 loading: "Adding to wishlist...",
    //                 success: "Added to wishlist",
    //                 error: "Failed to add to wishlist",
    //             })
    //             .then(() => setIsLiked(true))
    //             .catch(() => {});
    //     } else {
    //         const promise = removeFromWishlist(id).unwrap();
    //         toast
    //             .promise(promise, {
    //                 loading: "Removing from wishlist...",
    //                 success: "Removed from wishlist",
    //                 error: "Failed to remove from wishlist",
    //             })
    //             .then(() => setIsLiked(false))
    //             .catch(() => {});
    //     }
    // };

    // const handleCart: React.MouseEventHandler = (e) => {
    //     e.preventDefault();

    //     if (!isAuthenticated) {
    //         toast.error("Please sign in to add items to your cart");
    //         navigate("/login");
    //         return;
    //     }

    //     handleAddToCart({
    //         price,
    //         name,
    //         color: colors[0],
    //         size: availableSizes[0],
    //         image: images[0],
    //         discount,
    //         discountedPrice: priceAfterDiscount,
    //         quantity: 1,
    //         productId: id,
    //         totalPrice: price,
    //     });

    //     toast.success("Added to Cart");
    // };

    return (
        <div className="group relative">
            {/* Image Container */}
            <Link
                href={`/products/${id}`}
                className="block overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800"
            >
                <div className="relative aspect-square">
                    <Image
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        src={images[0]}
                        alt={name}
                        width={300}
                        height={300}
                        loading="lazy"
                    />
                    {/* Badges */}
                    <div className="absolute left-3 top-3 flex flex-col gap-2">
                        {discount > 0 && (
                            <span className="w-fit rounded-full bg-primary-500 px-2.5 py-1 text-xs font-bold text-white">
                                -{discount}%
                            </span>
                        )}
                        <span
                            className={`rounded-full ${tag === "BESTSELLER" ? "bg-amber-500" : tag === "NEW" && "bg-green-500"} px-2.5 py-1 text-xs font-bold text-white`}
                        >
                            {tag}
                        </span>
                    </div>
                    {/* Quick Actions */}
                    <div className="absolute bottom-3 left-3 right-3 flex gap-2 opacity-0 transition-all duration-300 group-hover:opacity-100 max-sm:opacity-100">
                        <button
                            // onClick={handleCart}
                            className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-white py-2.5 text-sm font-semibold text-gray-900 shadow-lg transition-colors hover:bg-gray-100 cursor-pointer"
                        >
                            <Handbag className="h-4 w-4 text-gray-950" /> Add to
                            Cart
                        </button>
                        <button
                            // onClick={(e) => {
                            //     e.preventDefault();
                            //      handleLike();
                            // }}
                            className="flex h-10 w-10 items-center justify-center rounded-lg bg-white shadow-lg transition-colors hover:bg-gray-100 dark:text-black cursor-pointer"
                        >
                            <Heart
                                // fill={isLiked ? "currentcolor" : "none"}
                                className={`h-4 w-4 `}
                            />
                        </button>
                    </div>
                </div>
            </Link>
            {/* Product Info */}
            <div className="mt-4">
                <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0 flex-1">
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            {category.name}
                        </p>
                        <h3 className="mt-1 truncate font-medium text-gray-900 dark:text-white">
                            <Link
                                href={`/products/${id}`}
                                className="hover:text-primary-600"
                            >
                                {name}
                            </Link>
                        </h3>
                    </div>
                    {/* Rating */}
                    <div className="flex shrink-0 items-center gap-1">
                        <Star
                            fill="currentcolor"
                            className="h-4 w-4 text-yellow-400"
                        />
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                            {rate}
                        </span>
                    </div>
                </div>
                {/* Price */}
                <div className="mt-2 flex items-center gap-2">
                    {price_after_discount && (
                        <span className="font-semibold text-gray-900 dark:text-white">
                            ${price_after_discount}
                        </span>
                    )}
                    {discount > 0 && (
                        <span className="text-sm text-gray-500 line-through">
                            ${price}
                        </span>
                    )}
                </div>
                {/* Colors */}
                <div className="mt-3 flex items-center gap-1.5">
                    {colors.map((color, idx) => (
                        <span
                            key={`${color.value}-${idx}-${Math.random()}`}
                            className={`h-4 w-4 rounded-full border border-gray-300 dark:border-gray-600`}
                            style={{ backgroundColor: color.value }}
                            title={color.name}
                        ></span>
                    ))}
                </div>
                {/* Size Preview */}
                <p className="mt-2 text-xs text-gray-500">
                    {availableSizes.length} sizes available
                </p>
            </div>
        </div>
    );
};

export default ProductItem;
