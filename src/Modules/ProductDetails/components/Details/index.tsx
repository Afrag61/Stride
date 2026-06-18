import { createClient } from "@/lib/supabase/server";
import { TProduct } from "@/types";
import ProductDetails from "./ProductDetails";
import ErrorMessage from "@/components/UI/ErrorMessage";
import { notFound } from "next/navigation";

interface Props {
    productId: string;
}

const Index: React.FC<Props> = async ({ productId }) => {
    const supabase = await createClient();

    const { data, error } = await supabase
        .from("products")
        .select("*, category(name, href)")
        .eq("id", productId)
        .single();

    if (!data) notFound();

    const product = (await data) as TProduct;

    if (error) return <ErrorMessage message={error.message} />;

    return <ProductDetails product={product} />;
};

export default Index;
