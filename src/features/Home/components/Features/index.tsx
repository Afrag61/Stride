import { CarFront, RefreshCcw, Scale } from "lucide-react";
import { HiOutlineShieldCheck } from "react-icons/hi2";
import FeaturesItem from "./FeaturesItem";
import type { LucideIcon } from "lucide-react";

const featuresList = [
    {
        Icon: CarFront as LucideIcon,
        title: "Free Shipping",
        description:
            "Free standard shipping on all orders over $75. Express options available.",
    },
    {
        Icon: RefreshCcw as LucideIcon,
        title: "60-Day Returns",
        description:
            "Changed your mind? Return unworn items within 60 days, no questions asked.",
    },
    {
        Icon: Scale as LucideIcon,
        title: "Size Guarantee",
        description:
            "Not the right fit? Exchange for a different size at no extra cost.",
    },
    {
        Icon: HiOutlineShieldCheck as LucideIcon,
        title: "Secure Checkout",
        description:
            "Your payment information is encrypted and secure. Shop with confidence.",
    },
];

const Index = () => {
    return (
        <div className="border-y border-gray-200 bg-gray-50 py-16 dark:border-gray-800 dark:bg-gray-900">
            <div className="mx-auto max-w-7xl px-4 lg:px-8">
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {featuresList.map((feature, index) => (
                        <FeaturesItem
                            key={index}
                            Icon={feature.Icon}
                            title={feature.title}
                            description={feature.description}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Index;
