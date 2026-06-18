import type { TProduct } from "@/types";
import { IoCheckmark } from "react-icons/io5";

interface Props {
    materials: TProduct["materials"];
}

const ProductMaterials: React.FC<Props> = ({ materials }) => {
    return (
        <div className="mt-8 border-t border-gray-200 pt-8 dark:border-gray-800">
            <h3 className="font-semibold text-gray-900 dark:text-white">
                Product Details
            </h3>
            <ul className="mt-4 space-y-2">
                {materials.map((material) => (
                    <li
                        key={material}
                        className="flex items-center gap-2 text-gray-600 dark:text-gray-400"
                    >
                        <IoCheckmark className="h-5 w-5 text-primary-500" />
                        {material}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductMaterials;
