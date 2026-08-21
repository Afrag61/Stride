const OrdersSkeleton = () => {
    return (
        <div className="animate-pulse">
            <div className="mb-6 h-8 w-48 rounded bg-gray-300 dark:bg-gray-600" />
            <div className="space-y-6">
                {Array.from({ length: 3 }).map((_, i) => (
                    <div
                        key={i}
                        className="overflow-hidden rounded-2xl border border-gray-200/50 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900/50"
                    >
                        <div className="flex flex-col gap-4 bg-gray-100 p-5 dark:bg-gray-800/50 sm:flex-row sm:items-center sm:justify-between sm:p-6">
                            <div className="space-y-2">
                                <div className="h-4 w-48 rounded bg-gray-200 dark:bg-gray-700" />
                                <div className="h-3 w-32 rounded bg-gray-200 dark:bg-gray-700" />
                            </div>
                            <div className="flex items-center justify-between gap-6 border-t border-gray-200 pt-3 dark:border-gray-700 sm:justify-end sm:border-t-0 sm:pt-0">
                                <div className="space-y-2">
                                    <div className="h-3 w-10 rounded bg-gray-200 dark:bg-gray-700" />
                                    <div className="h-4 w-16 rounded bg-gray-300 dark:bg-gray-600" />
                                </div>
                                <div className="h-8 w-8 rounded-full bg-gray-200 dark:bg-gray-700" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OrdersSkeleton;
