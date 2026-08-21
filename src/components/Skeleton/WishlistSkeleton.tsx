import ProductItemSkeleton from "./ProductItemSkeleton";

const WishlistSkeleton = () => {
    return (
        <div className="animate-pulse">
            <div className="mb-6 h-8 w-40 rounded bg-gray-300 dark:bg-gray-600" />
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {Array.from({ length: 3 }).map((_, i) => (
                    <ProductItemSkeleton key={i} />
                ))}
            </div>
        </div>
    );
};

export default WishlistSkeleton;
