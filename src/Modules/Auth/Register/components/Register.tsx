"use client";

import { Link } from "@/components/UI/Link";
import { useRegisterForm } from "../hooks/useRegisterForm";
import { Controller } from "react-hook-form";
import { Mail, Lock, ArrowRight, Loader2, User, Eye } from "lucide-react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const RegisterPage = () => {
    const {
        submitHandler,
        isSubmitting,
        control,
        passwordIsVisible,
        togglePasswordVisibility,
    } = useRegisterForm();

    return (
        <div className="flex min-h-[80vh] items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8 rounded-3xl bg-white p-8 shadow-2xl dark:bg-gray-900 border border-gray-100 dark:border-gray-800">
                <div className="text-center">
                    <h2 className="font-display text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Join Stride
                    </h2>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                        Experience the next level of comfort
                    </p>
                </div>

                <form className="mt-8 space-y-6" onSubmit={submitHandler}>
                    <div className="space-y-4">
                        {/* Full Name Field */}
                        <Controller
                            control={control}
                            name="fullName"
                            render={({
                                field: { onChange, value },
                                fieldState: { error },
                            }) => (
                                <div>
                                    <label
                                        htmlFor="fullName"
                                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                                    >
                                        Full Name
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <User className="h-5 w-5 text-gray-400" />
                                        </div>
                                        <input
                                            autoComplete="name"
                                            type="text"
                                            onChange={onChange}
                                            value={value}
                                            className={`block w-full pl-10 pr-3 py-3 border rounded-xl bg-gray-50 dark:bg-gray-800/50 transition-all duration-200 outline-none ${
                                                error?.message
                                                    ? "border-red-500 focus:ring-red-500/20"
                                                    : "border-gray-200 dark:border-gray-700 focus:border dark:focus:border-primary-500 focus:border-primary-500 focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
                                            }`}
                                            placeholder="John Doe"
                                        />
                                    </div>

                                    {error?.message && (
                                        <p className="mt-1 text-xs text-red-500">
                                            {error.message}
                                        </p>
                                    )}
                                </div>
                            )}
                        />

                        {/* Email Field */}

                        <Controller
                            control={control}
                            name="email"
                            render={({
                                field: { onChange, value },
                                fieldState: { error },
                            }) => (
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                                    >
                                        Email Address
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <Mail className="h-5 w-5 text-gray-400" />
                                        </div>
                                        <input
                                            onChange={onChange}
                                            value={value}
                                            type="email"
                                            autoComplete="email"
                                            className={`block w-full pl-10 pr-3 py-3 border rounded-xl bg-gray-50 dark:bg-gray-800/50 transition-all duration-200 outline-none ${
                                                error
                                                    ? "border-red-500 focus:ring-red-500/20"
                                                    : "border-gray-200 dark:border-gray-700 focus:border dark:focus:border-primary-500 focus:border-primary-500 focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
                                            }`}
                                            placeholder="name@example.com"
                                        />
                                    </div>
                                    {error?.message && (
                                        <p className="mt-1 text-xs text-red-500">
                                            {error.message}
                                        </p>
                                    )}
                                </div>
                            )}
                        />

                        {/* Password Field */}

                        <Controller
                            control={control}
                            name="password"
                            render={({
                                field: { onChange, value },
                                fieldState: { error },
                            }) => (
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                        Password
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <Lock className="h-5 w-5 text-gray-400" />
                                        </div>
                                        <input
                                            onChange={onChange}
                                            value={value}
                                            type={
                                                passwordIsVisible.password
                                                    ? "text"
                                                    : "password"
                                            }
                                            className={`block w-full pl-10 pr-3 py-3 border rounded-xl bg-gray-50 dark:bg-gray-800/50 transition-all duration-200 outline-none ${
                                                error?.message
                                                    ? "border-red-500 focus:ring-red-500/20"
                                                    : "border-gray-200 dark:border-gray-700 focus:border dark:focus:border-primary-500 focus:border-primary-500 focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
                                            }`}
                                            placeholder="••••••••"
                                        />
                                        <button
                                            type="button"
                                            className={`absolute right-1.5 top-1/2 -translate-y-1/2 ${passwordIsVisible.password ? "text-primary-500" : "text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400"} hover:bg-gray-300/70 dark:hover:bg-gray-700/70 p-1.5 rounded-full cursor-pointer transition-all`}
                                            onClick={() =>
                                                togglePasswordVisibility(
                                                    "password",
                                                )
                                            }
                                            title="Toggle visibility"
                                        >
                                            <Eye className="h-5 w-5" />
                                        </button>
                                    </div>

                                    {error?.message && (
                                        <p className="mt-1 text-xs text-red-500">
                                            {error.message}
                                        </p>
                                    )}
                                </div>
                            )}
                        />

                        {/* Confirm Password Field */}

                        <Controller
                            control={control}
                            name="confirmPassword"
                            render={({
                                field: { onChange, value },
                                fieldState: { error },
                            }) => (
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                        Confirm Password
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <Lock className="h-5 w-5 text-gray-400" />
                                        </div>
                                        <input
                                            onChange={onChange}
                                            value={value}
                                            type={
                                                passwordIsVisible.confirmPassword
                                                    ? "text"
                                                    : "password"
                                            }
                                            className={`block w-full pl-10 pr-3 py-3 border rounded-xl bg-gray-50 dark:bg-gray-800/50 transition-all duration-200 outline-none ${
                                                error?.message
                                                    ? "border-red-500 focus:ring-red-500/20"
                                                    : "border-gray-200 dark:border-gray-700 focus:border dark:focus:border-primary-500 focus:border-primary-500 focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
                                            }`}
                                            placeholder="••••••••"
                                        />
                                        <button
                                            type="button"
                                            className={`absolute right-1.5 top-1/2 -translate-y-1/2 ${passwordIsVisible.confirmPassword ? "text-primary-500" : "text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400"} hover:bg-gray-300/70 dark:hover:bg-gray-700/70 p-1.5 rounded-full cursor-pointer transition-all`}
                                            onClick={() =>
                                                togglePasswordVisibility(
                                                    "confirmPassword",
                                                )
                                            }
                                            title="Toggle visibility"
                                        >
                                            <Eye className="h-5 w-5" />
                                        </button>
                                    </div>
                                    {error?.message && (
                                        <p className="mt-1 text-xs text-red-500">
                                            {error.message}
                                        </p>
                                    )}
                                </div>
                            )}
                        />

                        {/* Phone Field */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                Phone Number
                            </label>
                            <Controller
                                control={control}
                                name="phone"
                                render={({
                                    field: { onChange, value },
                                    fieldState: { error },
                                }) => (
                                    <>
                                        <PhoneInput
                                            value={value}
                                            onChange={onChange}
                                            international
                                            className={`block w-full h-12 px-3 py-3 border rounded-xl bg-gray-50 dark:bg-gray-800/50 transition-all duration-200  outline-none ${
                                                error?.message
                                                    ? "border-red-500 focus-within:ring-red-500/20"
                                                    : "border-gray-200 dark:border-gray-700 focus-within:border dark:focus-within:border-primary-500 focus-within:border-primary-500 focus-within:ring-2 focus-within:ring-primary-500 focus-within:ring-offset-2 dark:focus-within:ring-offset-gray-900"
                                            }`}
                                            numberInputProps={{
                                                className: "outline-none",
                                            }}
                                            countrySelectProps={{
                                                className: "dark:bg-gray-800",
                                            }}
                                        />
                                        {error?.message && (
                                            <p className="mt-1 text-xs text-red-500">
                                                {error.message}
                                            </p>
                                        )}
                                    </>
                                )}
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="group relative flex w-full justify-center rounded-full bg-primary-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-primary-500/30 transition-all hover:bg-primary-700 hover:shadow-xl active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? (
                            <Loader2 className="h-5 w-5 animate-spin" />
                        ) : (
                            <>
                                Create Account
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </>
                        )}
                    </button>
                </form>

                <div className="text-center text-sm">
                    <p className="text-gray-600 dark:text-gray-400">
                        Already have an account?{" "}
                        <Link
                            href="/login"
                            className="font-semibold text-primary-600 hover:text-primary-500"
                        >
                            Sign in instead
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
