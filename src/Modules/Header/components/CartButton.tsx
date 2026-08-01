"use client";

import { Link } from "@/components/UI/Link";
import { useCart } from "@/Modules/Cart/hooks/useCart";
import { Handbag } from "lucide-react";

interface Props {
    userId: string | false;
}

const CartButton: React.FC<Props> = ({ userId }) => {
    const { totalQuantity } = useCart();

    return (
        <Link
            href="/cart"
            className="relative rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 p-2"
        >
            {!!userId && totalQuantity > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary-600 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold">
                    {totalQuantity}
                </span>
            )}
            <Handbag className="h-5 w-5" />
        </Link>
    );
};

export default CartButton;
