import CategoryCardSkeleton from "@/components/UI/CategoryCardSkeleton";
import { Suspense } from "react";
import CategoriesGrid from "./CategoriesGrid";
import SectionHeader from "@/components/UI/SectionHeader";

const Index = () => {
    return (
        <section id="categories" className="py-20 lg:py-28">
            <div className="mx-auto max-w-7xl px-4 lg:px-8">
                {/* Section Header */}
                <SectionHeader
                    title="Shop by Category"
                    description="Find the perfect pair for every occasion"
                    link="/categories"
                    linkLabel="View All"
                />
                {/* categories Grid */}
                <Suspense
                    fallback={
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                            {Array.from({ length: 6 }).map((_, i) => (
                                <CategoryCardSkeleton key={i} />
                            ))}
                        </div>
                    }
                >
                    <CategoriesGrid />
                </Suspense>
            </div>
        </section>
    );
};

export default Index;
