"use client";

import { useActionState } from "react";
import { handleNewsLetter } from "@/lib/newsLetter";
import Loader from "@/components/UI/Loader";

const NewsletterForm = () => {
    const [formState, formAction, isPending] = useActionState(
        handleNewsLetter,
        {
            status: "",
            message: "",
        },
    );

    return (
        <form
            action={formAction}
            className="flex flex-col items-center gap-4 justify-center"
        >
            <div className="mx-auto mt-10 flex max-w-md flex-col gap-4 sm:flex-row">
                <div className="relative">
                    <input
                        required
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        className="flex-1 rounded-full border-2 border-white/20 bg-white/10 px-6 py-4 text-white placeholder:text-white/60 focus:border-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-primary-600 transition-all duration-300"
                    />
                    {isPending && (
                        <Loader
                            size={24}
                            className="absolute right-2 top-1/2 -translate-y-1/2"
                            strokeWidth={6}
                        />
                    )}
                </div>
                <button
                    disabled={isPending}
                    className="rounded-full bg-white px-8 py-4 font-semibold text-primary-600 shadow-lg hover:bg-gray-200 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer transition-all duration-300"
                >
                    Get 15% Off
                </button>
            </div>
            {formState.message && (
                <p
                    className={`mt-2 text-center font-bold font-display text-sm ${formState.status === "success" ? "text-green-500" : "text-red-500"}`}
                >
                    {formState.message}
                </p>
            )}
        </form>
    );
};

export default NewsletterForm;
