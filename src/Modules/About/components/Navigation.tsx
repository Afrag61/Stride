import { MoveRight } from "lucide-react";
import { Link } from "@/components/UI/Link";

const Navigation = () => {
    return (
        <section className="py-16 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 lg:px-8">
                <div className="rounded-3xl bg-primary-600 p-8 text-center lg:p-16">
                    <h2 className="font-display text-3xl font-bold text-white lg:text-4xl">
                        Ready to find your perfect pair?
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-100">
                        Browse our collection and step into comfort and style.
                        Free shipping on all orders over $75.
                    </p>
                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <Link
                            href="/products"
                            className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-primary-600 shadow-lg transition-all hover:bg-gray-200"
                        >
                            Shop Now{" "}
                            <MoveRight className="group-hover:translate-x-1 transition-transform duration-300 h-5 w-5" />
                        </Link>
                        <Link
                            href="/categories"
                            className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-8 py-4 font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
                        >
                            Browse Categories
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Navigation;
