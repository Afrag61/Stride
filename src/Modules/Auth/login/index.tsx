import type { Metadata } from "next";
import Login from "./components/Login";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
    title: "Login | Stride",
    description: "Login to your account to manage your orders and preferences.",
};

const Index = () => {
    return (
        <Suspense>
            <Login />
        </Suspense>
    );
};

export default Index;
