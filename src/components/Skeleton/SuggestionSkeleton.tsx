import ProductItemSkeleton from "./ProductItemSkeleton";

const SuggestionSkeleton = () => {
    return (
        <section className="py-12 lg:py-16 animate-pulse">
            <div className="mx-auto max-w-7xl px-4 lg:px-8">
                <div className="mb-8 flex items-center justify-between">
                    <div className="h-7 w-48 rounded bg-gray-200 dark:bg-gray-700" />
                    <div className="h-4 w-20 rounded bg-gray-200 dark:bg-gray-700" />
                </div>
                <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
                    {Array.from({ length: 4 }).map((_, i) => (
                        <ProductItemSkeleton key={i} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SuggestionSkeleton;
