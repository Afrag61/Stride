import PageHeader from "@/components/UI/PageHeader";
import { Suspense } from "react";
import CategoriesList from "./components/CategoriesList";
import CategoryCardSkeleton from "@/components/Skeleton/CategoryCardSkeleton";
import Suggest from "./components/Suggest";

const Index = () => {
    return (
        <>
            <PageHeader
                title="Shop by Category"
                description="Find the perfect shoes for every occasion and activity"
            />
            <section className="py-12 lg:py-20">
                <div className="mx-auto max-w-7xl px-4 lg:px-8">
                    <Suspense
                        fallback={
                            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                {Array.from({ length: 6 }).map((_, index) => (
                                    <CategoryCardSkeleton
                                        key={index}
                                        className={
                                            index === 0
                                                ? "col-span-2 row-span-2"
                                                : undefined
                                        }
                                    />
                                ))}
                            </div>
                        }
                    >
                        <CategoriesList />
                    </Suspense>
                </div>
            </section>
            <Suggest />
        </>
    );
};

export default Index;
