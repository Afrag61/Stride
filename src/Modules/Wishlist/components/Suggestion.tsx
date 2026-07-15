import ErrorMessage from "@/components/UI/ErrorMessage";
import { Link } from "@/components/UI/Link";
import ProductItem from "@/components/UI/ProductItem";
import { createClient } from "@/lib/supabase/server";
import { getUser } from "@/Modules/Auth/lib/getUser";
import { TProductList } from "@/types";

const Suggestion = async () => {
    const supabase = await createClient();
    const user = await getUser();

    const { data, error } = await supabase
        .from("products")
        .select("*")
        .limit(4);

    if (error) return <ErrorMessage message={"Failed to Load Products"} />;

    const products = data as TProductList;

    return (
        <section className="py-12 lg:py-16">
            <div className="mx-auto max-w-7xl px-4 lg:px-8">
                {/* Section Header */}
                <div className="mb-8 flex items-center justify-between">
                    <h2 className="font-display text-2xl font-bold text-gray-900 dark:text-white">
                        You might also like
                    </h2>
                    <Link
                        href="/products"
                        className="text-sm font-medium text-primary-600 hover:text-primary-700 dark:text-primary-400"
                    >
                        View All →
                    </Link>
                </div>
                {/* ProductSuggestions */}
                <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
                    {products.map((product) => (
                        <ProductItem
                            key={product.id}
                            {...product}
                            isAuthenticated={!!user}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Suggestion;
