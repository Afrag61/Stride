export interface TCategory {
    id: number;
    href: string;
    image: string;
    name: string;
    description: string;
    products: { count: number }[];
}

export type TCategoryList = Array<TCategory>;

export interface TProduct {
    id: number;
    images: string[];
    category: { id: number; name: string; href?: string };
    name: string;
    materials: string[];
    price: number;
    price_after_discount: number;
    save_amount: number;
    discount: number;
    rate: number;
    tag: string;
    reviews: number;
    availableSizes: number[];
    colors: { name: string; value: string }[];
    description: string;
    isFavorite?: boolean;
}
export type TProductList = Array<TProduct>;

export interface TTestimonial {
    id: number;
    name: string;
    title: string;
    comment: string;
    rate: number;
    image: string;
}

export type TTestimonialList = Array<TTestimonial>;

export interface TWishlistItem {
    id: number;
    user_id: string;
    product_id: number;
    created_at: string;
    products: TProduct;
}

export type TWishlistList = Array<TWishlistItem>;
