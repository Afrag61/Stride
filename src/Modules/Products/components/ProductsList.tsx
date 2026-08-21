"use client";

import type { TProductList } from "@/types";
import ProductItem from "@/components/UI/ProductItem";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import Pagination from "./Pagination";

interface Props {
    products: TProductList;
    totalCount: number;
    currentPage: number;
    totalPages: number;
}

const ProductsList: React.FC<Props> = ({
    products,
    totalCount,
    currentPage,
    totalPages,
}) => {
    const searchParams = useSearchParams();
    const pathName = usePathname();
    const router = useRouter();
    const currentSort = searchParams.get("sort") || "featured";

    const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const params = new URLSearchParams(searchParams.toString());

        if (e.target.value === "featured") {
            params.delete("sort");
        } else {
            params.set("sort", e.target.value);
        }

        params.delete("page");

        router.push(`${pathName}?${params.toString()}`, { scroll: false });
    };

    return (
        <div className="flex-1">
            <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
                <p className="text-gray-600 dark:text-gray-400">
                    Showing{" "}
                    <span className="font-semibold text-gray-900 dark:text-white">
                        {totalCount}
                    </span>{" "}
                    products
                </p>
                <label className="flex items-center gap-2">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                        Sort by:
                    </span>
                    <select
                        value={currentSort}
                        onChange={handleSortChange}
                        className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-1 ring-offset-white dark:ring-offset-gray-950 dark:focus:border-primary-500 dark:border-gray-700 dark:bg-gray-800 transition-all duration-300"
                    >
                        <option value="featured">Featured</option>
                        <option value="newest">Newest</option>
                        <option value="price-low-to-high">
                            Price: Low to High
                        </option>
                        <option value="price-high-to-low">
                            Price: High to Low
                        </option>
                        <option value="top-rated">Top Rated</option>
                    </select>
                </label>
            </div>
            {products.length === 0 ? (
                <div className="flex bg-gray-50 flex-col items-center justify-center py-12 text-center dark:bg-gray-800/50 rounded-lg">
                    <p className="mt-4 text-lg font-medium text-gray-900 dark:text-white">
                        No products found
                    </p>
                    <p className="text-gray-500 dark:text-gray-400">
                        Try adjusting your filters or search query.
                    </p>
                </div>
            ) : (
                <>
                    <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
                        {products.map((product) => (
                            <ProductItem key={product.id} {...product} />
                        ))}
                    </div>
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                    />
                </>
            )}
        </div>
    );
};

export default ProductsList;
