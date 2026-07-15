import ProductsList from "./ProductsList";
import { createClient } from "@/lib/supabase/server";
import ClientThrower from "@/Modules/Error/ClientThrower";
import { TProductList } from "@/types";

interface Props {
    isAuthenticated: boolean;
}

const Products: React.FC<Props> = async ({ isAuthenticated }) => {
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
                isAuthenticated={isAuthenticated}
            />
        </>
    );
};

export default Products;
