import { Link } from "@/components/UI/Link";

const BottomBar = () => {
    return (
        <div className="border-t border-gray-200 dark:border-gray-800">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row lg:px-8">
                <p className="text-sm text-gray-500">
                    &copy; {new Date().getFullYear()} Stride. All rights
                    reserved.
                </p>
                <div className="flex items-center gap-6">
                    <Link
                        href="/privacy"
                        className="text-sm text-gray-500 transition-colors hover:text-gray-700 dark:hover:text-gray-300"
                    >
                        Privacy
                    </Link>
                    <Link
                        href="/terms"
                        className="text-sm text-gray-500 transition-colors hover:text-gray-700 dark:hover:text-gray-300"
                    >
                        Terms
                    </Link>
                    <div className="flex items-center gap-1.5">
                        <div className="flex h-6 w-10 items-center justify-center rounded bg-[#1A1F71]">
                            <span className="font-bold italic text-white text-xs">
                                VISA
                            </span>
                        </div>
                        <div className="flex h-6 w-10 items-center justify-center rounded bg-gray-100">
                            <svg
                                className="h-4 w-4"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                {" "}
                                <circle
                                    cx="9"
                                    cy="12"
                                    r="6"
                                    fill="#EB001B"
                                ></circle>{" "}
                                <circle
                                    cx="15"
                                    cy="12"
                                    r="6"
                                    fill="#F79E1B"
                                ></circle>{" "}
                                <path
                                    d="M12 7.5a6 6 0 000 9 6 6 0 000-9z"
                                    fill="#FF5F00"
                                ></path>{" "}
                            </svg>{" "}
                        </div>
                        <div className="flex h-6 w-10 items-center justify-center rounded bg-[#006FCF]">
                            <span className="font-bold text-white text-[8px]">
                                AMEX
                            </span>
                        </div>
                        <div className="flex h-6 w-10 items-center justify-center rounded bg-black">
                            <span className="font-bold text-white text-[10px]">
                                Pay
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BottomBar;
