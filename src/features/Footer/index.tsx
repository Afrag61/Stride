import FooterList from "./components/FooterList";
import Brand from "./components/Brand";
import BottomBar from "./components/BottomBar";
import NewsLetter from "./components/NewsLetter";

const shopLinks = [
    { name: "Running", href: "/products?category=running" },
    { name: "Sneakers", href: "/products?category=sneakers" },
    { name: "Basketball", href: "/products?category=basketball" },
    { name: "Casual", href: "/products?category=casual" },
    { name: "Boots", href: "/products?category=boots" },
    { name: "Sandals", href: "/products?category=sandals" },
];

const helpLinks = [
    { name: "FAQ", href: "/faq" },
    { name: "Shipping & Returns", href: "/shipping" },
    { name: "Size Guide", href: "/size-guide" },
    { name: "Contact Us", href: "/contact" },
    { name: "Track Order", href: "/track-order" },
];

const aboutLinks = [
    { name: "Our Story", href: "/about" },
    { name: "Sustainability", href: "/sustainability" },
    { name: "Athletes", href: "/athletes" },
    { name: "Careers", href: "/careers" },
    { name: "Store Locator", href: "/stores" },
];

const Footer = () => {
    return (
        <footer className="bg-gray-50 dark:bg-gray-900">
            {/* News Letter */}
            <NewsLetter />
            {/* Main Footer */}
            <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand */}
                    <Brand />
                    {/* Shop */}
                    <FooterList list={shopLinks} title="Shop" />
                    {/* help */}
                    <FooterList list={helpLinks} title="Help" />
                    {/* About */}
                    <FooterList list={aboutLinks} title="About" />
                </div>
            </div>
            {/* Bottom Bar */}
            <BottomBar />
        </footer>
    );
};

export default Footer;
