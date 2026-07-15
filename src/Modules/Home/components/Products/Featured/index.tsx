import { Suspense } from "react";
import FeaturedList from "./FeaturedList";
import SectionHeader from "@/components/UI/SectionHeader";
import ProductItemSkeleton from "@/components/Skeleton/ProductItemSkeleton";

const index = () => {
    return (
        <section className="dark:bg-gray-900 py-20 lg:py-28">
            <div className="m-auto max-w-7xl px-4 lg:px-8">
                <SectionHeader
                    title="Featured Collection"
                    description="Our most popular styles handpicked for you"
                    link="/products?sort=featured"
                    linkLabel="View All Featured"
                />
                <Suspense
                    fallback={
                        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                            {Array.from({ length: 7 }).map((_, i) => (
                                <ProductItemSkeleton key={i} />
                            ))}
                        </div>
                    }
                >
                    <FeaturedList />
                </Suspense>
            </div>
        </section>
    );
};

export default index;
