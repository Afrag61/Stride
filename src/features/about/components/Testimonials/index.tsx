import CustomerCardSkeleton from "@/components/UI/CustomerCardSkeleton";
import { Suspense } from "react";
import Testimonials from "./TestimonialsList";

const Index = () => {
    return (
        <section className="bg-gray-900 py-16 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 lg:px-8">
                {/* Heading */}
                <div className="text-center">
                    <span className="text-sm font-semibold uppercase tracking-wider text-primary-400">
                        Testimonials
                    </span>
                    <h2 className="mt-4 font-display text-3xl font-bold text-white lg:text-4xl">
                        Loved by athletes and enthusiasts
                    </h2>
                </div>
                {/* Content */}
                <Suspense
                    fallback={
                        <div className="mt-12 grid gap-8 md:grid-cols-3">
                            {Array.from({ length: 3 }).map((_, i) => (
                                <CustomerCardSkeleton key={i} />
                            ))}
                        </div>
                    }
                >
                    <Testimonials />
                </Suspense>
            </div>
        </section>
    );
};

export default Index;
