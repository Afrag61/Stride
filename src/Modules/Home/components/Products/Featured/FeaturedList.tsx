import ProductItem from "@/components/UI/ProductItem";
import ErrorMessage from "@/components/UI/ErrorMessage";
import { createClient } from "@/lib/supabase/server";
import { TProductList } from "@/types";

interface Props {
    isAuthenticated: boolean;
}

const FeaturedList: React.FC<Props> = async ({ isAuthenticated }) => {
    const supabase = await createClient();

    const { data, error } = await supabase
        .from("products")
        .select("*, category(id, name)")
        .limit(7);

    if (error)
        return <ErrorMessage message={"Failed to load Featured Products"} />;

    const featuredProducts = data as TProductList;

    return (
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts?.map((product) => (
                <ProductItem
                    {...product}
                    key={product.name}
                    isAuthenticated={isAuthenticated}
                />
            ))}
        </div>
    );
};

export default FeaturedList;
