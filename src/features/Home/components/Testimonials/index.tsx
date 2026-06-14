import { Suspense } from "react";
import TestimonialsList from "./TestimonialsList";
import CustomerCardSkeleton from "@/components/UI/CustomerCardSkeleton";

const Index = () => {
    return (
        <section className="bg-gray-950 py-20 lg:py-28">
            <div className="mx-auto max-w-7xl px-4 lg:px-8">
                <div className="text-center">
                    <span className="inline-flex items-center gap-2 rounded-full bg-primary-500/10 px-4 py-1.5 text-sm font-medium text-primary-400">
                        Customer Love
                    </span>
                    <h2 className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl">
                        What Our Customers Say
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-gray-400">
                        Join thousands of happy customers who have made Stride
                        their go-to footwear brand
                    </p>
                </div>
                <Suspense
                    fallback={
                        <div className="mt-16 grid gap-8 lg:grid-cols-3">
                            {Array.from({ length: 3 }).map((_, i) => (
                                <CustomerCardSkeleton key={i} />
                            ))}
                        </div>
                    }
                >
                    <TestimonialsList />
                </Suspense>
                <div className="mt-16 flex flex-wrap items-center justify-center gap-8 border-t border-gray-800 pt-12">
                    <div className="text-center">
                        <div className="font-display text-4xl font-bold text-white">
                            50K+
                        </div>
                        <p className="mt-1 text-sm text-gray-500">
                            Happy Customers
                        </p>
                    </div>
                    <div className="h-12 w-px bg-gray-800"></div>
                    <div className="text-center">
                        <div className="font-display text-4xl font-bold text-white">
                            4.9/5
                        </div>
                        <p className="mt-1 text-sm text-gray-500">
                            Average Rating
                        </p>
                    </div>
                    <div className="h-12 w-px bg-gray-800"></div>
                    <div className="text-center">
                        <div className="font-display text-4xl font-bold text-white">
                            15K+
                        </div>
                        <p className="mt-1 text-sm text-gray-500">
                            5-stars Reviews
                        </p>
                    </div>
                    <div className="h-12 w-px bg-gray-800"></div>
                    <div className="text-center">
                        <div className="font-display text-4xl font-bold text-white">
                            98%
                        </div>
                        <p className="mt-1 text-sm text-gray-500">
                            Would Recommend
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Index;
