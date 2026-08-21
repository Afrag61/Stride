"use client";

import { Link } from "@/components/UI/Link";
import { TCategoryList } from "@/types";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

interface Props {
    categories: TCategoryList;
}

const SideBar: React.FC<Props> = ({ categories }) => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();

    const selectedCategory = searchParams.get("category");
    const selectedFilter = searchParams.get("filter");
    const selectedPrice = searchParams.get("price");

    const handleCategoryChange = (categoryHref: string) => {
        const params = new URLSearchParams(searchParams.toString());
        const currentCategory = new URLSearchParams(
            categoryHref.split("?")[1],
        ).get("category")!;

        if (params.get("category") === currentCategory) {
            params.delete("category");
        } else {
            params.set("category", currentCategory);
        }
        params.delete("page");

        return `${pathname}?${params.toString()}`;
    };

    const handleFilterChange = (filter: string) => {
        const params = new URLSearchParams(searchParams.toString());
        if (params.get("filter") === filter) {
            params.delete("filter");
        } else {
            params.set("filter", filter);
        }
        params.delete("page");

        return params.toString();
    };

    const handleCheckboxChange = (priceFilter: string) => {
        const params = new URLSearchParams(searchParams.toString());
        params.delete("page");
        if (params.get("price") === priceFilter) {
            params.delete("price");
            router.replace(`${pathname}?${params.toString()}`);
            return;
        } else {
            params.set("price", priceFilter);
            router.replace(`${pathname}?${params.toString()}`);
            return;
        }
    };

    const activeClass =
        "bg-primary-100 font-medium text-primary-700 dark:bg-primary-900/30 dark:text-primary-400";

    return (
        <aside className="w-full shrink-0 lg:w-64">
            <div className="sticky top-24 space-y-8">
                {/* categories */}
                <div>
                    <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">
                        Categories
                    </h3>
                    <ul className="space-y-2">
                        <li>
                            <Link
                                href="/products"
                                className={`block rounded-lg px-3 py-2 text-sm transition-colors ${
                                    !selectedCategory
                                        ? activeClass
                                        : "text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
                                }`}
                            >
                                All Products
                            </Link>
                        </li>
                        {categories.map((category) => {
                            const isActive =
                                category.name.toLowerCase() ===
                                selectedCategory?.toLowerCase();

                            return (
                                <li key={category.name}>
                                    <Link
                                        href={handleCategoryChange(
                                            category.href,
                                        )}
                                        scroll={false}
                                        className={`flex items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors ${isActive ? activeClass : "text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"}`}
                                    >
                                        <span>{category.name}</span>
                                        <span>
                                            ({category.products[0].count})
                                        </span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                {/* Quick Filters */}
                <div>
                    <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">
                        Quick Filters
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        <Link
                            href={`/products?${handleFilterChange("new")}`}
                            scroll={false}
                            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                                selectedFilter === "new"
                                    ? "bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-400"
                                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                            }`}
                        >
                            New Arrivals
                        </Link>
                        <Link
                            href={`/products?${handleFilterChange("sale")}`}
                            scroll={false}
                            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                                selectedFilter === "sale"
                                    ? "bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-400"
                                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                            }`}
                        >
                            On Sale
                        </Link>
                    </div>
                </div>
                {/* Price Range */}
                <div>
                    <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">
                        Price Range
                    </h3>
                    <div className="space-y-2">
                        {[
                            { value: "under_100", label: "Under $100" },
                            { value: "from_100_to_150", label: "$100 - $150" },
                            { value: "from_150_to_200", label: "$150 - $200" },
                            { value: "above_200", label: "$200+" },
                        ].map((priceOption) => (
                            <label
                                key={priceOption.value}
                                className="flex items-center gap-2"
                            >
                                <input
                                    type="checkbox"
                                    className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500 cursor-pointer"
                                    onChange={() =>
                                        handleCheckboxChange(priceOption.value)
                                    }
                                    checked={
                                        selectedPrice === priceOption.value
                                    }
                                />
                                <span className="text-sm text-gray-600 dark:text-gray-400">
                                    {priceOption.label}
                                </span>
                            </label>
                        ))}
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default SideBar;
