"use client";

import { Search } from "lucide-react";
import { Link } from "@/components/UI/Link";
import useSearchModal from "../hooks/useSearchModal";
import Input from "@/components/UI/Input";
import Modal from "@/components/UI/Modal";

const SearchModal = () => {
    const { showSearchModal, handleOpenSearch, handleCloseSearch } =
        useSearchModal();

    return (
        <>
            <button
                onClick={handleOpenSearch}
                className="rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 p-2 cursor-pointer"
            >
                <Search className="h-5 w-5" />
            </button>

            <Modal
                isOpen={showSearchModal}
                onClose={handleCloseSearch}
                onOpen={handleOpenSearch}
                render={(_handleCloseAnimation) => (
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="modal-content mx-auto w-full max-w-2xl rounded-2xl bg-gray-100 p-6 shadow-2xl dark:bg-gray-900 absolute top-30"
                    >
                        <Input
                            type="text"
                            Icon={
                                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                            }
                            placeholder="Search shoes, brands, categories..."
                            autoFocus
                        />

                        <div className="mt-4 flex flex-wrap gap-2">
                            <span className="text-sm text-gray-500">
                                Popular:
                            </span>
                            <Link
                                onClick={handleCloseSearch}
                                href="/products?q=running"
                                className="rounded-full bg-gray-200 px-3 py-1 text-sm text-gray-700 hover:bg-gray-300 dark:hover:bg-gray-700 dark:bg-gray-800 dark:text-gray-300 transition-all duration-200"
                            >
                                Running
                            </Link>
                            <Link
                                onClick={handleCloseSearch}
                                href="/products?q=sneakers"
                                className="rounded-full bg-gray-200 px-3 py-1 text-sm text-gray-700 hover:bg-gray-300 dark:hover:bg-gray-700 dark:bg-gray-800 dark:text-gray-300 transition-all duration-200"
                            >
                                Sneakers
                            </Link>
                            <Link
                                onClick={handleCloseSearch}
                                href="/products?q=boots"
                                className="rounded-full bg-gray-200 px-3 py-1 text-sm text-gray-700 hover:bg-gray-300 dark:hover:bg-gray-700 dark:bg-gray-800 dark:text-gray-300 transition-all duration-200"
                            >
                                Boots
                            </Link>
                        </div>
                        <div className="mt-4 text-center text-sm text-gray-400 dark:text-gray-500 ">
                            Press{" "}
                            <kbd className="rounded bg-gray-200 px-2 py-1 font-mono dark:bg-gray-800">
                                Esc
                            </kbd>{" "}
                            to close
                        </div>
                    </div>
                )}
            />
        </>
    );
};

export default SearchModal;
