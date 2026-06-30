import PageHeader from "@/components/UI/PageHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Shopping Cart | Stride",
    description: "Review your cart and proceed to checkout.",
};

const Index = () => {
    return (
        <>
            <PageHeader title="Shopping Cart" />
        </>
    );
};

export default Index;
