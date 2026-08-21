import ProductsList from "./ProductsList";
import { createClient } from "@/lib/supabase/server";
import ClientThrower from "@/Modules/Error/ClientThrower";
import { TProductList } from "@/types";

const PAGE_SIZE = 12;

interface Props {
    searchParams: PageProps<"/products">["searchParams"];
}

const Products: React.FC<Props> = async ({ searchParams }) => {
    const params = await searchParams;

    const q = typeof params.q === "string" ? params.q : undefined;
    const category =
        typeof params.category === "string" ? params.category : undefined;
    const filter =
        typeof params.filter === "string" ? params.filter : undefined;
    const price = typeof params.price === "string" ? params.price : undefined;
    const sort = typeof params.sort === "string" ? params.sort : undefined;

    const page = Math.max(1, Number(params.page) || 1);
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;

    const supabase = await createClient();

    let query = supabase
        .from("products")
        .select("*, category!inner(id, name, href)", { count: "exact" });

    if (q) {
        const { data: matchingCategories } = await supabase
            .from("categories")
            .select("id")
            .ilike("name", `%${q}%`);

        const categoryIds = (matchingCategories ?? []).map((c) => c.id);

        if (categoryIds.length > 0) {
            query = query.or(
                `name.ilike.%${q}%,category.in.(${categoryIds.join(",")})`,
            );
        } else {
            query = query.ilike("name", `%${q}%`);
        }
    }

    if (category) {
        query = query.ilike("category.name", category);
    }

    if (filter === "new") {
        query = query.ilike("tag", "%NEW%");
    } else if (filter === "sale") {
        query = query.gt("discount", 0);
    }

    switch (price) {
        case "under_100":
            query = query.lt("price_after_discount", 100);
            break;
        case "from_100_to_150":
            query = query
                .gte("price_after_discount", 100)
                .lt("price_after_discount", 150);
            break;
        case "from_150_to_200":
            query = query
                .gte("price_after_discount", 150)
                .lt("price_after_discount", 200);
            break;
        case "above_200":
            query = query.gte("price_after_discount", 200);
            break;
        default:
            break;
    }

    switch (sort) {
        case "price-low-to-high":
            query = query.order("price_after_discount", { ascending: true });
            break;
        case "price-high-to-low":
            query = query.order("price_after_discount", { ascending: false });
            break;
        case "newest":
            query = query.order("inserted_at", { ascending: false });
            break;
        case "top-rated":
            query = query.order("rate", { ascending: false });
            break;
        default:
            query = query.order("id", { ascending: true });
            break;
    }

    const { data, error, count } = await query.range(from, to);

    if (error) return <ClientThrower cause="LOAD_PRODUCTS_FAILED" />;

    const ProductsDataList = data as TProductList;
    const totalCount = count ?? 0;
    const totalPages = Math.max(1, Math.ceil(totalCount / PAGE_SIZE));

    return (
        <ProductsList
            products={ProductsDataList}
            totalCount={totalCount}
            currentPage={page}
            totalPages={totalPages}
        />
    );
};

export default Products;
