const CustomerCardSkeleton = () => {
    return (
        <div className="rounded-2xl bg-gray-800/50 p-8 animate-pulse">
            <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                    <div key={i} className="h-4 w-4 rounded bg-yellow-400/30" />
                ))}
            </div>
            <div className="mt-6 space-y-2">
                <div className="h-5 w-full rounded bg-gray-700/50" />
                <div className="h-5 w-3/4 rounded bg-gray-700/50" />
            </div>
            <div className="mt-8 flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-gray-700/50" />
                <div className="space-y-1.5">
                    <div className="h-4 w-28 rounded bg-gray-700/50" />
                    <div className="h-3 w-20 rounded bg-gray-700/40" />
                </div>
            </div>
        </div>
    );
};

export default CustomerCardSkeleton;
