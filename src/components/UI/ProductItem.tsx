"use client";

import type { TProduct } from "@/types";
import { Handbag, Heart, Star } from "lucide-react";
import { Link } from "@/components/UI/Link";
import Image from "next/image";
import { addToWishlist, removeFromWishlist } from "@/Modules/Wishlist/actions";

// import { useCart } from "@/hooks/useCart";

import { useEffect, useOptimistic, useState, useTransition } from "react";
import { supabase } from "@/lib/supabase/client";
import toast from "react-hot-toast";
import { useRouter, usePathname } from "next/navigation";

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
    isFavorite,
}) => {
    // const { handleAddToCart } = useCart();

    const router = useRouter();
    const pathname = usePathname();
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        (async () => {
            const { data, error } = await supabase.auth.getUser();

            setIsAuthenticated(!!data.user);
        })();
    }, []);

    const [isLiked, setIsLiked] = useState(isFavorite);
    const [optimisticIsLiked, toggleOptimisticLike] = useOptimistic(
        isLiked,
        (currentState, _) => !currentState,
    );
    const [pending, startTransition] = useTransition();

    const handleLike = async () => {
        if (!isAuthenticated) {
            toast.error("Please sign in to manage your wishlist");
            router.push(`/login?next=${pathname}`);
            return;
        }

        startTransition(async () => {
            toggleOptimisticLike(null);

            const wasLiked = isLiked;

            if (!wasLiked) {
                setIsLiked(true);
                const error = await addToWishlist(id);

                if (error) {
                    setIsLiked(wasLiked);
                    if (error.code === "23505") {
                        toast.error("Product already in wishlist");
                        setIsLiked(true);
                        return;
                    }
                    toast.error("Something went wrong");
                    setIsLiked(wasLiked);

                    return;
                }
                toast.success("Added to wishlist");
            } else {
                setIsLiked(false);
                const error = await removeFromWishlist(id);
                if (error) {
                    setIsLiked(wasLiked);
                    toast.error("Something went wrong");
                    return;
                }
                toast.success("Removed from wishlist");
            }
        });
    };

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
                            onClick={(e) => {
                                e.preventDefault();
                                handleLike();
                            }}
                            disabled={pending}
                            className="flex h-10 w-10 items-center justify-center rounded-lg bg-white shadow-lg transition-colors hover:bg-gray-100 dark:text-black cursor-pointer"
                        >
                            <Heart
                                className={`h-4 w-4 transition-all duration-200 ${pending && "animate-pulse"} ${
                                    optimisticIsLiked
                                        ? "fill-red-500 stroke-red-500 scale-110"
                                        : "fill-none stroke-red-600"
                                }`}
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
                            key={`${color.value}-${idx}`}
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
