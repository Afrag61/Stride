import { Metadata } from "next";
import WishlistPage from "./components/WishlistPage";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
    title: "Wishlist | Stride",
    description:
        "Your saved items. Keep track of products you love and buy them when you're ready.",
};

const Wishlist = async () => {
    return <WishlistPage />;
};

export default Wishlist;
