import type { TProduct } from "@/types";

interface Props {
    colors: TProduct["colors"];
    selectedColorIndex: number;
    handleSelectColor: (index: number) => void;
}

const ProductColors: React.FC<Props> = ({
    colors,
    selectedColorIndex,
    handleSelectColor,
}) => {
    return (
        <div className="mt-8">
            <h3 className="mb-3 font-semibold text-gray-900 dark:text-white">
                Color:{" "}
                <span className="font-normal text-gray-600 dark:text-gray-400">
                    {colors[selectedColorIndex].name}
                </span>
            </h3>
            <div className="flex flex-wrap gap-3">
                {colors.map((color, index) => (
                    <button
                        className={`relative h-10 w-10 rounded-full border-2 transition-all duration-300 ease-in-out ${selectedColorIndex === index ? "border-primary-500 dark:border-primary-500" : "dark:border-gray-500 border-gray-500 dark:hover:border-gray-300 hover:border-gray-800"}`}
                        key={index}
                        onClick={() => handleSelectColor(index)}
                        style={{
                            backgroundColor: color.value,
                        }}
                        aria-label={color.name}
                        aria-pressed={selectedColorIndex === index}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default ProductColors;
