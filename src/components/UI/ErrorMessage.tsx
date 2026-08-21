"use client";

import { AlertTriangle, RefreshCw } from "lucide-react";
import { useRouter } from "next/navigation";

interface Props {
    message?: string | any;
    onRetry?: () => void;
}

const ErrorMessage: React.FC<Props> = ({
    message = "Something went wrong. Please try again later.",
    onRetry,
}) => {
    const router = useRouter();

    const handleReload = () => {
        router.refresh();
    };
    return (
        <div className="my-12 flex flex-col items-center justify-center px-4 py-16">
            {/* Icon */}
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/20">
                <AlertTriangle className="h-10 w-10 text-red-500 dark:text-red-400" />
            </div>

            {/* Title */}
            <h3 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">
                Oops! Something went wrong
            </h3>

            {/* Message */}
            <p className="mt-2 max-w-md text-center text-gray-600 dark:text-gray-400">
                {message}
            </p>

            {/* Retry Button */}

            <button
                onClick={onRetry || handleReload}
                className="mt-8 inline-flex cursor-pointer items-center gap-2 rounded-full bg-primary-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary-500/30 transition-all duration-300 hover:bg-primary-700 hover:shadow-xl hover:shadow-primary-500/40 active:scale-95"
            >
                <RefreshCw className="h-4 w-4" />
                Try Again
            </button>
        </div>
    );
};

export default ErrorMessage;
