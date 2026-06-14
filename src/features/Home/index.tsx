import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Featured from "./components/Products/Featured";
import Features from "./components/Features";
import New from "./components/Products/New";

const Index = () => {
    return (
        <>
            <Hero />
            <Categories />
            <Featured />
            <Features />
            <New />
        </>
    );
};

export default Index;
