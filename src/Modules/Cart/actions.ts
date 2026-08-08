"use server";

import { createClient } from "@/lib/supabase/server";
import { getUser } from "../Auth/lib/getUser";
import { TOrderRequest } from "@/types";

export const submitCheckout = async (order: TOrderRequest) => {
    const user = await getUser();

    if (user === false) return { error: "User not found", success: false };
    if (user === null)
        return { error: "Network error, please try again", success: false };

    const supabase = await createClient();

    const productIds = order.items.map((item) => item.productId);

    const { data: products, error: productsError } = await supabase
        .from("products")
        .select("id, price, price_after_discount, discount")
        .in("id", productIds);

    if (productsError || !products) {
        return { error: "Could not verify products", success: false };
    }

    let totalPrice = 0;

    const verifiedItems = [];

    for (const item of order.items) {
        const product = products.find((p) => p.id === item.productId);

        if (!product) {
            return {
                error: "One of the products no longer exists",
                success: false,
            };
        }

        const unitPrice =
            product.discount > 0 ? product.price_after_discount : product.price;

        const itemTotal = unitPrice * item.quantity;
        totalPrice += itemTotal;

        verifiedItems.push({
            ...item,
            price: product.price,
            discount: product.discount,
            discountedPrice: product.price_after_discount,
            totalPrice: itemTotal,
        });
    }

    const tax = totalPrice > 0 ? 35 : 0;
    const totalAmount = totalPrice > 0 ? totalPrice + tax : 0;

    const { error, success } = await supabase.from("orders").insert({
        user_id: user.id,
        ...order,
        items: verifiedItems,
        total_amount: totalAmount,
        tax,
    });

    return { error: error?.message, success };
};
