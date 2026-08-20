import { getUser } from "../Auth/lib/getUser";
import ClientThrower from "../Error/ClientThrower";
import Navigation from "./components/Navigation";
import Profile from "./components/Profile";
import { createClient } from "@/lib/supabase/server";

interface Props {
    children: React.ReactNode;
}

const AccountLayout: React.FC<Readonly<Props>> = async ({ children }) => {
    const supabase = await createClient();

    const user = await getUser();

    if (user === false) return <ClientThrower cause="LOAD_WISHLIST_FAILED" />;

    if (user === null)
        return <ClientThrower cause="NETWORK_CONNECTION_FAILED" />;

    const { count: ordersCount } = await supabase
        .from("orders")
        .select("*", { count: "exact", head: true })
        .eq("user_id", user.id);

    const { count: wishlistCount } = await supabase
        .from("wishlist")
        .select("*", { count: "exact", head: true })
        .eq("user_id", user.id);

    console.table({ ordersCount, wishlistCount });

    return (
        <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8 sm:py-16">
            <div className="grid gap-8 lg:grid-cols-4 lg:gap-12">
                <div className="lg:col-span-1 space-y-6">
                    <Profile
                        name={user.user_metadata.name}
                        email={user.email!}
                    />
                    <Navigation
                        ordersCount={ordersCount}
                        wishlistCount={wishlistCount}
                    />
                </div>
                <div className="lg:col-span-3 space-y-6">
                    <div className="rounded-3xl bg-white p-6 sm:p-8 shadow-xl dark:bg-gray-900">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccountLayout;
