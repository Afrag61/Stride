"use client";
import { handleNewsLetter } from "@/lib/newsLetter";
import Input from "@/components/UI/Input";
import { useActionState } from "react";

const initialState = {
    status: "",
    message: "",
};

const NewsLetter = () => {
    const [formState, formAction, isPending] = useActionState(
        handleNewsLetter,
        initialState,
    );

    return (
        <div className="border-b border-gray-200 dark:border-gray-800">
            <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8 max-sm:px-0">
                <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
                    <div className="text-center lg:text-left">
                        <h3 className="font-display text-xl font-bold text-gray-900 dark:text-white">
                            Join the Stride Club
                        </h3>
                        <p className="mt-1 text-gray-600 dark:text-gray-400">
                            Get 15% off your first order, plus early access to
                            new drops.
                        </p>
                    </div>
                    <div className="flex flex-col">
                        <form
                            action={formAction}
                            className="flex w-full max-w-md gap-3 justify-end"
                        >
                            <div className="relative">
                                <Input
                                    required
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                />
                                {isPending && (
                                    <div className="absolute right-2 top-1/2 -translate-y-1/2 w-5 h-5 mx-auto text-center rounded-full border-4 border-primary-500/80 border-t-transparent animate-spin shadow-sm" />
                                )}
                            </div>
                            <button
                                disabled={isPending}
                                className="rounded-lg bg-primary-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-primary-700 disabled:cursor-not-allowed disabled:opacity-50"
                            >
                                Subscribe
                            </button>
                        </form>
                        {formState && (
                            <p
                                className={`text-sm mt-2 text-center ${
                                    formState.status === "success"
                                        ? "text-green-600"
                                        : "text-red-600"
                                }`}
                            >
                                {formState.message}
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;
