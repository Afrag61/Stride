"use client";

import { FaFacebookF, FaXTwitter } from "react-icons/fa6";
import { ImWhatsapp } from "react-icons/im";
import { TbCopy } from "react-icons/tb";

const Share = () => {
    const handleShare = (id: "twitter" | "facebook" | "whatsapp" | "copy") => {
        switch (id) {
            case "twitter":
                console.log("shared to twitter");
                break;
            case "facebook":
                console.log("shared to facebook");
                break;
            case "whatsapp":
                console.log("shared to whatsapp");
                break;
            case "copy":
                console.log("shared to clipboard");
                break;
            default:
                break;
        }
    };

    return (
        <section className="border-t border-gray-200 bg-gray-50 py-12 dark:border-gray-800 dark:bg-gray-900/50">
            <div className="mx-auto max-w-7xl px-4 lg:px-8">
                <div className="flex flex-col items-center justify-between gap-6 rounded-2xl bg-white p-8 shadow-sm dark:bg-gray-800 sm:flex-row">
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            Share your wishlist
                        </h3>
                        <p className="mt-1 text-gray-600 dark:text-gray-400">
                            Let friends and family know what you're hoping for
                        </p>
                    </div>
                    <div className="flex gap-3">
                        <button
                            onClick={() => handleShare("twitter")}
                            className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-colors hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600"
                        >
                            <FaXTwitter className="h-5 w-5" />
                        </button>
                        <button
                            onClick={() => handleShare("facebook")}
                            className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-colors hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600"
                        >
                            <FaFacebookF className="h-5 w-5" />
                        </button>
                        <button
                            onClick={() => handleShare("whatsapp")}
                            className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-colors hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600"
                        >
                            <ImWhatsapp className="h-5 w-5" />
                        </button>
                        <button
                            onClick={() => handleShare("copy")}
                            className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-colors hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600"
                        >
                            <TbCopy className="h-5 w-5" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Share;
