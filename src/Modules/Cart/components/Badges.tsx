import { CarFront, RefreshCcw, type LucideIcon } from "lucide-react";
import { HiOutlineShieldCheck } from "react-icons/hi2";

const BadgesList = [
    {
        Icon: CarFront as LucideIcon,
        title: "Free Shipping",
        description: "On orders over $75",
    },
    {
        Icon: RefreshCcw as LucideIcon,
        title: "60-Day Returns",
        description: "Easy returns & exchanges",
    },
    {
        Icon: HiOutlineShieldCheck as LucideIcon,
        title: "Secure Payment",
        description: "SSL encrypted checkout",
    },
];

const Badges = () => {
    return (
        <section className="border-t border-gray-200 bg-gray-50 py-8 dark:border-gray-800 dark:bg-gray-900/50">
            <div className="mx-auto max-w-7xl px-4 lg:px-8">
                <div className="grid gap-6 sm:grid-cols-3">
                    {BadgesList.map((badge, idx) => (
                        <div key={idx} className="flex items-center gap-4">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-100 dark:bg-primary-900/30">
                                <badge.Icon className="h-6 w-6 text-primary-600" />
                            </div>
                            <div>
                                <p className="font-medium text-gray-900 dark:text-white">
                                    {badge.title}
                                </p>
                                <p className="text-sm text-gray-500">
                                    {badge.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Badges;
