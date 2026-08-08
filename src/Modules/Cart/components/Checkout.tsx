"use client";

import { useState } from "react";
import { useCart } from "@/Modules/Cart/hooks/useCart";
import { LockKeyhole } from "lucide-react";

import Modal from "@/components/UI/Modal";
import CheckoutForm from "./CheckoutForm";

const Checkout = () => {
    const { totalPrice } = useCart();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isCheckoutSubmitting, setIsCheckoutSubmitting] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    return (
        <div className="lg:col-span-1">
            <div className="sticky top-24 rounded-2xl bg-gray-50 p-6 dark:bg-gray-900">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Order Summary
                </h2>
                {/* Summary */}
                <div className="mt-6 space-y-4 border-t border-gray-200 pt-6 dark:border-gray-800">
                    <div className="flex justify-between text-sm">
                        <span className="text-gray-600 dark:text-gray-400">
                            Subtotal
                        </span>
                        <span className="font-medium text-gray-900 dark:text-white">
                            ${totalPrice}
                        </span>
                    </div>
                    <div className="flex justify-between text-sm">
                        <span className="text-gray-600 dark:text-gray-400">
                            Shipping
                        </span>
                        <span className="font-medium text-gray-900 dark:text-white">
                            FREE
                        </span>
                    </div>
                    <p className="text-xs text-green-600 dark:text-green-400">
                        You qualify for free shipping!
                    </p>
                    <div className="flex justify-between text-sm">
                        <span className="text-gray-600 dark:text-gray-400">
                            Estimated Tax
                        </span>
                        <span className="font-medium text-gray-900 dark:text-white">
                            $35
                        </span>
                    </div>
                    <div className="flex justify-between border-t border-gray-200 pt-4 dark:border-gray-800">
                        <span className="text-base font-semibold text-gray-900 dark:text-white">
                            Total
                        </span>
                        <span className="text-base font-semibold text-gray-900 dark:text-white">
                            ${totalPrice > 0 ? totalPrice + 35 : 0}
                        </span>
                    </div>
                </div>
                {/* Checkout Button */}
                <button
                    onClick={handleOpenModal}
                    disabled={totalPrice === 0}
                    className="mt-6 w-full flex items-center justify-center rounded-full bg-primary-600 px-8 py-4 font-semibold text-white shadow-lg shadow-primary-500/30 hover:bg-primary-700 hover:shadow-xl hover:shadow-primary-500/40 disabled:cursor-not-allowed disabled:bg-gray-400 disabled:shadow-none transition-all duration-300 ease-in-out cursor-pointer"
                >
                    Proceed to Checkout
                </button>
                {/* Security Badge */}
                <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <LockKeyhole className="h-4 w-4" />
                    Secure Checkout
                </div>
            </div>

            {/* Checkout Modal */}
            <Modal
                isOpen={isModalOpen}
                preventClose={isCheckoutSubmitting}
                onClose={() => setIsModalOpen(false)}
                render={(handleCloseAnimation) => (
                    <div
                        className="modal-content flex h-fit w-fit items-center justify-center shadow-2xl p-4 rounded-xl dark:bg-gray-900 bg-gray-100 font-display"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="w-[90vw] max-w-2xl max-h-[85vh] overflow-y-auto p-2 sm:p-4">
                            {/* Modal Header */}

                            <div className="flex items-start flex-col mb-6">
                                <h2 className="text-xl uppercase font-bold text-gray-900 dark:text-white ">
                                    Checkout
                                </h2>
                                <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                                    Complete your order details below
                                </p>
                            </div>

                            {/* Checkout Form */}

                            <CheckoutForm
                                onClose={handleCloseAnimation}
                                onSubmittingChange={setIsCheckoutSubmitting}
                            />
                        </div>
                    </div>
                )}
            />
        </div>
    );
};

export default Checkout;
