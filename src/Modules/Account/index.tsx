import { Suspense } from "react";
import Orders from "./components/Orders";
import OrdersSkeleton from "@/components/Skeleton/OrdersSkeleton";

const Index = async () => {
    return (
        <Suspense fallback={<OrdersSkeleton />}>
            <Orders />
        </Suspense>
    );
};

export default Index;
