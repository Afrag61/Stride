import { HiOutlineShieldCheck } from "react-icons/hi";
import { Earth } from "lucide-react";
import Image from "next/image";

const missionItems = [
    {
        title: "Quality First",
        description: "Premium materials, rigorous testing",
        Icon: HiOutlineShieldCheck,
    },
    {
        title: "Eco-Conscious",
        description: "Sustainable practices, recycled materials",
        Icon: Earth,
    },
];

const Mission = () => {
    return (
        <section className="py-16 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 lg:px-8">
                <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
                    {/* Content */}
                    <div>
                        <span className="text-sm font-semibold uppercase tracking-wider text-primary-600">
                            Our Mission
                        </span>
                        <h2 className="mt-4 font-display text-3xl font-bold text-gray-900 dark:text-white lg:text-4xl">
                            Making every step count
                        </h2>
                        <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                            At Stride, we are on a mission to revolutionize the
                            footwear industry by creating shoes that don't just
                            look good—they feel incredible and perform even
                            better.
                        </p>
                        <p className="mt-4 text-gray-600 dark:text-gray-400">
                            We work with world-class designers and material
                            scientists to develop innovative technologies that
                            provide unmatched comfort, support, and durability.
                            From marathon runners to everyday commuters, we have
                            something for everyone.
                        </p>
                        <div className="mt-8 grid gap-6 sm:grid-cols-2">
                            {missionItems.map((item, idx) => (
                                <div key={idx} className="flex gap-4">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-100 dark:bg-primary-900/30">
                                        <item.Icon className="h-6 w-6 text-primary-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 dark:text-white">
                                            {item.title}
                                        </h3>
                                        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Image */}
                    <div className="relative">
                        {/* Image Container */}
                        <div className="aspect-square overflow-hidden rounded-3xl bg-gray-100 dark:bg-gray-800">
                            <Image
                                src="https://fkdikqcjcslclsyodcog.supabase.co/storage/v1/object/public/products_images/mission.jpg"
                                alt="Stride shoes being crafted"
                                className="h-full w-full object-cover"
                                width={800}
                                height={800}
                            />
                        </div>
                        {/* Floating Card */}
                        <div className="animate-float absolute -bottom-6 -left-6 rounded-2xl bg-white p-6 shadow-xl dark:bg-gray-800 lg:-left-12">
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                Since 2018
                            </p>
                            <p className="mt-1 font-display text-2xl font-bold text-gray-900 dark:text-white">
                                6 Years
                            </p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                of innovation
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Mission;
