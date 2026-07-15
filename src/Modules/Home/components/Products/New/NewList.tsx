import ProductItem from "@/components/UI/ProductItem";
import ErrorMessage from "@/components/UI/ErrorMessage";
import { createClient } from "@/lib/supabase/server";
import { TProductList } from "@/types";
import { getUser } from "@/Modules/Auth/lib/getUser";

const NewProductsList = async () => {
    const user = await getUser();
    const supabase = await createClient();

    const { data, error } = await supabase
        .from("products")
        .select("*, category(id, name)")
        .limit(4)
        .order("inserted_at", { ascending: false });

    const products = data as TProductList;

    if (error) return <ErrorMessage message={"Failed to Load New Products"} />;

    return (
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
                <ProductItem
                    {...product}
                    key={product.name}
                    isAuthenticated={!!user}
                />
            ))}
        </div>
    );
};

export default NewProductsList;
