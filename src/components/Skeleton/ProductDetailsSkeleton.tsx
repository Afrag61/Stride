const ProductDetailsSkeleton = () => {
    return (
        <div className="animate-pulse">
            <section className="bg-gray-50 py-4 dark:bg-gray-900/50">
                <div className="mx-auto max-w-7xl px-4 lg:px-8">
                    <div className="flex items-center gap-2">
                        <div className="h-4 w-16 rounded bg-gray-200 dark:bg-gray-700" />
                        <span className="text-gray-300 dark:text-gray-600">/</span>
                        <div className="h-4 w-24 rounded bg-gray-200 dark:bg-gray-700" />
                        <span className="text-gray-300 dark:text-gray-600">/</span>
                        <div className="h-4 w-32 rounded bg-gray-200 dark:bg-gray-700" />
                    </div>
                </div>
            </section>
            <section className="py-8 lg:py-12">
                <div className="mx-auto max-w-7xl px-4 lg:px-8">
                    <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
                        <div className="space-y-4">
                            <div className="relative overflow-hidden rounded-3xl bg-gray-100 dark:bg-gray-800">
                                <div className="aspect-square w-full bg-gray-200 dark:bg-gray-700" />
                            </div>
                            <div className="flex gap-4">
                                {Array.from({ length: 4 }).map((_, i) => (
                                    <div
                                        key={i}
                                        className="h-20 w-20 rounded-xl bg-gray-200 dark:bg-gray-700"
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="lg:py-4">
                            <div className="mb-4 flex items-center gap-4">
                                <div className="h-4 w-20 rounded bg-gray-200 dark:bg-gray-700" />
                                <div className="flex items-center gap-1.5">
                                    <div className="flex gap-1">
                                        {Array.from({ length: 5 }).map((_, i) => (
                                            <div
                                                key={i}
                                                className="h-4 w-4 rounded bg-gray-200 dark:bg-gray-700"
                                            />
                                        ))}
                                    </div>
                                    <div className="h-4 w-24 rounded bg-gray-200 dark:bg-gray-700" />
                                </div>
                            </div>
                            <div className="h-8 w-3/4 rounded bg-gray-300 dark:bg-gray-600 lg:h-10" />
                            <div className="mt-4 flex items-center gap-3">
                                <div className="h-8 w-24 rounded bg-gray-300 dark:bg-gray-600" />
                                <div className="h-6 w-16 rounded bg-gray-200 dark:bg-gray-700" />
                                <div className="h-6 w-20 rounded-full bg-gray-200 dark:bg-gray-700" />
                            </div>
                            <div className="mt-6 space-y-2">
                                <div className="h-4 w-full rounded bg-gray-200 dark:bg-gray-700" />
                                <div className="h-4 w-5/6 rounded bg-gray-200 dark:bg-gray-700" />
                                <div className="h-4 w-4/6 rounded bg-gray-200 dark:bg-gray-700" />
                            </div>
                            <div className="mt-8">
                                <div className="mb-3 h-5 w-32 rounded bg-gray-200 dark:bg-gray-700" />
                                <div className="flex gap-3">
                                    {Array.from({ length: 4 }).map((_, i) => (
                                        <div
                                            key={i}
                                            className="h-10 w-10 rounded-full bg-gray-300 dark:bg-gray-600"
                                        />
                                    ))}
                                </div>
                            </div>
                            <div className="mt-8">
                                <div className="mb-3 flex items-center justify-between">
                                    <div className="h-5 w-24 rounded bg-gray-200 dark:bg-gray-700" />
                                    <div className="h-4 w-20 rounded bg-gray-200 dark:bg-gray-700" />
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <div
                                            key={i}
                                            className="h-12 w-12 rounded-lg bg-gray-200 dark:bg-gray-700"
                                        />
                                    ))}
                                </div>
                            </div>
                            <div className="mt-8 flex gap-4">
                                <div className="h-14 flex-1 rounded-full bg-gray-300 dark:bg-gray-600" />
                                <div className="h-14 w-14 rounded-full bg-gray-300 dark:bg-gray-600" />
                            </div>
                            <div className="mt-8 grid grid-cols-2 gap-4">
                                <div className="flex items-center gap-3 rounded-xl bg-gray-50 p-4 dark:bg-gray-800/50">
                                    <div className="h-6 w-6 rounded bg-gray-200 dark:bg-gray-700" />
                                    <div className="space-y-1">
                                        <div className="h-4 w-24 rounded bg-gray-200 dark:bg-gray-700" />
                                        <div className="h-3 w-20 rounded bg-gray-200 dark:bg-gray-700" />
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 rounded-xl bg-gray-50 p-4 dark:bg-gray-800/50">
                                    <div className="h-6 w-6 rounded bg-gray-200 dark:bg-gray-700" />
                                    <div className="space-y-1">
                                        <div className="h-4 w-24 rounded bg-gray-200 dark:bg-gray-700" />
                                        <div className="h-3 w-20 rounded bg-gray-200 dark:bg-gray-700" />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-8 border-t border-gray-200 pt-8 dark:border-gray-800">
                                <div className="mb-4 h-5 w-32 rounded bg-gray-200 dark:bg-gray-700" />
                                <div className="space-y-2">
                                    {Array.from({ length: 4 }).map((_, i) => (
                                        <div
                                            key={i}
                                            className="flex items-center gap-2"
                                        >
                                            <div className="h-5 w-5 rounded bg-gray-200 dark:bg-gray-700" />
                                            <div className="h-4 w-40 rounded bg-gray-200 dark:bg-gray-700" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProductDetailsSkeleton;
