import { createClient } from "@/lib/supabase/server";
import { TCategoryList } from "@/types";
import SideBar from "./SideBar";
import ClientThrower from "@/Modules/Error/ClientThrower";

const Categories = async () => {
    const supabase = await createClient();

    const { data, error } = await supabase
        .from("categories")
        .select("*, products(count)")
        .order("sort_order", { ascending: true });

    const categories = data as TCategoryList;

    if (error) return <ClientThrower cause="LOAD_CATEGORIES_PRODUCTS_FAILED" />;

    return <SideBar categories={categories} />;
};

export default Categories;
