"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";

export const addToWishlist = async (productId: number) => {
    const supabase = await createClient();

    const userId = (await supabase.auth.getUser()).data.user?.id;

    const { data, error } = await supabase
        .from("wishlist")
        .insert({ user_id: userId, product_id: productId })
        .select()
        .single();

    if (error) return error;

    revalidatePath("/wishlist");
};

export const removeFromWishlist = async (productId: number) => {
    const supabase = await createClient();

    const userId = (await supabase.auth.getUser()).data.user?.id;

    const { error } = await supabase
        .from("wishlist")
        .delete()
        .eq("user_id", userId)
        .eq("product_id", productId);

    if (error) return error;

    revalidatePath("/wishlist");

    return null;
};

export const clearWishlist = async () => {
    const supabase = await createClient();

    const userId = (await supabase.auth.getUser()).data.user?.id;

    const { error } = await supabase
        .from("wishlist")
        .delete()
        .eq("user_id", userId);

    if (error) return error;

    revalidatePath("/wishlist");

    return null;
};
