"use client";

import { Link } from "@/components/UI/Link";
import { MoveLeft, Search, Home } from "lucide-react";
import { useRouter } from "next/navigation";

const NotFound = () => {
    const router = useRouter();

    return (
        <div className="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden px-4 py-24 text-center">
            {/* Background Decorative Element */}
            <div className="absolute left-1/2 top-1/2 -z-10 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-500/10 blur-3xl dark:bg-primary-500/5" />

            {/* 404 Visual */}
            <div className="relative animate-in fade-in zoom-in duration-700">
                <h1 className="animate-pulse select-none font-display text-[150px] font-black leading-none text-gray-300 dark:text-gray-900 md:text-[200px]">
                    404
                </h1>
                <div className="absolute inset-0 flex items-center justify-center">
                    <Search className="h-20 w-20 text-primary-500 md:h-24 md:w-24" />
                </div>
            </div>

            {/* Content */}
            <div className="mt-8 max-w-md animate-in slide-in-from-bottom-4 fade-in duration-700 fill-mode-both">
                <h2 className="font-display text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
                    Lost your stride?
                </h2>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                    We couldn't find the page you're looking for. It might have
                    been moved, deleted, or never existed.
                </p>
            </div>

            {/* Actions */}
            <div className="mt-12 flex flex-col gap-4 sm:flex-row animate-in slide-in-from-bottom-8 fade-in duration-700 delay-200 fill-mode-both">
                <Link
                    prefetch={false}
                    href="/"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-600 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-primary-500/30 transition-all hover:bg-primary-700 hover:shadow-xl active:scale-95"
                >
                    <Home className="h-4 w-4" />
                    Back to Home
                </Link>
                <button
                    onClick={() => router.back()}
                    className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-8 py-4 text-sm font-semibold text-gray-900 transition-all hover:bg-gray-50 dark:border-gray-800 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800 active:scale-95"
                >
                    <MoveLeft className="h-4 w-4" />
                    Go Back
                </button>
            </div>
        </div>
    );
};

export default NotFound;
