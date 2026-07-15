import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Featured from "./components/Products/Featured";
import Features from "./components/Features";
import New from "./components/Products/New";
import Testimonials from "./components/Testimonials";
import Newsletter from "./components/Newsletter";
import { createClient } from "@/lib/supabase/server";

const Index = async () => {
    const supabase = await createClient();
    const {
        data: { user },
    } = await supabase.auth.getUser();

    return (
        <>
            <Hero />
            <Categories />
            <Featured isAuthenticated={!!user} />
            <Features />
            <New isAuthenticated={!!user} />
            <Testimonials />
            <Newsletter />
        </>
    );
};

export default Index;
