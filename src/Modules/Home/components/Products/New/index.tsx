import { Suspense } from "react";
import NewProductsList from "./NewList";
import SectionHeader from "@/components/UI/SectionHeader";
import ProductItemSkeleton from "@/components/Skeleton/ProductItemSkeleton";

const Index = () => {
    return (
        <div className="bg-white py-20 dark:bg-gray-950 lg:py-28">
            <div className="mx-auto max-w-7xl px-4 lg:px-8">
                <SectionHeader
                    tag="Just Dropped"
                    title="New Arrivals"
                    description="Fresh styles just landed — be the fist to rock them"
                    link="/products?filter=new"
                    linkLabel="Shop New Arrivals"
                />
                <Suspense
                    fallback={
                        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                            {Array.from({ length: 4 }).map((_, i) => (
                                <ProductItemSkeleton key={i} />
                            ))}
                        </div>
                    }
                >
                    <NewProductsList />
                </Suspense>
            </div>
        </div>
    );
};

export default Index;
