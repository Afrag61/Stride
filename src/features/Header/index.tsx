import DesktopNavigation from "./components/DesktopNavigation";
import MobileNavigationDrawer from "./components/MobileNavigationDrawer";
import Actions from "./components/Actions";
import Logo from "@/components/UI/Logo";

const Header = () => {
    return (
        <>
            <div className="bg-linear-to-r from-primary-600 to-primary-500 py-2 text-center text-sm font-medium text-white">
                Free shipping on orders over $75 | Use code{" "}
                <span className="font-bold">STRIDE20</span> for 20% off your
                first order
            </div>
            <header className="bg-background/90 backdrop-blur-sm sticky top-0 border-b border-border z-50">
                <div className="mx-auto max-w-7xl px-4 lg:px-8">
                    <div className="flex h-16 items-center justify-between lg:h-20 ">
                        {/* Mobile Navigation Button */}
                        <MobileNavigationDrawer />
                        {/* Logo */}
                        <Logo />

                        {/* Desktop Navigation */}

                        <DesktopNavigation />

                        {/* Actions */}

                        <Actions />
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
