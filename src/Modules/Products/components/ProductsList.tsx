"use client";

import type { TProductList } from "@/types";
import ProductItem from "@/components/UI/ProductItem";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useMemo } from "react";

interface Props {
    isAuthenticated: boolean;
    products: TProductList;
}

const ProductsList: React.FC<Props> = ({ products, isAuthenticated }) => {
    const searchParams = useSearchParams();
    const pathName = usePathname();
    const router = useRouter();
    const currentSort = searchParams.get("sort") || "featured";

    const selectedFilter = searchParams.get("filter");
    const selectedCategory = searchParams.get("category");
    const selectedSort = searchParams.get("sort");
    const selectedPrice = searchParams.get("price");
    const selectedQuery = searchParams.get("q");

    const filteredProducts = useMemo(() => {
        if (!products) return [];

        let result = [...products];

        if (selectedQuery) {
            result = result.filter((product) => {
                if (
                    product.name
                        .toLowerCase()
                        .includes(selectedQuery.toLowerCase()) ||
                    product.category.name
                        .toLowerCase()
                        .includes(selectedQuery.toLowerCase())
                ) {
                    return product;
                }
                return null;
            });
        }

        if (selectedCategory) {
            result = result.filter(
                (product) =>
                    product.category.name.toLowerCase() ===
                    selectedCategory.toLowerCase(),
            );
        }

        if (selectedFilter === "new") {
            result = result.filter((product) => product.tag.includes("NEW"));
        } else if (selectedFilter === "sale") {
            result = result.filter((product) => product.discount > 0);
        }

        if (selectedPrice) {
            switch (selectedPrice) {
                case "under_100":
                    result = result.filter(
                        (product) => product.price_after_discount < 100,
                    );
                    break;
                case "from_100_to_150":
                    result = result.filter(
                        (product) =>
                            product.price_after_discount >= 100 &&
                            product.price_after_discount < 150,
                    );
                    break;
                case "from_150_to_200":
                    result = result.filter(
                        (product) =>
                            product.price_after_discount >= 150 &&
                            product.price_after_discount < 200,
                    );
                    break;
                case "above_200":
                    result = result.filter(
                        (product) => product.price_after_discount >= 200,
                    );
                    break;
                default:
                    break;
            }
        }

        if (selectedSort) {
            switch (selectedSort) {
                case "price-low-to-high":
                    result.sort(
                        (a, b) =>
                            a.price_after_discount - b.price_after_discount,
                    );
                    break;
                case "price-high-to-low":
                    result.sort(
                        (a, b) =>
                            b.price_after_discount - a.price_after_discount,
                    );
                    break;
                case "newest":
                    result.sort((a, b) =>
                        a.tag === "NEW" ? -1 : b.tag === "NEW" ? 1 : 0,
                    );
                    break;
                case "top-rated":
                    result.sort((a, b) => b.rate - a.rate);
                    break;
                default:
                    break;
            }
        }

        return result;
    }, [
        products,
        selectedCategory,
        selectedFilter,
        selectedPrice,
        selectedSort,
        selectedQuery,
    ]);

    const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const params = new URLSearchParams(searchParams.toString());
        if (e.target.value === "featured") {
            params.delete("sort");
            router.push(`${pathName}?${params.toString()}`, { scroll: false });
            return;
        } else {
            params.set("sort", e.target.value);
            router.push(`${pathName}?${params.toString()}`, { scroll: false });
        }
        return params;
    };

    return (
        <div className="flex-1">
            <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
                <p className="text-gray-600 dark:text-gray-400">
                    Showing{" "}
                    <span className="font-semibold text-gray-900 dark:text-white">
                        {products.length}
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
                <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
                    {filteredProducts.map((product) => (
                        <ProductItem
                            key={product.id}
                            {...product}
                            isAuthenticated={isAuthenticated}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default ProductsList;
