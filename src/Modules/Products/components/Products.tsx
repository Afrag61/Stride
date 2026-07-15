import ProductsList from "./ProductsList";
import { createClient } from "@/lib/supabase/server";
import { getUser } from "@/Modules/Auth/lib/getUser";
import ClientThrower from "@/Modules/Error/ClientThrower";
import { TProductList } from "@/types";

const Products = async () => {
    const user = await getUser();
    const supabase = await createClient();

    const { data, error } = await supabase
        .from("products")
        .select("*, category(id, name)");

    if (error) return <ClientThrower cause="LOAD_PRODUCTS_FAILED" />;

    const ProductsDataList = data as TProductList;

    return (
        <>
            <ProductsList
                products={ProductsDataList}
                isAuthenticated={!!user}
            />
        </>
    );
};

export default Products;
