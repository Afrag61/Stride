import { Suspense } from "react";
import Details from "./components/Details";
import ProductDetailsSkeleton from "@/components/Skeleton/ProductDetailsSkeleton";
import Suggestions from "./components/Suggestions";
import SuggestionsSkeleton from "@/components/Skeleton/SuggestionsSkeleton";
import { createClient } from "@/lib/supabase/server";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const generateMetadata = async ({
    params,
}: PageProps<"/products/[productId]">): Promise<Metadata> => {
    const { productId } = await params;

    const numericProductId = Number(productId);

    if (!Number.isInteger(numericProductId) || numericProductId <= 0) {
        return {
            title: "Product Not Found | Stride",
            description: "Product Not Found",
        };
    }

    const supabase = await createClient();

    const { data: product, error } = await supabase
        .from("products")
        .select("name, description")
        .eq("id", numericProductId)
        .single();

    if (!product) {
        return {
            title: "Product Not Found | Stride",
            description: "Product Not Found",
        };
    }

    return {
        title: `${product.name} | Stride`,
        description: product.description,
    };
};

const Index: React.FC<PageProps<"/products/[productId]">> = async ({
    params,
}) => {
    const { productId } = await params;

    const numericProductId = Number(productId);

    if (!Number.isInteger(numericProductId) || numericProductId <= 0) {
        notFound();
    }

    return (
        <>
            <Suspense fallback={<ProductDetailsSkeleton />}>
                <Details productId={numericProductId} />
            </Suspense>
            <Suspense fallback={<SuggestionsSkeleton />}>
                <Suggestions productId={numericProductId} />
            </Suspense>
        </>
    );
};

export default Index;
