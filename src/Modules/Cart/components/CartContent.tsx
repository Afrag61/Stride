import CartList from "./CartList";
import Checkout from "./Checkout";

const CartContent = () => {
    return (
        <section className="py-8 lg:py-12">
            <div className="mx-auto max-w-7xl px-4 lg:px-8">
                <div className="grid gap-8 lg:grid-cols-3 lg:gap-12">
                    {/* Cart Items */}
                    <CartList />
                    {/* Order Summary */}
                    <Checkout />
                </div>
            </div>
        </section>
    );
};

export default CartContent;
