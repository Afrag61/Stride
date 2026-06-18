"use client";

import { useState } from "react";
import Image from "next/image";

import type { TProduct } from "@/types";

interface Props {
    images: TProduct["images"];
    name: TProduct["name"];
    tag: TProduct["tag"];
    discount: TProduct["discount"];
}

const ProductImages: React.FC<Props> = ({ images, name, tag, discount }) => {
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const handleImageSelect = (index: number) => {
        setSelectedImageIndex(index);
    };

    return (
        <div className="space-y-4">
            <div className="relative overflow-hidden rounded-3xl bg-gray-100 dark:bg-gray-800">
                <Image
                    src={images[selectedImageIndex]}
                    alt={name}
                    className="aspect-square w-full object-cover"
                    width={800}
                    height={800}
                />
                {/* Badges */}
                <div className="absolute left-4 top-4 flex flex-col gap-2">
                    {discount > 0 && (
                        <span className="w-fit rounded-full bg-primary-500 px-3 py-1.5 text-sm font-bold text-white">
                            -{discount}%
                        </span>
                    )}
                    {tag && (
                        <span
                            className={`rounded-full ${tag === "NEW" ? "bg-green-500" : "bg-amber-500"} px-3 py-1.5 text-sm font-bold`}
                        >
                            {tag}
                        </span>
                    )}
                </div>
            </div>
            {/* Image Thumbnails */}
            <div className="flex gap-4">
                {images.map((image, index) => (
                    <button
                        key={index}
                        onClick={() => handleImageSelect(index)}
                        className={`relative h-20 w-20 overflow-hidden rounded-xl bg-gray-100 ring-2 transition-all ${selectedImageIndex === index ? "ring-primary-500" : "ring-transparent hover:ring-primary-500"} dark:bg-gray-800`}
                    >
                        <Image
                            src={image}
                            alt={name}
                            className="h-full w-full object-cover"
                            width={100}
                            height={100}
                        />
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ProductImages;
