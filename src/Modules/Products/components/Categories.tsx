import { createClient } from "@/lib/supabase/server";
import { TCategoryList } from "@/types";
import SideBar from "./SideBar";
import { ErrorMessages } from "@/Modules/Error/enum";

const Categories = async () => {
    const supabase = await createClient();

    const { data, error } = await supabase
        .from("categories")
        .select("*, products(count)")
        .order("sort_order", { ascending: true });

    const categories = data as TCategoryList;

    if (error)
        throw new Error("Failed to Load Categories of Products", {
            cause: "LOAD_CATEGORIES_PRODUCTS_FAILED" satisfies keyof typeof ErrorMessages,
        });

    return <SideBar categories={categories} />;
};

export default Categories;
