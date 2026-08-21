import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/Redux";
import {
    addToCart,
    removeFromCart,
    clearItemFromCart,
    clearCart,
} from "@/Redux/cartSlice";
import { TCartItem, TProduct } from "@/types";

export const useCart = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { items, totalPrice, totalQuantity } = useSelector(
        (state: RootState) => state.cart,
    );

    const handleAddToCart = (cartItem: TCartItem) => {
        dispatch(addToCart(cartItem));
    };

    const handleRemoveFromCart = (
        productId: TProduct["id"],
        color: string,
        size: number,
    ) => {
        dispatch(removeFromCart({ productId, color, size }));
    };

    const handleClearItemFromCart = (
        productId: TProduct["id"],
        color: string,
        size: number,
    ) => {
        dispatch(clearItemFromCart({ productId, color, size }));
    };

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    return {
        items,
        totalPrice,
        totalQuantity,
        handleAddToCart,
        handleRemoveFromCart,
        handleClearItemFromCart,
        handleClearCart,
    };
};
