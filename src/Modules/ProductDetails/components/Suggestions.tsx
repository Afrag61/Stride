import { Link } from "@/components/UI/Link";
import type { TProductList } from "@/types";
import ProductItem from "@/components/UI/ProductItem";
import ErrorMessage from "@/components/UI/ErrorMessage";
import { createClient } from "@/lib/supabase/server";

interface Props {
    productId: number;
}

const Suggestions: React.FC<Props> = async ({ productId }) => {
    const supabase = await createClient();

    const { data: categoryData, error: CategoryError } = await supabase
        .from("products")
        .select("category")
        .eq("id", productId)
        .single();

    if (CategoryError)
        return <ErrorMessage message={"Failed to Load Related Category"} />;

    const categoryId = categoryData?.category;

    const { data: productsData, error: productsError } = await supabase
        .from("products")
        .select("*, category(name, href, id)")
        .eq("category", categoryId)
        .neq("id", productId)
        .limit(4);

    if (productsError)
        return <ErrorMessage message={"Failed to Load Related Products"} />;

    const products = productsData as unknown as TProductList;

    const categoryHref = products?.[0]?.category?.href;

    if (!products?.length) return null;

    return (
        <section className="border-t border-gray-200 py-12 dark:border-gray-800 lg:py-16">
            <div className="mx-auto max-w-7xl px-4 lg:px-8">
                {/* Section Heading */}
                <div className="mb-8 flex items-center justify-between">
                    <h2 className="font-display text-2xl font-bold text-gray-900 dark:text-white">
                        You May Also Like
                    </h2>
                    <Link
                        href={categoryHref!}
                        className="text-sm font-medium text-primary-600 dark:hover:text-primary-700 hover:text-primary-700 dark:text-primary-400"
                    >
                        View All →
                    </Link>
                </div>
                {/* Products Grid */}
                <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
                    {products?.map((product) => (
                        <ProductItem key={product.id} {...product} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Suggestions;
