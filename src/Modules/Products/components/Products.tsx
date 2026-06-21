import ProductsList from "./ProductsList";
import { createClient } from "@/lib/supabase/server";
import { TProductList } from "@/types";

const Products = async () => {
    const supabase = await createClient();

    const { data, error } = await supabase
        .from("products")
        .select("*, category(id, name)");

    if (error) throw new Error("Failed to load products");

    const ProductsDataList = data as TProductList;

    return (
        <>
            <ProductsList products={ProductsDataList} />
        </>
    );
};

export default Products;
