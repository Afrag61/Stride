import { Link } from "./Link";
import { ChevronRight } from "lucide-react";

interface Props {
    title: string;
    description: string;
    link: string;
    linkLabel: string;
    tag?: string;
}

const SectionHeader: React.FC<Props> = ({
    title,
    description,
    link,
    linkLabel,
    tag,
}) => {
    return (
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div>
                {tag && (
                    <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700 dark:bg-green-900/30 dark:text-green-400">
                        <span className="h-2 w-2 rounded-full bg-green-600 dark:bg-green-400"></span>
                        {tag}
                    </span>
                )}
                <h1 className="text-gray-950 dark:text-white text-3xl sm:text-4xl font-bold font-display">
                    {title}
                </h1>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                    {description}
                </p>
            </div>
            <div>
                <Link
                    href={link}
                    className="inline-flex items-center gap-2 font-medium text-primary-600 transition-colors hover:text-primary-700"
                >
                    {linkLabel}
                    <ChevronRight className="h-4 w-4" />
                </Link>
            </div>
        </div>
    );
};

export default SectionHeader;
