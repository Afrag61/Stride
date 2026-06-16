import { FaApple, FaGooglePlay } from "react-icons/fa6";
import NewsletterBackground from "./NewsletterBackground";
import NewsletterForm from "./NewsletterForm";

const Index = () => {
    return (
        <section className="relative overflow-hidden bg-primary-600 py-20 lg:py-28">
            <NewsletterBackground />
            <div className="relative mx-auto max-w-7xl px-4 text-center lg:px-8">
                <h2 className="font-display text-4xl font-bold text-white sm:text-5xl">
                    Ready to Step Up Your Game?
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-100 font-medium">
                    Join the Stride community and get 15% off your first order.
                    Plus, early access to new releases and exclusive member-only
                    deals.
                </p>
                <NewsletterForm />
                <p className="mt-4 text-sm text-primary-200">
                    No spam, ever. Unsubscribe anytime.
                </p>
                {/* App Store and Google Play buttons */}
                <div className="mt-12 flex flex-col items-center gap-4">
                    <p className="text-sm font-medium text-white">
                        Download Our App
                    </p>
                    <div className="flex gap-4">
                        <a
                            href="#"
                            className="flex items-center gap-2 rounded-xl bg-black/30 px-4 py-2.5 transition-colors hover:bg-black/50"
                        >
                            <FaApple className="h-6 w-6 text-white" />
                            <div className="text-left">
                                <div className="text-[10px] text-gray-300">
                                    Download on the
                                </div>
                                <div className="text-sm font-semibold text-white">
                                    App Store
                                </div>
                            </div>
                        </a>
                        <a
                            href="#"
                            className="flex items-center gap-2 rounded-xl bg-black/30 px-4 py-2.5 transition-colors hover:bg-black/50"
                        >
                            <FaGooglePlay className="h-6 w-6 text-white" />
                            <div className="text-left">
                                <div className="text-[10px] text-gray-300">
                                    Get it on
                                </div>
                                <div className="text-sm font-semibold text-white">
                                    Google Play
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Index;
