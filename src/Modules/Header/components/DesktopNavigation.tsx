"use client";

import { Link } from "@/components/UI/Link";
import { usePathname } from "next/navigation";
import { navLinks } from "../NavLinks";

const DesktopNavigation = () => {
    const pathname = usePathname();

    return (
        <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
                const isActive =
                    link.highlightActive &&
                    (pathname === link.href ||
                        pathname.startsWith(`${link.href}/`));

                return (
                    <Link
                        title={link.label}
                        aria-label={link.label}
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
