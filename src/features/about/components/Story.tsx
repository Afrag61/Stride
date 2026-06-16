const list = [
    {
        title: "500K+",
        description: "Happy Customers",
    },
    {
        title: "200+",
        description: "Shoe Styles",
    },
    {
        title: "15",
        description: "Countries Served",
    },
    {
        title: "4.9/5",
        description: "Average Rating",
    },
];

const Story = () => {
    return (
        <>
            <section className="relative overflow-hidden bg-gray-900 py-20 lg:py-32">
                {/* Background */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[64px_64px]"></div>
                    <div className="absolute -right-40 top-0 h-150 w-150 rounded-full bg-primary-500/20 blur-[120px]"></div>
                    <div className="absolute -left-40 bottom-0 h-100 w-100 rounded-full bg-primary-700/20 blur-[100px]"></div>
                </div>
                {/* Content */}
                <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
                    <div className="max-w-3xl">
                        <span className="inline-block rounded-full bg-primary-500/20 px-4 py-2 text-sm font-medium text-primary-400">
                            Our Story
                        </span>
                        <h1 className="mt-6 font-display text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
                            We believe in the power of the{" "}
                            <span className="text-primary-400">
                                perfect step
                            </span>
                        </h1>
                        <p className="mt-6 text-lg text-gray-400 leading-relaxed">
                            Founded in 2018, Stride was born from a simple idea:
                            footwear should never make you choose between style
                            and comfort. Every shoe we create is designed to
                            move with you, support you, and help you look great
                            doing it.
                        </p>
                    </div>
                </div>
            </section>
            <section className="border-b border-gray-200 bg-white py-12 dark:border-gray-800 dark:bg-gray-950">
                <div className="mx-auto max-w-7xl px-4 lg:px-8">
                    <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
                        {list.map((item, idx) => (
                            <div key={idx} className="text-center">
                                <p className="font-display text-4xl font-bold text-primary-600 lg:text-5xl">
                                    {item.title}
                                </p>
                                <p className="mt-2 text-gray-600 dark:text-gray-400">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Story;
