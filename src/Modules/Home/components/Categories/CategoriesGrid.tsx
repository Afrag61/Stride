import CategoryCard from "@/components/UI/CategoryCard";
import ErrorMessage from "@/components/UI/ErrorMessage";
import { TCategoryList } from "@/types";
import { createClient } from "@/lib/supabase/server";

const CategoriesGrid = async () => {
    const supabase = await createClient();

    const { data, error } = await supabase
        .from("categories")
        .select("*, products(count)")
        .order("sort_order", { ascending: true })
        .limit(6);

    const categories = data as TCategoryList;

    if (error) return <ErrorMessage message={"Failed to Load Categories"} />;

    return (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {categories?.map((category) => (
                <CategoryCard
                    key={category.id}
                    {...category}
                    className="sm:col-span-2 lg:col-span-1"
                />
            ))}
        </div>
    );
};

export default CategoriesGrid;
