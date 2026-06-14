import { Link } from "./Link";
import { ChevronRight } from "lucide-react";

interface Props {
    title: string;
    description: string;
    link: string;
    linkLabel: string;
}

const SectionHeader: React.FC<Props> = ({
    title,
    description,
    link,
    linkLabel,
}) => {
    return (
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div>
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
