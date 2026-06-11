"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    { href: "/products", label: "Shop" },
    { href: "/categories", label: "Categories" },
    { href: "/products?filter=new", label: "New Arrivals" },
    { href: "/products?filter=sale", label: "Sale" },
    { href: "/about", label: "About" },
];

const DesktopNavigation = () => {
    const pathname = usePathname();

    return (
        <nav className="hidden lg:flex items-center gap-8">
            {links.map((link) => {
                const isActive = pathname.includes(link.href);

                if (link.href.includes("?")) {
                    return (
                        <Link
                            key={link.href}
                            className="text-foreground hover:text-primary-700 font-medium text-sm transition-colors duration-200"
                            href={link.href}
                        >
                            {link.label}
                        </Link>
                    );
                }

                return (
                    <Link
                        key={link.href}
                        className={
                            isActive
                                ? "text-primary-600 font-medium text-sm"
                                : "text-foreground hover:text-primary-700 font-medium text-sm transition-colors duration-200"
                        }
                        href={link.href}
                    >
                        {link.label}
                    </Link>
                );
            })}
        </nav>
    );
};

export default DesktopNavigation;
