import zod from "zod";

const envSchema = zod.object({
    EMAILJS_SERVICE_ID: zod.string().nonempty(),
    EMAILJS_TEMPLATE_ID: zod.string().nonempty(),
    EMAILJS_PRIVATE_KEY: zod.string().nonempty(),
    EMAILJS_PUBLIC_KEY: zod.string().nonempty(),

    NEXT_PUBLIC_SUPABASE_URL: zod.string().nonempty(),
    NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY: zod.string().nonempty(),
});

export const env = envSchema.parse(process.env);
