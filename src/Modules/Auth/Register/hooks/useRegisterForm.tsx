"use client";

import { useForm } from "react-hook-form";
import { registerSchema, type TRegisterFormData } from "../../validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams } from "next/navigation";
// import { register } from "../../actions";
import toast from "react-hot-toast";
import { useAuth } from "../../hooks/useAuth";
import { useState } from "react";

// import { isRedirectError } from "next/dist/client/components/redirect-error";

export const useRegisterForm = () => {
    const {
        control,
        handleSubmit,
        formState: { errors, isSubmitting },
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
        errors,
        isSubmitting,
        submitHandler,
        togglePasswordVisibility,
        passwordIsVisible,
    };
};
