"use server";
import { createClient } from "@/lib/supabase/server";
import type {
    TLoginFormData,
    TRegisterFormData,
} from "@/Modules/Auth/validation";
import { redirect } from "next/navigation";

export const login = async (data: TLoginFormData, redirectUrl: string) => {
    try {
        const supabase = await createClient();
        const { error } = await supabase.auth.signInWithPassword({
            email: data.email,
            password: data.password,
        });

        if (error) {
            if (error?.code === "invalid_credentials") {
                return { error: "Invalid email or password, please try again" };
            }
            return { error: "Something went wrong. Please try again." };
        }

        return redirect(redirectUrl);
    } catch (error) {
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

export const register = async (
    data: Omit<TRegisterFormData, "confirmPassword">,
) => {
    try {
        const supabase = await createClient();
        const { error } = await supabase.auth.signUp({
            email: data.email,
            password: data.password,
            options: {
                data: {
                    name: data.fullName,
                    phone: data.phone,
                },
            },
        });

        if (error) {
            if (error?.code === "user_already_exists") {
                return { error: "email already exists" };
            }

            return { error: "Something went wrong. Please try again." };
        }

        return redirect("/");
    } catch (error) {
        if (error instanceof Error) throw error;
        throw new Error("Something went wrong. Please try again.");
    }
};
