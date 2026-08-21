"use client";

import { Link } from "@/components/UI/Link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { usePathname, useSearchParams } from "next/navigation";

interface Props {
    currentPage: number;
    totalPages: number;
}

const Pagination: React.FC<Props> = ({ currentPage, totalPages }) => {
    const searchParams = useSearchParams();
    const pathname = usePathname();

    if (totalPages <= 1) return null;

    const buildHref = (page: number) => {
        const params = new URLSearchParams(searchParams.toString());
        if (page <= 1) {
            params.delete("page");
        } else {
            params.set("page", String(page));
        }
        const query = params.toString();
        return query ? `${pathname}?${query}` : pathname;
    };

    const pages = Array.from({ length: totalPages }, (_, i) => i + 1).filter(
        (p) => p === 1 || p === totalPages || Math.abs(p - currentPage) <= 1,
    );

    return (
        <nav
            aria-label="Pagination"
            className="mt-10 flex items-center justify-center gap-2"
        >
            <Link
                href={buildHref(Math.max(1, currentPage - 1))}
                aria-disabled={currentPage === 1}
                className={`flex h-9 w-9 items-center justify-center rounded-lg border text-sm ${
                    currentPage === 1
                        ? "pointer-events-none border-gray-200 text-gray-300 dark:border-gray-800 dark:text-gray-700"
                        : "border-gray-300 text-gray-700 hover:bg-gray-100 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
                }`}
                aria-label="Previous page"
            >
                <ChevronLeft className="h-4 w-4" />
            </Link>

            {pages.map((page, idx) => {
                const prevPage = pages[idx - 1];
                const showEllipsis = prevPage && page - prevPage > 1;

                return (
                    <span key={page} className="flex items-center gap-2">
                        {showEllipsis && (
                            <span className="px-1 text-gray-400">…</span>
                        )}
                        <Link
                            href={buildHref(page)}
                            aria-current={
                                page === currentPage ? "page" : undefined
                            }
                            className={`flex h-9 w-9 items-center justify-center rounded-lg text-sm font-medium ${
                                page === currentPage
                                    ? "bg-primary-500 text-white"
                                    : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                            }`}
                        >
                            {page}
                        </Link>
                    </span>
                );
            })}

            <Link
                href={buildHref(Math.min(totalPages, currentPage + 1))}
                aria-disabled={currentPage === totalPages}
                className={`flex h-9 w-9 items-center justify-center rounded-lg border text-sm ${
                    currentPage === totalPages
                        ? "pointer-events-none border-gray-200 text-gray-300 dark:border-gray-800 dark:text-gray-700"
                        : "border-gray-300 text-gray-700 hover:bg-gray-100 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
                }`}
                aria-label="Next page"
            >
                <ChevronRight className="h-4 w-4" />
            </Link>
        </nav>
    );
};

export default Pagination;
