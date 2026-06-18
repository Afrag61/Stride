import { Handbag, HeartIcon } from "lucide-react";

interface Props {
    handleAddToCart?: () => void;
    handleAddToWishlist?: () => void;
    isFavorite?: boolean;
}

const ProductActions: React.FC<Props> = ({
    handleAddToCart = () => {},
    handleAddToWishlist = () => {},
    isFavorite = false,
}) => {
    return (
        <div className="mt-8 flex gap-4">
            <button
                onClick={handleAddToCart}
                className="flex flex-1 items-center justify-center gap-2 rounded-full bg-primary-600 px-8 py-4 font-semibold text-white shadow-lg shadow-primary-500/30 transition-all hover:bg-primary-700 hover:shadow-xl hover:shadow-primary-500/40"
            >
                <Handbag className="h-5 w-5" />
                Add to Cart
            </button>
            <button
                onClick={handleAddToWishlist}
                className={`flex h-14 w-14 items-center justify-center rounded-full border-2 border-gray-300 transition-colors hover:border-red-500 dark:hover:border-red-500 hover:text-red-500 dark:border-gray-600 cursor-pointer ${
                    isFavorite &&
                    "border-red-500 dark:border-red-500 text-red-500 dark:hover:border-red-500 hover:text-red-500"
                }`}
            >
                <HeartIcon
                    className="h-6 w-6"
                    fill={isFavorite ? "currentColor" : "transparent"}
                />
            </button>
        </div>
    );
};

export default ProductActions;
