import { createClient } from "@/lib/supabase/server";
import { cache } from "react";

export const getUser = cache(async () => {
    try {
        const supabase = await createClient();
        const { data } = await supabase.auth.getUser();
        if (data.user) {
            return data.user;
        } else {
            return false;
        }
    } catch (error) {
        if (error instanceof Error) {
            throw error;
        } else {
            throw new Error("Something went wrong. Please try again.");
        }
    }
});
