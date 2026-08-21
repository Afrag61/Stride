"use client";

import { useCart } from "../hooks/useCart";
import type { TCartItem } from "@/types";
import { MinusIcon, PlusIcon, XIcon } from "lucide-react";
import { Link } from "@/components/UI/Link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

interface Props {
    item: TCartItem;
}
const CartItem: React.FC<Props> = ({ item }) => {
    const { handleRemoveFromCart, handleAddToCart, handleClearItemFromCart } =
        useCart();
    const itemRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            if (itemRef.current) {
                gsap.fromTo(
                    itemRef.current,
                    { opacity: 0, y: 20 },
                    { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" },
                );
            }
        },
        { scope: itemRef },
    );

    const animateOutAndRemove = (removeAction: () => void) => {
        if (itemRef.current) {
            gsap.to(itemRef.current, {
                opacity: 0,
                height: 0,
                paddingTop: 0,
                paddingBottom: 0,
                marginTop: 0,
                marginBottom: 0,
                overflow: "hidden",
                duration: 0.4,
                ease: "power2.inOut",
                onComplete: removeAction,
            });
        } else {
            removeAction();
        }
    };

    const handleRemove = () => {
        animateOutAndRemove(() => {
            handleClearItemFromCart(item.productId, item.color.name, item.size);
        });
    };

    return (
        <div ref={itemRef} className="cart-item py-6">
            <div className="flex gap-4 sm:grid sm:grid-cols-12 sm:items-center sm:gap-4">
                {/* Product Image & Info */}
                <div className="flex gap-4 sm:col-span-6">
                    <Link
                        href={`/products/${item.productId}`}
                        className="h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800"
                    >
                        <img
                            src={item.image}
                            alt={item.name}
                            className="h-full w-full object-cover"
                        />
                    </Link>
                    <div className="min-w-0 flex-1">
                        <h3 className="font-medium text-gray-900 dark:text-white">
                            <Link
                                href={`/products/${item.productId}`}
                                className="hover:text-primary-600"
                            >
                                {item.name}
                            </Link>
                        </h3>
                        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                            Size: {item.size} | Color: {item.color.name}
                        </p>
                        <button
                            onClick={handleRemove}
                            className="mt-2 text-sm font-medium text-red-600 hover:text-red-700 sm:hidden"
                        >
                            Remove
                        </button>
                    </div>
                </div>
                {/* Price */}
                <div className="hidden text-center sm:col-span-2 sm:block">
                    {item.discount > 0 && (
                        <span className="font-medium text-gray-900 dark:text-white">
                            ${item.discountedPrice}
                        </span>
                    )}
                    {item.discount > 0 && (
                        <span className="block text-sm text-gray-500 line-through">
                            ${item.price}
                        </span>
                    )}
                    {item.discount === 0 && (
                        <span className="font-medium text-gray-900 dark:text-white">
                            ${item.price}
                        </span>
                    )}
                </div>
                {/* Quantity */}
                <div className="ml-auto sm:col-span-2 sm:ml-0">
                    <div className="flex items-center justify-center">
                        <button
                            onClick={() =>
                                handleRemoveFromCart(
                                    item.productId,
                                    item.color.name,
                                    item.size,
                                )
                            }
                            disabled={item.quantity <= 1}
                            className="flex h-8 w-8 items-center justify-center rounded-l-lg border border-gray-300 text-gray-600 hover:bg-gray-100 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 cursor-pointer disabled:cursor-not-allowed disabled:opacity-40"
                        >
                            <MinusIcon className="h-4 w-4" />
                        </button>
                        <div className="h-8 w-12 border-y border-gray-300 bg-white text-center flex items-center justify-center text-sm text-gray-900 dark:border-gray-700 dark:bg-gray-900 dark:text-white">
                            {item.quantity}
                        </div>
                        <button
                            onClick={() => handleAddToCart(item)}
                            disabled={item.quantity >= 10}
                            className="quantity-btn flex h-8 w-8 items-center justify-center rounded-r-lg border border-gray-300 text-gray-600 hover:bg-gray-100 cursor-pointer disabled:cursor-not-allowed disabled:opacity-40 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-800"
                        >
                            <PlusIcon className="h-4 w-4" />
                        </button>
                    </div>
                </div>
                {/* Total & Remove */}
                <div className="hidden items-center justify-end gap-4 sm:col-span-2 sm:flex">
                    <span className="font-semibold text-gray-900 dark:text-white">
                        ${item.totalPrice}
                    </span>
                    <button
                        onClick={handleRemove}
                        className="text-gray-400 hover:text-red-600"
                    >
                        <XIcon className="h-5 w-5 cursor-pointer" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
