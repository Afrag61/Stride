import { Suspense } from "react";
import Register from "./components/Register";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Create Account | Stride",
    description: "Create an account to manage your orders and preferences.",
};

const Index = () => {
    return (
        <Suspense>
            <Register />;
        </Suspense>
    );
};

export default Index;
