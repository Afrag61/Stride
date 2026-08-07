import z from "zod";
import { isValidPhoneNumber } from "react-phone-number-input";

export const loginSchema = z.object({
    email: z.email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
});

export const registerSchema = z
    .object({
        fullName: z
            .string()
            .trim()
            .min(3, "Full name must be at least 3 characters")
            .max(15, "Full name must be at most 15 characters"),
        phone: z.string().refine((value) => isValidPhoneNumber(value || "")),
        email: z.email("Invalid email address"),
        password: z.string().min(6, "Password must be at least 6 characters"),
        confirmPassword: z.string().min(1, "Please confirm your password"),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords don't match",
        path: ["confirmPassword"],
    });

export type TRegisterFormData = z.infer<typeof registerSchema>;
export type TLoginFormData = z.infer<typeof loginSchema>;
