import ProductItemSkeleton from "./ProductItemSkeleton";

interface Props {
    length?: number;
}

const ProductsListSkeleton: React.FC<Props> = ({ length = 8 }) => {
    return (
        <div className="flex-1 animate-pulse">
            <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-1.5">
                    <div className="h-5 w-24 rounded bg-gray-200 dark:bg-gray-700" />
                </div>
                <div className="h-9 w-44 rounded-lg bg-gray-200 dark:bg-gray-700" />
            </div>
            <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
                {Array.from({ length }).map((_, i) => (
                    <ProductItemSkeleton key={i} />
                ))}
            </div>
        </div>
    );
};

export default ProductsListSkeleton;
