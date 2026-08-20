import { Suspense } from "react";
import WishlistSkeleton from "@/components/Skeleton/WishlistSkeleton";
import LoadWishList from "../components/LoadWishList";

export const metadata = {
    title: "My Wishlist | Stride",
    description: "Manage your wishlist and preferences.",
};

const Index = () => {
    return (
        <Suspense fallback={<WishlistSkeleton />}>
            <LoadWishList />
        </Suspense>
    );
};

export default Index;
