"use client";

import Link from "next/link";
import useMobileNavigation from "../hooks/useMobileNavigation";
import { Menu, X } from "lucide-react";

import Modal from "@/components/UI/Modal";
import Logo from "@/components/UI/Logo";

const links = [
    { href: "/products", label: "Shop" },
    { href: "/categories", label: "Categories" },
    { href: "/products?filter=new", label: "New Arrivals" },
    { href: "/products?filter=sale", label: "Sale" },
    { href: "/about", label: "About" },
];

const MobileNavigationDrawer: React.FC = () => {
    const { isNavOpen, handleOpenNav, handleCloseNav, isActiveLink } =
        useMobileNavigation();

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
                onOpen={handleOpenNav}
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
                            {links.map((link) => {
                                const isActive = isActiveLink(link.href);

                                if (link.href.includes("?")) {
                                    return (
                                        <Link
                                            onClick={closeWithAnimation}
                                            key={link.href}
                                            className="block rounded-lg px-4 py-3 text-base font-medium transition-colors text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-900"
                                            href={link.href}
                                        >
                                            {link.label}
                                        </Link>
                                    );
                                }

                                return (
                                    <Link
                                        onClick={closeWithAnimation}
                                        key={link.href}
                                        className={
                                            isActive
                                                ? "text-primary-600 bg-primary-50 dark:bg-primary-900/20  block rounded-lg px-4 py-3 text-base font-medium"
                                                : "block rounded-lg px-4 py-3 text-base font-medium transition-colors text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-900"
                                        }
                                        href={link.href}
                                    >
                                        {link.label}
                                    </Link>
                                );
                            })}
                            <div className="mt-4 border-t border-border flex flex-col pt-4">
                                <Link
                                    onClick={closeWithAnimation}
                                    href="/wishlist"
                                    className="rounded-lg px-4 py-3 text-base text-foreground hover:bg-gray-100 dark:hover:bg-gray-900 font-medium"
                                >
                                    Wishlist
                                </Link>
                                <Link
                                    onClick={closeWithAnimation}
                                    href="/account"
                                    className="rounded-lg px-4 py-3 text-base text-foreground hover:bg-gray-100 dark:hover:bg-gray-900 font-medium"
                                >
                                    My Account
                                </Link>
                            </div>
                        </nav>
                    </div>
                )}
            />
        </>
    );
};

export default MobileNavigationDrawer;
