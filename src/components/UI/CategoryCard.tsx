import { Link } from "@/components/UI/Link";
import { MoveRight } from "lucide-react";
import Image from "next/image";

interface Props {
    href: string;
    image: string;
    name: string;
    description: string;
    products: { count: number }[];
    className?: string;
}

const CategoryCard: React.FC<Props> = ({
    href,
    image,
    name,
    description,
    products,
    className,
}) => {
    return (
        <Link
            href={href}
            className={`group relative overflow-hidden rounded-2xl ${className}`}
        >
            {/* Image */}
            <div className="aspect-4/3">
                <Image
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    src={image}
                    alt={name}
                    height={500}
                    width={500}
                    loading="lazy"
                />
            </div>
            {/* Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent opacity-70 transition-opacity"></div>
            {/* Content */}
            <div className="category-content absolute bottom-0 left-0 right-0 p-6 transition-transform">
                <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                    {products[0].count} products
                </span>
                <h3 className="mt-3 font-display text-2xl font-bold text-white">
                    {name}
                </h3>
                <p className="mt-1 text-sm text-gray-300">{description}</p>
                <div className="mt-4 inline-flex items-center gap-2 text-white transition-transform duration-300 group-hover:translate-x-2">
                    Shop Now
                    <MoveRight className="h-4 w-4" />
                </div>
            </div>
        </Link>
    );
};

export default CategoryCard;
