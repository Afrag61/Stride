import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { TCart, TCartItem } from "@/types";
import toast from "react-hot-toast";

const initialState: TCart = {
    items: [],
    totalPrice: 0,
    totalQuantity: 0,
};

const calculateTotals = (state: TCart) => {
    state.totalQuantity = state.items.reduce(
        (total, item) => total + item.quantity,
        0,
    );
    state.totalPrice = state.items.reduce(
        (total, item) => total + item.totalPrice,
        0,
    );
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<TCartItem>) => {
            const newItem = action.payload;
            const existingItem = state.items.find(
                (item) =>
                    item.productId === newItem.productId &&
                    item.size === newItem.size &&
                    item.color.name === newItem.color.name,
            );

            if (existingItem && existingItem.quantity >= 10) {
                toast.error("Maximum quantity reached");
                return;
            }

            const itemPrice =
                newItem.discount > 0 ? newItem.discountedPrice : newItem.price;

            if (existingItem) {
                existingItem.quantity = existingItem.quantity + 1;
                existingItem.totalPrice = existingItem.quantity * itemPrice;
            } else {
                state.items.push({
                    ...newItem,
                    totalPrice: newItem.quantity * itemPrice,
                });
            }

            calculateTotals(state);
        },
        removeFromCart: (
            state,
            action: PayloadAction<{
                productId: number;
                size: number;
                color: string;
            }>,
        ) => {
            const { productId, size, color } = action.payload;
            const existingItemIndex = state.items.findIndex(
                (item) =>
                    item.productId === productId &&
                    item.size === size &&
                    item.color.name === color,
            );

            if (existingItemIndex !== -1) {
                const item = state.items[existingItemIndex];
                if (item.quantity === 1) {
                    return;
                } else {
                    item.quantity--;
                    const itemPrice =
                        item.discount > 0 ? item.discountedPrice : item.price;
                    item.totalPrice = item.quantity * itemPrice;
                }

                calculateTotals(state);
            }
        },
        clearItemFromCart: (
            state,
            action: PayloadAction<{
                productId: number;
                size: number;
                color: string;
            }>,
        ) => {
            const { productId, size, color } = action.payload;
            state.items = state.items.filter(
                (item) =>
                    !(
                        item.productId === productId &&
                        item.size === size &&
                        item.color.name === color
                    ),
            );

            calculateTotals(state);
        },
        clearCart: (state) => {
            state.items = [];
            state.totalPrice = 0;
            state.totalQuantity = 0;
        },
    },
});

export const { addToCart, removeFromCart, clearItemFromCart, clearCart } =
    cartSlice.actions;

export default cartSlice.reducer;
