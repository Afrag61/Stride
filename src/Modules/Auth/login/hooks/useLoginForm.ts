"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { loginSchema, TLoginFormData } from "../../validation";
import { useSearchParams } from "next/navigation";
import { login } from "../../actions";
import { isRedirectError } from "next/dist/client/components/redirect-error";
import toast from "react-hot-toast";

export const useLoginForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<TLoginFormData>({
        resolver: zodResolver(loginSchema),
    });

    const searchParams = useSearchParams();

    const redirectTo = searchParams.get("next") || "/";

    const onSubmit = async ({ email, password }: TLoginFormData) => {
        try {
            await login({ email, password }, redirectTo);
        } catch (error) {
            if (isRedirectError(error)) throw error;

            if (error instanceof Error) {
                toast.error(error.message, {
                    duration: 10000,
                });
            } else {
                toast.error("Something went wrong. Please try again.", {
                    duration: 10000,
                });
            }
        }
    };

    const submitHandler = handleSubmit(onSubmit);

    return { register, submitHandler, errors, isSubmitting };
};
