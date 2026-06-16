const SideBarSkeleton = () => {
    return (
        <aside className="w-full shrink-0 lg:w-64 animate-pulse">
            <div className="sticky top-24 space-y-8">
                <div>
                    <div className="mb-4 h-5 w-24 rounded bg-gray-200 dark:bg-gray-700" />
                    <ul className="space-y-2">
                        <li className="h-9 w-full rounded-lg bg-gray-200 dark:bg-gray-700" />
                        <li className="h-9 w-full rounded-lg bg-gray-200 dark:bg-gray-700" />
                        <li className="h-9 w-full rounded-lg bg-gray-200 dark:bg-gray-700" />
                        <li className="h-9 w-full rounded-lg bg-gray-200 dark:bg-gray-700" />
                        <li className="h-9 w-full rounded-lg bg-gray-200 dark:bg-gray-700" />
                        <li className="h-9 w-full rounded-lg bg-gray-200 dark:bg-gray-700" />
                    </ul>
                </div>
                <div>
                    <div className="mb-4 h-5 w-28 rounded bg-gray-200 dark:bg-gray-700" />
                    <div className="flex flex-wrap gap-2">
                        <div className="h-9 w-28 rounded-full bg-gray-200 dark:bg-gray-700" />
                        <div className="h-9 w-20 rounded-full bg-gray-200 dark:bg-gray-700" />
                    </div>
                </div>
                <div>
                    <div className="mb-4 h-5 w-24 rounded bg-gray-200 dark:bg-gray-700" />
                    <div className="space-y-3">
                        <div className="h-5 w-28 rounded bg-gray-200 dark:bg-gray-700" />
                        <div className="h-5 w-32 rounded bg-gray-200 dark:bg-gray-700" />
                        <div className="h-5 w-28 rounded bg-gray-200 dark:bg-gray-700" />
                        <div className="h-5 w-20 rounded bg-gray-200 dark:bg-gray-700" />
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default SideBarSkeleton;
