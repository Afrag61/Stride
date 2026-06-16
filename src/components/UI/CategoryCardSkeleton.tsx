interface Props {
    className?: string;
}

const CategoryCardSkeleton: React.FC<Props> = ({ className }) => {
    return (
        <div
            className={`${className} group relative overflow-hidden rounded-2xl animate-pulse`}
        >
            <div className="aspect-4/3 bg-gray-200 dark:bg-gray-700" />
            <div className="absolute inset-0 bg-linear-to-t from-black/20 via-black/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="h-5 w-24 rounded-full bg-gray-300/50" />
                <div className="mt-3 h-7 w-36 rounded bg-gray-300/50" />
                <div className="mt-2 h-4 w-48 rounded bg-gray-300/40" />
                <div className="mt-4 flex items-center gap-2">
                    <div className="h-4 w-20 rounded bg-gray-300/50" />
                    <div className="h-4 w-4 rounded bg-gray-300/50" />
                </div>
            </div>
        </div>
    );
};

export default CategoryCardSkeleton;
