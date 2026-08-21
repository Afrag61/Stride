import { Suspense } from "react";
import Orders from "./components/Orders";
import OrdersSkeleton from "@/components/Skeleton/OrdersSkeleton";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "My Orders | Stride",
    description: "see your orders and preferences.",
};

const Index = async () => {
    return (
        <Suspense fallback={<OrdersSkeleton />}>
            <Orders />
        </Suspense>
    );
};

export default Index;
