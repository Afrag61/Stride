"use client";
import { Link } from "@/components/UI/Link";
import { Mail, Lock, ArrowRight, Loader2 } from "lucide-react";
import { useLoginForm } from "../hooks/useLoginForm";

const LoginPage = () => {
    const { submitHandler, errors, isSubmitting, register } = useLoginForm();

    return (
        <div className="flex min-h-[80vh] items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8 rounded-3xl bg-white p-8 shadow-2xl dark:bg-gray-900 border border-gray-100 dark:border-gray-800">
                <div className="text-center">
                    <h2 className="font-display text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Welcome back
                    </h2>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                        Please enter your details to sign in
                    </p>
                </div>

                <form className="mt-8 space-y-6" onSubmit={submitHandler}>
                    <div className="space-y-4">
                        {/* Email Field */}
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
                                    {...register("email")}
                                    id="email"
                                    type="email"
                                    autoComplete="email"
                                    className={`block w-full pl-10 pr-3 py-3 border rounded-xl bg-gray-50 dark:bg-gray-800/50 transition-all duration-200 outline-none ${
                                        errors.email
                                            ? "border-red-500 focus:ring-red-500/20"
                                            : "border-gray-200 dark:border-gray-700 focus:border dark:focus:border-primary-500 focus:border-primary-500 focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
                                    }`}
                                    placeholder="name@example.com"
                                />
                            </div>
                            {errors.email && (
                                <p className="mt-1 text-xs text-red-500">
                                    {errors.email.message}
                                </p>
                            )}
                        </div>

                        {/* Password Field */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                Password
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <Lock className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    {...register("password")}
                                    type="password"
                                    className={`block w-full pl-10 pr-3 py-3 border rounded-xl bg-gray-50 dark:bg-gray-800/50 transition-all duration-200 outline-none ${
                                        errors.password
                                            ? "border-red-500 focus:ring-red-500/20"
                                            : "border-gray-200 dark:border-gray-700 focus:border dark:focus:border-primary-500 focus:border-primary-500 focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
                                    }`}
                                    placeholder="••••••••"
                                />
                            </div>
                            {errors.password && (
                                <p className="mt-1 text-xs text-red-500">
                                    {errors.password.message}
                                </p>
                            )}
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                id="remember-me"
                                name="remember-me"
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                            />
                            <label
                                htmlFor="remember-me"
                                className="ml-2 block text-sm text-gray-700 dark:text-gray-300"
                            >
                                Remember me
                            </label>
                        </div>

                        <div className="text-sm">
                            <a
                                href="#"
                                className="font-medium text-primary-600 hover:text-primary-500"
                            >
                                Forgot password?
                            </a>
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
                                Sign In
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </>
                        )}
                    </button>
                </form>

                <div className="text-center text-sm">
                    <p className="text-gray-600 dark:text-gray-400">
                        Don't have an account?{" "}
                        <Link
                            href="/register"
                            className="font-semibold text-primary-600 hover:text-primary-500"
                        >
                            Create one now
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
