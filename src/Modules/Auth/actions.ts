"use server";
import { createClient } from "@/lib/supabase/server";
import { TLoginFormData } from "@/Modules/Auth/validation";
import { redirect } from "next/navigation";

export const login = async (data: TLoginFormData, redirectUrl: string) => {
    try {
        const supabase = await createClient();
        const { error } = await supabase.auth.signInWithPassword({
            email: data.email,
            password: data.password,
        });

        if (error?.code === "invalid_credentials") {
            return { error: "Invalid email or password, please try again" };
        }

        return redirect(redirectUrl);
    } catch (error) {
        console.log(error);
        if (error instanceof Error) throw error;
        throw new Error("Something went wrong. Please try again.");
    }
};

export const logout = async () => {
    try {
        const supabase = await createClient();
        const { error } = await supabase.auth.signOut();

        if (error) throw error;

        return redirect("/login");
    } catch (error) {
        if (error instanceof Error) throw error;
        throw error;
    }
};

export const getUserData = async () => {
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
};
