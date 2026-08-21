import z from "zod";
import { isValidPhoneNumber } from "react-phone-number-input";

export const checkoutSchema = z.object({
    fullName: z
        .string("Full name is required")
        .trim()
        .min(3, "Full name must be at least 3 characters"),
    email: z.email("Invalid email address"),
    phone: z
        .string("Phone number is required")
        .refine((val) => isValidPhoneNumber(val), {
            error: "Invalid phone number",
        }),
    country: z
        .string("Country is required")
        .trim()
        .min(3, "Country must be at least 3 characters"),
    address: z
        .string("Address is required")
        .trim()
        .min(5, "Address must be at least 5 characters"),
    city: z
        .string("City is required")
        .trim()
        .min(2, "City must be at least 2 characters"),
    state: z

        .string("State is required")
        .trim()
        .min(2, "State must be at least 2 characters"),
    zipCode: z

        .string("Zip code is required")
        .trim()
        .min(4, "Zip code must be at least 4 characters"),
    cardName: z

        .string("Card name is required")
        .min(3, "Card name must be at least 3 characters"),
    cardNumber: z

        .string("Card number is required")
        .min(1, "Card number is required")
        .transform((val) => val.replace(/\s/g, ""))
        .refine((val) => /^\d{16}$/.test(val), {
            message: "Enter a valid 16-digit card number",
        }),
    expiryDate: z
        .string()
        .min(1, "Expiry date is required")
        .regex(/^(0[1-9]|1[0-2])\/\d{2}$/, "Use MM/YY format")
        .refine(
            (val) => {
                const [month, year] = val.split("/").map(Number);
                const expiry = new Date(2000 + year, month);
                const now = new Date();
                const currentMonthStart = new Date(
                    now.getFullYear(),
                    now.getMonth(),
                );
                return expiry > currentMonthStart;
            },
            { error: "This Card has been expired" },
        ),
    cvv: z
        .string()
        .min(1, "CVV is required")
        .regex(/^\d{3,4}$/, "Enter a valid CVV"),
});

export type TCheckoutSchema = z.infer<typeof checkoutSchema>;
