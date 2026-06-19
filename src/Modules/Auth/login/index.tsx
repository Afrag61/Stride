import type { Metadata } from "next";
import Login from "./components/Login";

export const metadata: Metadata = {
    title: "Login | Stride",
    description: "Login to your account to manage your orders and preferences.",
};

const Index = () => {
    return <Login />;
};

export default Index;
