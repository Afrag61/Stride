import WishListProducts from "./wishListProducts";
import { Suspense } from "react";
import Share from "./Share";
import WishlistProductsSkeleton from "@/components/Skeleton/WishlistProductsSkeleton";
import Suggestion from "./Suggestion";
import SuggestionSkeleton from "@/components/Skeleton/SuggestionSkeleton";

const WishlistPage = async () => {
    return (
        <>
            <Suspense fallback={<WishlistProductsSkeleton />}>
                <WishListProducts />
            </Suspense>

            <Share />

            <Suspense fallback={<SuggestionSkeleton />}>
                <Suggestion />
            </Suspense>
        </>
    );
};

export default WishlistPage;
