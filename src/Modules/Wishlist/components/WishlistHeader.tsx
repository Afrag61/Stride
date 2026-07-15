"use client";

import usePort from "@/Modules/Header/hooks/usePort";
import PageHeader from "@/components/UI/PageHeader";
import { HiOutlineTrash } from "react-icons/hi2";
import { useState } from "react";
import Modal from "@/components/UI/Modal";
import { clearWishlist } from "../actions";

interface Props {
    length: number;
}

const WishlistHeader: React.FC<Props> = ({ length }) => {
    const { handlePortContent } = usePort("page-header-btn");
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleClearAllConfirm = () => {
        setIsModalOpen(true);
    };

    const handleClearAll = () => {
        clearWishlist();
    };

    return (
        <>
            <PageHeader
                title="My Wishlist"
                description={`${length} items saved`}
            />
            {/* Clear All Button */}
            {handlePortContent(
                <button
                    onClick={handleClearAllConfirm}
                    className="hidden items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 sm:flex cursor-pointer"
                >
                    <HiOutlineTrash className="h-4 w-4" />
                    Clear All
                </button>,
            )}

            <Modal
                isOpen={isModalOpen}
                onOpen={() => setIsModalOpen(true)}
                onClose={() => setIsModalOpen(false)}
                render={(handleCloseAnimation) => (
                    <div
                        className="modal-content mx-auto max-w-2xl rounded-2xl dark:bg-gray-900 bg-gray-50"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="p-6">
                            <p className="text-lg mb-4 text-center text-gray-950 dark:text-gray-50 py-8">
                                Are you sure you want to clear your wishlist?
                            </p>
                            <div className="flex gap-4 justify-evenly">
                                <button
                                    onClick={() => {
                                        handleClearAll();
                                        handleCloseAnimation();
                                    }}
                                    className="flex items-center justify-center gap-2 dark:bg-gray-800 bg-gray-300 text-gray-950 dark:text-gray-50 px-6 py-2 rounded-lg cursor-pointer dark:hover:bg-red-800 hover:bg-red-500 transition-all duration-300 shadow-xl dark:hover:shadow-red-900/70 hover:shadow-red-300/70"
                                >
                                    <HiOutlineTrash className="h-4 w-4" />
                                    Clear All
                                </button>
                                <button
                                    onClick={handleCloseAnimation}
                                    className="dark:bg-gray-800 bg-gray-300 text-gray-950 dark:text-gray-50 px-6 py-2 rounded-lg cursor-pointer dark:hover:bg-primary-700 hover:bg-primary-500 transition-colors duration-300 shadow-xl dark:hover:shadow-black/30 hover:shadow-black/20"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            />
        </>
    );
};

export default WishlistHeader;
