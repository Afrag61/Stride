import zod from "zod";

const serverSchema = zod.object({
    EMAILJS_SERVICE_ID: zod.string().nonempty(),
    EMAILJS_TEMPLATE_ID: zod.string().nonempty(),
    EMAILJS_PRIVATE_KEY: zod.string().nonempty(),
    EMAILJS_PUBLIC_KEY: zod.string().nonempty(),

    NEXT_PUBLIC_SUPABASE_URL: zod.string().nonempty(),
    NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY: zod.string().nonempty(),
});

export const clientSchema = zod.object({
    NEXT_PUBLIC_SUPABASE_URL: zod.string().nonempty(),
    NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY: zod.string().nonempty(),
});

export const env =
    typeof window === "undefined"
        ? serverSchema.parse(process.env)
        : ({} as zod.infer<typeof serverSchema>);

const clientProcessEnv = {
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY,
};

export const clientEnv = clientSchema.parse(
    typeof window === "undefined" ? process.env : clientProcessEnv,
);
