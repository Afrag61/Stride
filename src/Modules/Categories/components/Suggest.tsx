import { MoveRight } from "lucide-react";
import { Link } from "@/components/UI/Link";

const Suggest = () => {
    return (
        <section className="bg-gray-50 py-12 dark:bg-gray-900/50 lg:py-16">
            <div className="mx-auto max-w-7xl px-4 lg:px-8">
                <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between">
                    <div className="text-center lg:text-left">
                        <h2 className="font-display text-2xl font-bold text-gray-900 dark:text-white lg:text-3xl">
                            Can't decide?
                        </h2>
                        <p className="mt-2 text-gray-600 dark:text-gray-400">
                            Browse all our products or check out our bestsellers
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-4">
                        <Link
                            href="/products"
                            className="inline-flex items-center gap-2 rounded-full bg-primary-600 px-6 py-3 font-semibold text-white shadow-lg shadow-primary-500/30 transition-all hover:bg-primary-700 hover:shadow-xl hover:shadow-primary-500/40"
                        >
                            Shop All <MoveRight className="h-5 w-5" />
                        </Link>
                        <Link
                            href="/products?filter=sale"
                            className="inline-flex items-center gap-2 rounded-full border-2 border-gray-300 bg-white px-6 py-3 font-semibold text-gray-900 transition-colors hover:border-gray-400 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600"
                        >
                            View Sale Items
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Suggest;
