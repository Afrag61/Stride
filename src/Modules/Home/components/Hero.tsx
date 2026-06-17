import { Link } from "@/components/UI/Link";
import { HiArrowLongRight } from "react-icons/hi2";
import { IoStar } from "react-icons/io5";
import { Check, RefreshCcw, ArrowDown, Zap } from "lucide-react";
import Image from "next/image";

const Hero = () => {
    return (
        <section className="relative min-h-[90vh] overflow-hidden bg-gray-950">
            {/* Background */}
            <div className="absolute inset-0">
                {/* Gradient mesh */}
                <div className="absolute inset-0 bg-linear-to-br from-gray-900 via-gray-950 to-primary-950"></div>
                {/* Decorative circles */}
                <div className="absolute -right-40 top-20 h-150 w-150 rounded-full bg-primary-500/10 blur-[100px]"></div>
                <div className="absolute -left-20 bottom-20 h-100 w-100 rounded-full bg-primary-600/10 blur-[80px]"></div>
                {/* Grid pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[64px_64px]"></div>
            </div>
            <div className="relative mx-auto flex min-h-[90vh] max-w-7xl items-center px-4 py-20 lg:px-8">
                <div className="grid items-center lg:grid-cols-2 gap-12">
                    {/* Content */}
                    <div className="text-center lg:text-left">
                        <span className="inline-flex items-center gap-2 rounded-full bg-primary-500/10 px-4 py-1.5 text-sm font-medium text-primary-400">
                            <Zap className="h-4 w-4" />
                            New Collection 2032
                        </span>
                        <h1 className="mt-6 font-display text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
                            Step Into
                            <span className="font-display block bg-linear-to-r from-primary-400 to-primary-500 bg-clip-text text-transparent">
                                Your Best
                            </span>
                        </h1>
                        <p className="mx-auto mt-6 max-w-xl text-lg text-gray-400 lg:mx-0 lg:text-xl">
                            Premium footwear for every step of your journey.
                            From athletic performance to everyday comfort.
                        </p>
                        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
                            <Link
                                href="/products"
                                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary-600 px-8 py-4 font-semibold text-white shadow-lg shadow-primary-500/25 transition-all hover:bg-primary-500 hover:shadow-xl hover:shadow-primary-500/30 sm:w-auto"
                            >
                                Shop Now
                                <HiArrowLongRight className="h-5 w-5" />
                            </Link>
                            <Link
                                href="/categories"
                                className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-white/20 px-8 py-4 font-semibold text-white backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/10 sm:w-auto"
                            >
                                Browse Categories
                            </Link>
                        </div>
                        {/* Stats */}
                        <div className="mt-16 flex items-center justify-center gap-8 border-t border-white/10 pt-8 lg:justify-start">
                            <div>
                                <div className="font-display text-3xl font-bold text-white">
                                    50K+
                                </div>
                                <div className="text-sm text-gray-500">
                                    Happy Customers
                                </div>
                            </div>
                            <div className="h-12 w-px bg-white/10"></div>
                            <div>
                                <div className="flex items-center gap-1">
                                    <span className="font-display text-3xl font-bold text-white">
                                        4.9
                                    </span>
                                    <IoStar className="h-4 w-4 text-yellow-400" />
                                </div>
                                <div className="text-sm text-gray-500">
                                    Average Rating
                                </div>
                            </div>
                            <div className="h-12 w-px bg-white/10"></div>
                            <div>
                                <div className="font-display text-3xl font-bold text-white">
                                    300+
                                </div>
                                <div className="text-sm text-gray-500">
                                    Styles Available
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Image */}
                    <div className="relative">
                        <div className="relative z-10 -rotate-5 animate-float">
                            <Image
                                src="https://fkdikqcjcslclsyodcog.supabase.co/storage/v1/object/public/products_images/hero.jpeg"
                                alt="Featured sneaker"
                                className="w-full drop-shadow-2xl rounded-xl hover:scale-105 duration-300 ease-in-out"
                                width={800}
                                height={600}
                                loading="eager"
                            />
                        </div>
                        {/*Floating badges*/}
                        <div className="absolute -left-4 top-1/4 z-20 rounded-xl bg-white/10 p-4 backdrop-blur-md lg:-left-8">
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500/20">
                                    <Check className="h-5 w-5 text-green-400" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-white">
                                        Free Shipping
                                    </p>
                                    <p className="text-xs text-gray-400">
                                        Orders over $75
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="absolute -right-4 bottom-1/4 z-20 rounded-xl bg-white/10 p-4 backdrop-blur-md lg:-right-8">
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-500/20">
                                    <RefreshCcw className="h-5 w-5 text-primary-400" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-white">
                                        Easy Returns
                                    </p>
                                    <p className="text-xs text-gray-400">
                                        60-day guarantee
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Sale badge */}
                        <div className="absolute right-8 top-8 z-20">
                            <div className="flex h-20 w-20 flex-col items-center justify-center rounded-full bg-primary-500 shadow-lg shadow-primary-500/50">
                                <span className="text-xs font-bold text-white">
                                    UP TO
                                </span>
                                <span className="font-display text-2xl font-bold text-white">
                                    40%
                                </span>
                                <span className="text-xs font-bold text-white">
                                    OFF
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
                <a
                    href="#categories"
                    className="group flex flex-col items-center gap-2"
                >
                    <span className="text-xs font-medium uppercase tracking-wider text-gray-500 transition-colors group-hover:text-white">
                        Explore
                    </span>
                    <ArrowDown className="h-5 w-5 animate-bounce text-gray-500 transition-colors group-hover:text-white" />
                </a>
            </div>
        </section>
    );
};

export default Hero;
