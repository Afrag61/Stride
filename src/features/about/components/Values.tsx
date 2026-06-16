import { Zap, Heart, Globe } from "lucide-react";

const valueList = [
    {
        Icon: Zap,
        title: "Innovation",
        description:
            "We constantly push boundaries with new materials, designs, and technologies to create the best footwear possible.",
    },
    {
        Icon: Heart,
        title: "Customer Love",
        description:
            "Our customers are at the heart of everything we do. Their feedback shapes our products and drives our improvements.",
    },
    {
        Icon: Globe,
        title: "Sustainability",
        description:
            "We are committed to reducing our environmental footprint through sustainable materials and responsible manufacturing.",
    },
];

const Values = () => {
    return (
        <section className="bg-gray-50 py-16 dark:bg-gray-900/50 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 lg:px-8">
                {/* Values Heading */}
                <div className="text-center">
                    <span className="text-sm font-semibold uppercase tracking-wider text-primary-600">
                        Our Values
                    </span>
                    <h2 className="mt-4 font-display text-3xl font-bold text-gray-900 dark:text-white lg:text-4xl">
                        What drives us forward
                    </h2>
                </div>
                {/* Content */}
                <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {valueList.map((item, index) => (
                        <div
                            key={index}
                            className="rounded-2xl bg-white p-8 shadow-sm dark:bg-gray-800"
                        >
                            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary-100 dark:bg-primary-900/30">
                                <item.Icon className="h-7 w-7 text-primary-600" />
                            </div>
                            <h3 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">
                                {item.title}
                            </h3>
                            <p className="mt-3 text-gray-600 dark:text-gray-400">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Values;
