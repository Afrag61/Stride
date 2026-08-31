import PageHeader from "@/components/UI/PageHeader";
import { Metadata } from "next";
import Badges from "./components/Badges";
import CartContent from "./components/CartContent";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
    title: "Shopping Cart | Stride",
    description: "Review your cart and proceed to checkout.",
};

const Index = () => {
    return (
        <>
            <PageHeader title="Shopping Cart" />
            <CartContent />
            <Badges />
        </>
    );
};

export default Index;
