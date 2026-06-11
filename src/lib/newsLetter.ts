"use server";

import emailjs from "@emailjs/nodejs";
import { createClient } from "./supabase/server";

const service_id = process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID!;
const template_id = process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID!;
const Private_key = process.env.NEXT_PUBLIC_EMAIL_PRIVATE_KEY!;
const Public_key = process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY!;

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
                service_id,
                template_id,
                { email },
                { privateKey: Private_key, publicKey: Public_key },
            );

            return { status: "success", message: "Subscription successful" };
        }

        return {
            status: "failed",
            message: "Subscription failed",
        };
    } catch (error) {
        console.log(error);

        return {
            status: "failed",
            message: (error as Error).message || "Subscription failed",
        };
    }
};
