"use client";

import type { TProduct } from "@/types";
import { Link } from "@/components/UI/Link";
import { usePathname, useParams } from "next/navigation";

interface Props {
    className?: string;
    category?: TProduct["category"];
    productName?: string;
}

const BreadCrumb: React.FC<Props> = ({ className, category, productName }) => {
    const pathname = usePathname();
    const { productId } = useParams();

    const pathNames = pathname.split("/").filter((pathName) => pathName);

    const breadcrumbItems = pathNames.map((pathName, index) => {
        pathName = pathName.charAt(0).toUpperCase() + pathName.slice(1);
        const isLast = index === pathNames.length - 1;

        if (pathName === "Products" && isLast) {
            pathName = "Shop All";
        } else if (pathName === "Products") {
            pathName = "Shop";
        } else if (pathName === "Cart" && isLast) {
            pathName = "Shopping Cart";
        }

        return (
            <li key={index} className="flex items-center gap-2">
                {category && productId && isLast && (
                    <>
                        <Link
                            href={category.href!}
                            className="before:content-['/'] before:mr-2 before:text-gray-400 before:font-medium text-gray-500 transition-colors hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-500"
                        >
                            {category.name}
                        </Link>
                    </>
                )}
                {isLast ? (
                    <span className="before:content-['/'] before:mr-2 before:text-gray-400 before:font-medium text-gray-900 dark:text-white font-medium">
                        {productName ? productName : pathName}
                    </span>
                ) : (
                    <Link
                        href={`/${pathNames.slice(0, index + 1).join("/")}`}
                        className="before:content-['/'] before:mr-2 before:text-gray-400 before:font-medium text-gray-500 transition-colors hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-500"
                    >
                        {pathName}
                    </Link>
                )}
            </li>
        );
    });

    return (
        <nav className={`${className} text-sm`}>
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
    );
};

export default BreadCrumb;
