import { createClient } from "@/lib/supabase/server";
import { TProduct } from "@/types";
import ProductDetails from "./ProductDetails";
import { notFound } from "next/navigation";
import ClientThrower from "@/Modules/Error/ClientThrower";
import { getUser } from "@/Modules/Auth/lib/getUser";

interface Props {
    productId: string;
}

const Index: React.FC<Props> = async ({ productId }) => {
    const user = await getUser();

    const supabase = await createClient();

    const { data, error } = await supabase
        .from("products")
        .select("*, category(name, href)")
        .eq("id", productId)
        .single();

    const product = (await data) as TProduct;

    if (error?.code === "PGRST116") notFound();

    if (error) return <ClientThrower cause="LOAD_PRODUCT_FAILED" />;

    return <ProductDetails product={product} isAuthenticated={!!user} />;
};

export default Index;
