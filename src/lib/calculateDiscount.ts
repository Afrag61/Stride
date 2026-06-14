export const calculateDiscount = (price: number = 0, discount: number = 0) => {
    if (!discount || discount <= 0) {
        return { priceAfterDiscount: Math.round(price), saved: 0 };
    }

    const discountAmount = (price * discount) / 100;
    const finalPrice = price - discountAmount;
    return {
        priceAfterDiscount: Math.round(finalPrice),
        saved: Math.round(discountAmount),
    };
};
