import PageHeader from "@/components/UI/PageHeader";
import { Suspense } from "react";
import Products from "./components/Products";
import ProductsListSkeleton from "@/components/Skeleton/ProductsListSkeleton";
import Categories from "./components/Categories";
import SideBarSkeleton from "@/components/Skeleton/SideBarSkeleton";

const Index = async () => {
    return (
        <>
            <PageHeader
                title="Shop All"
                description="Browse our complete collection of premium footwear"
            />
            <section className="py-12 lg:py-16">
                <div className="mx-auto max-w-7xl px-4 lg:px-8">
                    <div className="flex flex-col gap-8 lg:flex-row">
                        <div className="flex flex-col gap-8 lg:flex-row">
                            <Suspense
                                fallback={
                                    <div className="flex flex-col gap-8 lg:flex-row">
                                        <SideBarSkeleton />
                                        <ProductsListSkeleton length={8} />
                                    </div>
                                }
                            >
                                <Categories />
                                <Products />
                            </Suspense>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Index;
