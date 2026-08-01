"use client";

import { useCart } from "../hooks/useCart";
import CartItem from "./CartItem";
import { HandbagIcon, MoveLeft, MoveRight } from "lucide-react";
import { Link } from "@/components/UI/Link";
import { useRef, useState } from "react";
import Modal from "@/components/UI/Modal";
import { HiOutlineTrash } from "react-icons/hi2";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const CartList = () => {
    const { items, totalQuantity, handleClearCart } = useCart();
    const [showConfirm, setShowConfirm] = useState<boolean>(false);
    const emptyRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            if (totalQuantity === 0) {
                gsap.fromTo(
                    emptyRef.current,
                    {
                        opacity: 0,
                        y: 30,
                    },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        ease: "power3.out",
                    },
                );
            }
        },
        { scope: emptyRef, dependencies: [totalQuantity] },
    );

    const handleClearCartConfirm = () => {
        setShowConfirm(true);
    };

    if (totalQuantity === 0) {
        return (
            <div ref={emptyRef} className="lg:col-span-2">
                <div className="py-16 text-center">
                    <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
                        <HandbagIcon className="h-12 w-12 text-gray-400" />
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">
                        Your cart is empty
                    </h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-400">
                        Looks like you haven't added anything to your cart yet.
                    </p>
                    <Link
                        href="/products"
                        className="continue-shopping mt-8 inline-flex items-center gap-2 rounded-full bg-primary-600 px-8 py-4 font-semibold text-white shadow-lg shadow-primary-500/30 transition-all hover:bg-primary-700 hover:shadow-xl"
                    >
                        Start Shopping <MoveRight className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <>
            <Modal
                isOpen={showConfirm}
                onClose={() => setShowConfirm(false)}
                render={(handleCloseAnimation) => (
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="modal-content flex flex-col gap-4 bg-gray-100 dark:bg-gray-900 py-4 px-6 rounded-lg shadow-lg"
                    >
                        <h3 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">
                            Are you sure you want to clear your cart?
                        </h3>
                        <p className="mt-2 text-red-600 font-medium">
                            This action cannot be undone.
                        </p>
                        <div className="mt-8 flex items-center justify-around">
                            <button
                                onClick={handleClearCart}
                                className="flex items-center justify-center gap-2 dark:bg-gray-800 bg-gray-300 text-gray-950 dark:text-gray-50 px-6 py-2 rounded-lg cursor-pointer dark:hover:bg-red-800 hover:bg-red-500 transition-all duration-300 shadow-xl dark:hover:shadow-red-900/70 hover:shadow-red-300/70"
                            >
                                <HiOutlineTrash className="h-4 w-4" />
                                Clear Cart
                            </button>
                            <button
                                onClick={() => {
                                    handleCloseAnimation();
                                }}
                                className="dark:bg-gray-800 bg-gray-300 text-gray-950 dark:text-gray-50 px-6 py-2 rounded-lg cursor-pointer dark:hover:bg-primary-700 hover:bg-primary-500 transition-colors duration-300 shadow-xl dark:hover:shadow-black/30 hover:shadow-black/20"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                )}
            ></Modal>
            <div className="lg:col-span-2">
                {/* Cart Header */}
                <div className="mb-4 hidden border-b border-gray-200 pb-4 dark:border-gray-800 sm:grid sm:grid-cols-12 sm:gap-4">
                    <div className="col-span-6 text-sm font-medium text-gray-500 dark:text-gray-400">
                        Product
                    </div>
                    <div className="col-span-2 text-center text-sm font-medium text-gray-500 dark:text-gray-400">
                        Price
                    </div>
                    <div className="col-span-2 text-center text-sm font-medium text-gray-500 dark:text-gray-400">
                        Quantity
                    </div>
                    <div className="col-span-2 text-center text-sm font-medium text-gray-500 dark:text-gray-400">
                        Total
                    </div>
                </div>
                {/* Cart Items List */}
                <div className="divide-y divide-gray-200 dark:divide-gray-800">
                    {/* Cart Item */}
                    {items.map((item) => (
                        <CartItem
                            key={`${item.productId}-${item.color.name}-${item.size}`}
                            item={item}
                        />
                    ))}
                </div>
                {/* Continue Shopping */}
                <div className="mt-8 flex items-center justify-between border-t border-gray-200 pt-8 dark:border-gray-800">
                    <Link
                        href="/products"
                        className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:hover:text-primary-600 hover:text-primary-600 dark:text-gray-400"
                    >
                        <MoveLeft className="w-5 h-5" />
                        Continue Shopping
                    </Link>
                    <button
                        onClick={handleClearCartConfirm}
                        className="text-sm font-medium text-red-600 hover:text-red-700"
                    >
                        Clear Cart
                    </button>
                </div>
            </div>
        </>
    );
};

export default CartList;
