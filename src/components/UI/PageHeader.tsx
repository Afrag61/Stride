"use client";
import { usePathname } from "next/navigation";
import { Link } from "@/components/UI/Link";

interface PageHeaderProps {
    title: string;
    description?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, description }) => {
    const pathname = usePathname();

    const pathnames = pathname.split("/").filter((pathname) => pathname);

    const isProductsPage = pathnames.includes("products");
    const isCartPage = pathnames.includes("cart");

    const breadcrumbItems = pathnames.map((pathname, index) => {
        const path = pathname.charAt(0).toUpperCase() + pathname.slice(1);
        const isLast = index === pathnames.length - 1;

        return (
            <li key={index} className="flex items-center gap-2">
                <span className="text-gray-400">/</span>
                {isLast ? (
                    <span className="text-gray-900 dark:text-white">
                        {isProductsPage || isCartPage ? title : path}
                    </span>
                ) : (
                    <Link
                        href={`/${pathnames.slice(0, index + 1).join("/")}`}
                        className="text-gray-500 transition-colors hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-500 font-medium"
                    >
                        {isProductsPage || isCartPage ? title : path}
                    </Link>
                )}
            </li>
        );
    });

    return (
        <section className="bg-gray-50 py-12 dark:bg-gray-900/50 lg:py-16">
            <div className="mx-auto max-w-7xl px-4 lg:px-8">
                {/* Breadcrumb */}
                <nav className="mb-4 text-sm">
                    <ol className="flex items-center gap-2">
                        <li className="flex items-center gap-2">
                            <Link
                                href="/"
                                className="text-gray-500 transition-colors hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-500 font-medium"
                            >
                                Home
                            </Link>
                        </li>
                        {breadcrumbItems}
                    </ol>
                </nav>
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="font-display text-4xl font-bold text-gray-900 dark:text-white lg:text-5xl">
                            {title}
                        </h1>
                        {description && (
                            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                                {description}
                            </p>
                        )}
                    </div>
                    <div id="page-header-btn"></div>
                </div>
            </div>
        </section>
    );
};

export default PageHeader;
