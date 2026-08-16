import { createClient } from "@/lib/supabase/server";
import { getUser } from "@/Modules/Auth/lib/getUser";
import ClientThrower from "@/Modules/Error/ClientThrower";
import { TWishlistList } from "@/types";
import Wishlist from "./Wishlist";

const LoadWishList = async () => {
    const user = await getUser();

    if (user === false) return <ClientThrower cause="LOAD_WISHLIST_FAILED" />;
    if (user === null)
        return <ClientThrower cause="NETWORK_CONNECTION_FAILED" />;

    const supabase = await createClient();

    const { data, error } = await supabase
        .from("wishlist")
        .select("*,products(*, category(id, name))")
        .eq("user_id", user.id);

    if (error) return <ClientThrower cause="LOAD_WISHLIST_FAILED" />;

    const wishlist = data as TWishlistList;

    return <Wishlist wishListProducts={wishlist} />;
};

export default LoadWishList;
