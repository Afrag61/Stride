"use client";
import { useOptimistic, useState, useTransition } from "react";
import { Link } from "@/components/UI/Link";
import BreadCrumb from "@/components/UI/BreadCrumb";

import ProductImages from "./ProductImages";
import ProductColors from "./ProductColors";
import ProductSizes from "./ProductSizes";
import ProductActions from "./ProductActions";
import ProductMaterials from "./ProductMaterials";
import { TProduct } from "@/types";
import { CarFront, RefreshCcw, StarIcon } from "lucide-react";
import { addToWishlist, removeFromWishlist } from "@/Modules/Wishlist/actions";
import toast from "react-hot-toast";
import { usePathname, useRouter } from "next/navigation";
import { useCart } from "@/Modules/Cart/hooks/useCart";
import { useAuth } from "@/Modules/Auth/hooks/useAuth";

interface Props {
    product: TProduct;
}

const ProductDetails: React.FC<Props> = ({ product }) => {
    const { isAuthenticated } = useAuth();
    const [selectedColorIndex, setSelectedColorIndex] = useState(0);
    const [selectedSizeIndex, setSelectedSizeIndex] = useState(0);
    const [isLiked, setIsLiked] = useState(false);
    const [optimisticIsLiked, toggleOptimisticLike] = useOptimistic(
        isLiked,
        (state) => !state,
    );
    const [isPending, startTransition] = useTransition();

    const router = useRouter();
    const pathname = usePathname();

    const { handleAddToCart } = useCart();

    const handleWishList = async () => {
        if (!isAuthenticated) {
            toast.error("Please sign in to manage your wishlist");
            router.push(`/login?next=${pathname}`);
            return;
        }

        startTransition(async () => {
            toggleOptimisticLike(null);

            const wasLiked = isLiked;

            if (!wasLiked) {
                setIsLiked(true);
                const error = await addToWishlist(product.id);

                if (error) {
                    setIsLiked(wasLiked);
                    if (error.code === "23505") {
                        toast.error("Product already in wishlist");
                        setIsLiked(true);
                        return;
                    }
                    toast.error("Something went wrong");
                    setIsLiked(wasLiked);

                    return;
                }
                toast.success("Added to wishlist");
            } else {
                setIsLiked(false);
                const error = await removeFromWishlist(product.id);
                if (error) {
                    setIsLiked(wasLiked);
                    toast.error("Something went wrong");
                    return;
                }
                toast.success("Removed from wishlist");
            }
        });
    };

    const rate = product?.rate || 0;
    const stars = Array.from({ length: 5 }, (_, index) => (
        <StarIcon
            key={index}
            className={`h-4 w-4 fill-current ${index + 1 <= rate ? "text-yellow-400" : "text-gray-300 dark:text-gray-600"}`}
        />
    ));

    const handleSelectColor = (colorIndex: number) => {
        setSelectedColorIndex(colorIndex);
    };

    const handleSelectedSize = (sizeIndex: number) => {
        setSelectedSizeIndex(sizeIndex);
    };

    const handleCart = () => {
        if (!isAuthenticated) {
            toast.error("Please sign in to add items to your cart");
            router.push(`/login?next=${pathname}`);
            return;
        }

        if (!product?.id) {
            return;
        }

        handleAddToCart({
            productId: product.id,
            name: product.name,
            price: product.price,
            quantity: 1,
            image: product.images[0],
            color: product.colors[selectedColorIndex],
            size: product.availableSizes[selectedSizeIndex],
            discount: product.discount,
            discountedPrice: product.price_after_discount,
            totalPrice: product.price,
        });
    };

    return (
        <>
            {/* Breadcrumb */}
            <section className="bg-gray-50 py-4 dark:bg-gray-900/50">
                <div className="mx-auto max-w-7xl px-4 lg:px-8">
                    <BreadCrumb
                        category={product?.category}
                        productName={product?.name}
                    />
                </div>
            </section>
            {/* Product Details */}
            <section className="py-8 lg:py-12">
                <div className="mx-auto max-w-7xl px-4 lg:px-8">
                    <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
                        {/* Product Images */}
                        <ProductImages
                            name={product.name}
                            tag={product.tag}
                            discount={product.discount}
                            images={product.images}
                        />

                        {/* Product Info */}
                        <div className="lg:py-4">
                            {/* Category & Rating */}
                            <div className="mb-4 flex items-center gap-4">
                                <Link
                                    href={`/products?category=${product.category.name}`}
                                    className="text-sm font-medium text-primary-600 dark:hover:text-primary-700 hover:text-primary-700 dark:text-primary-400"
                                >
                                    {product.category.name}
                                </Link>
                                <div className="flex items-center gap-1.5">
                                    <div className="flex gap-1">{stars}</div>
                                    <span className="text-sm text-gray-500 dark:text-gray-400">
                                        {product.rate} ({product.reviews}{" "}
                                        Reviews)
                                    </span>
                                </div>
                            </div>
                            {/* Product Name */}
                            <h1 className="font-display text-3xl font-bold text-gray-900 dark:text-white lg:text-4xl">
                                {product.name}
                            </h1>
                            {/* Product Price */}
                            <div className="mt-4 flex items-center gap-3">
                                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                                    ${product.price_after_discount}
                                </span>
                                {product.discount > 0 && (
                                    <span className="text-xl text-gray-500 line-through">
                                        ${product.price}
                                    </span>
                                )}
                                {product.discount > 0 && (
                                    <span className="rounded-full bg-primary-100 px-3 py-1 text-sm font-semibold text-primary-700 dark:bg-primary-900/30 dark:text-primary-400">
                                        Save ${product.save_amount}
                                    </span>
                                )}
                            </div>
                            {/* Product Description */}
                            <p className="mt-6 text-gray-600 dark:text-gray-400 leading-relaxed">
                                {product.description}
                            </p>

                            {/* Product Colors */}

                            <ProductColors
                                colors={product.colors}
                                selectedColorIndex={selectedColorIndex}
                                handleSelectColor={handleSelectColor}
                            />

                            {/* Product Sizes */}

                            <ProductSizes
                                sizes={product.availableSizes}
                                selectedSizeIndex={selectedSizeIndex}
                                handleSelectedSize={handleSelectedSize}
                            />

                            {/* Product Actions */}
                            <ProductActions
                                handleAddToWishlist={handleWishList}
                                isFavorite={optimisticIsLiked}
                                isLoading={isPending}
                                handleAddToCart={handleCart}
                            />

                            {/* Product Features */}
                            <div className="mt-8 grid grid-cols-2 gap-4">
                                <div className="flex items-center gap-3 rounded-xl bg-gray-50 p-4 dark:bg-gray-800/50">
                                    <CarFront className="h-6 w-6 text-primary-600" />
                                    <div>
                                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                                            Free Shipping
                                        </p>
                                        <p className="text-xs text-gray-500">
                                            On orders over $75
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 rounded-xl bg-gray-50 p-4 dark:bg-gray-800/50">
                                    <RefreshCcw className="h-6 w-6 text-primary-600" />
                                    <div>
                                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                                            60-Day Returns
                                        </p>
                                        <p className="text-xs text-gray-500">
                                            Try it, love it
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* Product Details */}
                            <ProductMaterials materials={product.materials} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Customer Reviews */}
        </>
    );
};

export default ProductDetails;
