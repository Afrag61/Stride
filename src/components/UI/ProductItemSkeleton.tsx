const ProductItemSkeleton = () => {
    return (
        <div className="group relative animate-pulse">
            <div className="block overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800">
                <div className="relative aspect-square">
                    <div className="h-full w-full bg-gray-200 dark:bg-gray-700" />
                    <div className="absolute left-3 top-3 flex flex-col gap-2">
                        <div className="h-5 w-14 rounded-full bg-gray-300 dark:bg-gray-600" />
                        <div className="h-5 w-20 rounded-full bg-gray-300 dark:bg-gray-600" />
                    </div>
                    <div className="absolute bottom-3 left-3 right-3 flex gap-2">
                        <div className="flex-1 h-10 rounded-lg bg-gray-300 dark:bg-gray-600" />
                        <div className="h-10 w-10 rounded-lg bg-gray-300 dark:bg-gray-600" />
                    </div>
                </div>
            </div>
            <div className="mt-4">
                <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0 flex-1 space-y-2">
                        <div className="h-3 w-24 rounded bg-gray-200 dark:bg-gray-700" />
                        <div className="h-4 w-40 rounded bg-gray-300 dark:bg-gray-600" />
                    </div>
                    <div className="flex shrink-0 items-center gap-1">
                        <div className="h-4 w-4 rounded bg-yellow-200 dark:bg-yellow-900" />
                        <div className="h-3 w-8 rounded bg-gray-200 dark:bg-gray-700" />
                    </div>
                </div>
                <div className="mt-2 flex items-center gap-2">
                    <div className="h-5 w-16 rounded bg-gray-300 dark:bg-gray-600" />
                    <div className="h-4 w-12 rounded bg-gray-200 dark:bg-gray-700" />
                </div>
                <div className="mt-3 flex items-center gap-1.5">
                    <div className="h-4 w-4 rounded-full bg-gray-300 dark:bg-gray-600" />
                    <div className="h-4 w-4 rounded-full bg-gray-300 dark:bg-gray-600" />
                    <div className="h-4 w-4 rounded-full bg-gray-300 dark:bg-gray-600" />
                </div>
                <div className="mt-2 h-3 w-28 rounded bg-gray-200 dark:bg-gray-700" />
            </div>
        </div>
    );
};

export default ProductItemSkeleton;
