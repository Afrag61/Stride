import type { TProduct } from "@/types";

interface Props {
    sizes: TProduct["availableSizes"];
    selectedSizeIndex: number;
    handleSelectedSize: (index: number) => void;
}

const ProductSizes = ({
    sizes,
    selectedSizeIndex,
    handleSelectedSize,
}: Props) => {
    return (
        <div className="mt-8">
            <div className="mb-3 flex items-center justify-between">
                <h3 className="font-semibold text-gray-900 dark:text-white">
                    Select Size
                </h3>
                <button className="text-sm font-medium text-primary-600 hover:text-primary-700 dark:text-primary-400">
                    Size Guide
                </button>
            </div>
            <div className="flex flex-wrap gap-2">
                {/* Map Sizes Here */}
                {sizes.map((size, index) => (
                    <button
                        key={index}
                        onClick={() => handleSelectedSize(index)}
                        className={`flex h-12 w-12 items-center justify-center rounded-lg border-2 text-sm font-medium transition-all ${
                            selectedSizeIndex === index
                                ? "border-primary-500 dark:border-primary-500 bg-primary-500/10 text-primary-700 dark:text-primary-400"
                                : "border-gray-300 dark:border-gray-600 text-gray-700 hover:border-gray-400  dark:text-gray-300 dark:hover:border-gray-400"
                        } `}
                    >
                        {size}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ProductSizes;
