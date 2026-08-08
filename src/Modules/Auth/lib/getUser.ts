import { createClient } from "@/lib/supabase/server";
import { cache } from "react";

export const getUser = cache(async () => {
    try {
        const supabase = await createClient();
        const { data, error } = await supabase.auth.getUser();

        const isNetworkError =
            error &&
            (error.name === "AuthRetryableFetchError" ||
                error.status === undefined);

        if (data.user) {
            return data.user;
        } else if (!data.user && error && isNetworkError) {
            return null;
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
