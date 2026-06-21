import { createClient } from "@/lib/supabase/server";
import { TProduct } from "@/types";
import ProductDetails from "./ProductDetails";
import { notFound } from "next/navigation";
import { ErrorMessages } from "@/Modules/Error/enum";

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

    const product = (await data) as TProduct;

    if (error?.code === "PGRST116") notFound();

    if (error)
        throw new Error("Failed to Load Product", {
            cause: "LOAD_PRODUCT_FAILED" satisfies keyof typeof ErrorMessages,
        });

    return <ProductDetails product={product} />;
};

export default Index;
