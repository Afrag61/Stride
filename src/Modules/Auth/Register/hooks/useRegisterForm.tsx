"use client";

import { useForm } from "react-hook-form";
import { registerSchema, type TRegisterFormData } from "../../validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams } from "next/navigation";
import { register } from "../../actions";
import toast from "react-hot-toast";
import { isRedirectError } from "next/dist/client/components/redirect-error";

export const useRegisterForm = () => {
    const {
        register: registerInput,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<TRegisterFormData>({
        resolver: zodResolver(registerSchema),
    });

    const searchParams = useSearchParams();

    const onSubmit = async ({
        fullName,
        phone,
        email,
        password,
    }: TRegisterFormData) => {
        try {
            const { error } = await register({
                fullName,
                phone,
                email,
                password,
            });

            if (error) {
                toast.error(error, {
                    duration: 6000,
                });
            }
        } catch (error) {
            if (isRedirectError(error)) throw error;

            if (error instanceof Error) {
                toast.error(error.message, {
                    duration: 6000,
                });
            } else {
                toast.error("Something went wrong. Please try again.", {
                    duration: 6000,
                });
            }
        }
    };

    const submitHandler = handleSubmit(onSubmit);

    return { registerInput, errors, isSubmitting, submitHandler };
};
