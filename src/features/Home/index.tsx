import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Featured from "./components/Products/Featured";
import Features from "./components/Features";
import New from "./components/Products/New";
import Testimonials from "./components/Testimonials";

const Index = () => {
    return (
        <>
            <Hero />
            <Categories />
            <Featured />
            <Features />
            <New />
            <Testimonials />
        </>
    );
};

export default Index;
