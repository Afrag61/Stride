import Navigation from "./components/Navigation";
import Profile from "./components/Profile";
import { createClient } from "@/lib/supabase/server";

interface Props {
    children: React.ReactNode;
}

const AccountLayout: React.FC<Readonly<Props>> = async ({ children }) => {
    const supabase = await createClient();

    const { data: user } = await supabase.auth.getUser();

    const { data: ordersCount } = await supabase
        .from("orders")
        .select("count")
        .eq("user_id", user?.user?.id)
        .single();

    const { data: wishlistCount } = await supabase
        .from("wishlist")
        .select("count")
        .eq("user_id", user?.user?.id)
        .single();

    return (
        <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8 sm:py-16">
            <div className="grid gap-8 lg:grid-cols-4 lg:gap-12">
                <div className="lg:col-span-1 space-y-6">
                    <Profile />
                    <Navigation
                        OrdersCount={ordersCount ? ordersCount.count : 0}
                        WishlistCount={wishlistCount ? wishlistCount.count : 0}
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
