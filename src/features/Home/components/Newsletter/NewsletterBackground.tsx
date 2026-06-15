const NewsletterBackground = () => {
    return (
        <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-size-[32px_32px]"></div>
            <div className="absolute -right-20 top-0 h-100 w-100 rounded-full bg-primary-500/50 blur-[100px]"></div>
            <div className="absolute -left-20 bottom-0 h-75 w-75 rounded-full bg-primary-700/50 blur-[80px]"></div>
        </div>
    );
};

export default NewsletterBackground;
