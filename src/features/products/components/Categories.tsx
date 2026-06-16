import ErrorMessage from "@/components/UI/ErrorMessage";
import { createClient } from "@/lib/supabase/server";
import { TCategoryList } from "@/types";
import SideBar from "./SideBar";

const Categories = async () => {
    const supabase = await createClient();

    const { data, error } = await supabase
        .from("categories")
        .select("*, products(count)")
        .order("sort_order", { ascending: true });

    const categories = data as TCategoryList;

    if (error) return <ErrorMessage message={error.message} />;

    return <SideBar categories={categories} />;
};

export default Categories;
