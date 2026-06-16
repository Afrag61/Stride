import CategoryCard from "@/components/UI/CategoryCard";
import ErrorMessage from "@/components/UI/ErrorMessage";
import { createClient } from "@/lib/supabase/server";
import { TCategoryList } from "@/types";

const CategoriesList = async () => {
    const supabase = await createClient();

    const { data, error } = await supabase
        .from("categories")
        .select("*, products(count)")
        .order("sort_order", { ascending: true });

    if (error) return <ErrorMessage message={error.message} />;

    const categories = data as TCategoryList;

    return (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories?.map((category, index) => (
                <CategoryCard
                    key={category.href}
                    name={category.name}
                    image={category.image}
                    description={category.description}
                    products={category.products}
                    href={category.href}
                    className={
                        index === 0 ? "col-span-2 row-span-2" : undefined
                    }
                />
            ))}
        </div>
    );
};

export default CategoriesList;
