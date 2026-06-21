"use server";
import { env } from "@/lib/env";
import emailjs from "@emailjs/nodejs";
import { createClient } from "./supabase/server";

type THandleNewsLetter = (
    prevState: { status: string; message: string },
    formData: FormData,
) => Promise<{ status: string; message: string }>;

export const handleNewsLetter: THandleNewsLetter = async (
    _prevState,
    formData,
) => {
    const email = await formData.get("email");

    if (!email) {
        return {
            status: "failed",
            message: "Email is required",
        };
    }

    try {
        const supabase = await createClient();

        const response = await supabase
            .from("newsletter_subscribers")
            .insert({ email });

        if (response.error?.code === "23505") {
            return { status: "success", message: "Already subscribed" };
        }

        if (response.success) {
            await emailjs.send(
                env.EMAILJS_SERVICE_ID,
                env.EMAILJS_TEMPLATE_ID,
                { email },
                {
                    privateKey: env.EMAILJS_PRIVATE_KEY,
                    publicKey: env.EMAILJS_PUBLIC_KEY,
                },
            );

            return { status: "success", message: "Subscription successful" };
        }

        return {
            status: "failed",
            message: "Subscription failed",
        };
    } catch (error) {
        return {
            status: "failed",
            message: (error as Error).message || "Subscription failed",
        };
    }
};
