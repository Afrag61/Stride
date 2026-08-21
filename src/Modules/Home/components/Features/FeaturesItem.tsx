import type { LucideIcon } from "lucide-react";

interface Props {
    Icon: LucideIcon;
    title: string;
    description: string;
}

const FeaturesItem: React.FC<Props> = ({ Icon, title, description }) => {
    return (
        <div className="flex gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-100 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400">
                <Icon className="h-6 w-6" />
            </div>
            <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                    {title}
                </h3>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default FeaturesItem;
