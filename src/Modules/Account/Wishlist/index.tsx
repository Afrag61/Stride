import { Suspense } from "react";
import WishlistSkeleton from "@/components/Skeleton/WishlistSkeleton";
import LoadWishList from "../components/LoadWishList";

const Index = () => {
    return (
        <Suspense fallback={<WishlistSkeleton />}>
            <LoadWishList />
        </Suspense>
    );
};

export default Index;
