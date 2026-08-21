"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import { getUser } from "@/Modules/Auth/lib/getUser";

export const addToWishlist = async (productId: number) => {
    const user = await getUser();

    if (!user) return { code: "UNAUTHORIZED", message: "Unauthorized" };

    const supabase = await createClient();

    const { data, error } = await supabase
        .from("wishlist")
        .insert({ user_id: user.id, product_id: productId })
        .select()
        .single();

    if (error) return { code: error.code, message: error.message };

    revalidatePath("/wishlist");

    return null;
};

export const removeFromWishlist = async (productId: number) => {
    const user = await getUser();

    if (!user) return { code: "UNAUTHORIZED", message: "Unauthorized" };

    const supabase = await createClient();

    const { error } = await supabase
        .from("wishlist")
        .delete()
        .eq("user_id", user.id)
        .eq("product_id", productId);

    if (error) return { code: error.code, message: error.message };

    revalidatePath("/wishlist");

    return null;
};

export const clearWishlist = async () => {
    const user = await getUser();

    if (!user) return { code: "UNAUTHORIZED", message: "Unauthorized" };

    const supabase = await createClient();

    const { error } = await supabase
        .from("wishlist")
        .delete()
        .eq("user_id", user.id);

    if (error) return { code: error.code, message: error.message };

    revalidatePath("/wishlist");

    return null;
};
