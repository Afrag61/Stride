import GoogleProvider from "./GoogleProvider";

const Index = () => {
    return (
        <>
            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200 dark:border-gray-700" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white dark:bg-gray-900 px-2 text-gray-400">
                        Or continue with
                    </span>
                </div>
            </div>

            {/* Google */}
            <GoogleProvider />
        </>
    );
};

export default Index;
