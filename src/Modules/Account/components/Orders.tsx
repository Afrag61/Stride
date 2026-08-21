import { TOrder, TOrderList } from "@/types";
import { ArrowRight, ShoppingBag } from "lucide-react";
import Link from "next/link";
import OrderItem from "./OrderItem";
import { getUser } from "@/Modules/Auth/lib/getUser";
import ClientThrower from "@/Modules/Error/ClientThrower";
import { createClient } from "@/lib/supabase/server";

const Orders = async () => {
    const user = await getUser();

    if (user === false) return <ClientThrower cause="LOAD_ORDERS_FAILED" />;

    if (user === null)
        return <ClientThrower cause="NETWORK_CONNECTION_FAILED" />;

    const supabase = await createClient();

    const { data, error } = await supabase
        .from("orders")
        .select("*")
        .eq("user_id", user.id)
        .order("created_at", { ascending: false });

    if (error) return <ClientThrower cause="LOAD_ORDERS_FAILED" />;

    const orders = data as TOrderList;

    return (
        <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Order History
            </h1>

            {orders.length === 0 ? (
                <div className="text-center py-16">
                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-50 dark:bg-gray-850 text-gray-400 mb-6">
                        <ShoppingBag className="h-10 w-10" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                        No orders placed yet
                    </h3>
                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 max-w-sm mx-auto">
                        Browse our wide range of premium shoes and find your
                        perfect fit today!
                    </p>
                    <Link
                        href="/products"
                        className="group mt-8 inline-flex items-center gap-2 rounded-full bg-primary-600 px-6 py-3 font-semibold text-white shadow-lg shadow-primary-500/25 transition-all hover:bg-primary-700 hover:shadow-xl cursor-pointer active:scale-95"
                    >
                        Start Shopping
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            ) : (
                <div className="space-y-6">
                    {orders.map((order: TOrder) => (
                        <OrderItem key={order.id} order={order} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Orders;
