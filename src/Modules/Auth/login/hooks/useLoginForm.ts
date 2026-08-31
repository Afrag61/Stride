"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { loginSchema, TLoginFormData } from "../../validation";
import toast from "react-hot-toast";
import { useAuth } from "../../hooks/useAuth";
import { useState } from "react";

export const useLoginForm = () => {
    const {
        control,
        handleSubmit,
        formState: { isSubmitting },
    } = useForm<TLoginFormData>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });
    const [passwordIsVisible, setPasswordIsVisible] = useState(false);

    const { login } = useAuth();

    const onSubmit = async ({ email, password }: TLoginFormData) => {
        try {
            const { error } = await login({ email, password });

            if (error) {
                toast.error(error, {
                    duration: 6000,
                });
            }
        } catch (error: any) {
            toast.error(error, {
                duration: 6000,
            });
        }
    };

    const togglePasswordVisibility = () =>
        setPasswordIsVisible((prev) => !prev);

    const submitHandler = handleSubmit(onSubmit);

    return {
        control,
        submitHandler,
        togglePasswordVisibility,
        passwordIsVisible,
        isSubmitting,
    };
};
