"use client";

import useMobileNavigation from "../hooks/useMobileNavigation";
import { navLinks } from "../NavLinks";
import { Menu, X } from "lucide-react";

import Modal from "@/components/UI/Modal";
import Logo from "@/components/UI/Logo";
import { useRouter } from "next/navigation";

const MobileNavigationDrawer: React.FC = () => {
    const { isNavOpen, handleOpenNav, handleCloseNav, isActiveLink } =
        useMobileNavigation();
    const router = useRouter();

    const onLinkClick = (href: string, onClose: () => void) => {
        if (isActiveLink(href)) return;
        router.push(href);
        onClose();
    };

    return (
        <>
            <div className="lg:hidden">
                <button
                    onClick={handleOpenNav}
                    className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 font-medium text-sm cursor-pointer"
                >
                    <Menu className="h-6 w-6" />
                </button>
            </div>

            <Modal
                isOpen={isNavOpen}
                onClose={handleCloseNav}
                render={(closeWithAnimation) => (
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="modal-content w-full border-y border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950 lg:hidden absolute top-0"
                    >
                        <nav className="mx-auto max-w-7xl p-4 flex flex-col">
                            <div className="w-full pb-4 mb-4 flex justify-between border-b border-gray-200 dark:border-gray-800">
                                <Logo onClick={closeWithAnimation} />
                                <button
                                    onClick={closeWithAnimation}
                                    className="rounded-lg px-4 py-3 text-base font-medium transition-colors text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-900"
                                >
                                    <X className="h-6 w-6" />
                                </button>
                            </div>
                            {navLinks.map((link) => {
                                const isActive =
                                    link.highlightActive &&
                                    isActiveLink(link.href);

                                return (
                                    <button
                                        title={link.label}
                                        aria-label={link.label}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            onLinkClick(
                                                link.href,
                                                closeWithAnimation,
                                            );
                                        }}
                                        key={link.href}
                                        className={
                                            isActive
                                                ? "text-left text-primary-600 bg-primary-50 dark:bg-primary-900/20  block rounded-lg px-4 py-3 text-base font-medium cursor-default"
                                                : "text-left block rounded-lg px-4 py-3 text-base font-medium transition-colors text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-900 cursor-pointer"
                                        }
                                    >
                                        {link.label}
                                    </button>
                                );
                            })}
                            <div className="mt-4 border-t border-border flex flex-col pt-4">
                                <button
                                    title="Wishlist"
                                    aria-label="Wishlist"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        onLinkClick(
                                            "/wishlist",
                                            closeWithAnimation,
                                        );
                                    }}
                                    className={
                                        isActiveLink("/wishlist")
                                            ? "text-left text-primary-600 bg-primary-50 dark:bg-primary-900/20  block rounded-lg px-4 py-3 text-base font-medium cursor-default"
                                            : "text-left block rounded-lg px-4 py-3 text-base font-medium transition-colors text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-900 cursor-pointer"
                                    }
                                >
                                    Wishlist
                                </button>
                                <button
                                    title="My Account"
                                    aria-label="My Account"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        onLinkClick(
                                            "/account",
                                            closeWithAnimation,
                                        );
                                    }}
                                    className={
                                        isActiveLink("/account")
                                            ? "text-left text-primary-600 bg-primary-50 dark:bg-primary-900/20  block rounded-lg px-4 py-3 text-base font-medium cursor-default"
                                            : "text-left block rounded-lg px-4 py-3 text-base font-medium transition-colors text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-900 cursor-pointer"
                                    }
                                >
                                    My Account
                                </button>
                            </div>
                        </nav>
                    </div>
                )}
            />
        </>
    );
};

export default MobileNavigationDrawer;
