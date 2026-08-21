import { useState } from "react";
import useScrollLock from "./useScrollLock";
import { usePathname } from "next/navigation";

const useMobileNavigation = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const pathname = usePathname();
    useScrollLock(isNavOpen);

    const isActiveLink = (href: string) => {
        return pathname === href || pathname.startsWith(`${href}/`);
    };

    const handleOpenNav = () => setIsNavOpen(true);
    const handleCloseNav = () => setIsNavOpen(false);

    return { isNavOpen, handleOpenNav, handleCloseNav, isActiveLink };
};

export default useMobileNavigation;
