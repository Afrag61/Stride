"use client";

import { useForm } from "react-hook-form";
import { registerSchema, type TRegisterFormData } from "../../validation";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { useAuth } from "../../hooks/useAuth";
import { useState } from "react";

export const useRegisterForm = () => {
    const {
        control,
        handleSubmit,
        formState: { isSubmitting },
    } = useForm<TRegisterFormData>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            fullName: "",
            phone: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
    });
    const [passwordIsVisible, setPasswordIsVisible] = useState({
        password: false,
        confirmPassword: false,
    });

    const { register } = useAuth();

    const onSubmit = async ({
        fullName,
        phone,
        email,
        password,
    }: TRegisterFormData) => {
        try {
            const { error, needsEmailConfirmation } = await register({
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

            if (needsEmailConfirmation) {
                toast.error("Please confirm your email", {
                    duration: 6000,
                });
            }
        } catch (error: any) {
            toast.error(error, {
                duration: 6000,
            });
        }
    };

    const togglePasswordVisibility = (id: keyof typeof passwordIsVisible) =>
        setPasswordIsVisible((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));

    const submitHandler = handleSubmit(onSubmit);

    return {
        control,
        isSubmitting,
        submitHandler,
        togglePasswordVisibility,
        passwordIsVisible,
    };
};
