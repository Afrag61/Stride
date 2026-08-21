import ProductItemSkeleton from "./ProductItemSkeleton";

const WishlistProductsSkeleton = () => {
    return (
        <div className="animate-pulse">
            <section className="bg-gray-50 py-12 dark:bg-gray-900/50 lg:py-16">
                <div className="mx-auto max-w-7xl px-4 lg:px-8">
                    <nav className="mb-4 text-sm">
                        <ol className="flex items-center gap-2">
                            <li className="flex items-center gap-2">
                                <div className="h-4 w-10 rounded bg-gray-200 dark:bg-gray-700" />
                                <span className="text-gray-300 dark:text-gray-600">/</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="h-4 w-16 rounded bg-gray-200 dark:bg-gray-700" />
                            </li>
                        </ol>
                    </nav>
                    <div className="flex items-center justify-between">
                        <div>
                            <div className="h-10 w-48 rounded bg-gray-300 dark:bg-gray-600 lg:h-12" />
                            <div className="mt-4 h-6 w-36 rounded bg-gray-200 dark:bg-gray-700" />
                        </div>
                        <div className="hidden sm:flex">
                            <div className="h-10 w-28 rounded-lg border border-gray-300 bg-gray-200 dark:border-gray-700 dark:bg-gray-700" />
                        </div>
                    </div>
                </div>
            </section>
            <div className="py-12 lg:py-16">
                <div className="mx-auto max-w-7xl px-4 lg:px-8">
                    <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
                        {Array.from({ length: 4 }).map((_, i) => (
                            <ProductItemSkeleton key={i} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WishlistProductsSkeleton;
