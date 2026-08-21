"use client";

import Input from "@/components/UI/CheckoutInput";
import {
    Building,
    CreditCard,
    Loader2,
    LockKeyhole,
    Mail,
    MapPin,
    User,
} from "lucide-react";
import { useCart } from "../hooks/useCart";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { checkoutSchema, TCheckoutSchema } from "../validation";
import { useAuth } from "@/Modules/Auth/hooks/useAuth";
import { useEffect } from "react";
import { submitCheckout } from "../actions";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

interface CheckoutFormProps {
    onClose: () => void;
    onSubmittingChange?: (isSubmitting: boolean) => void;
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({
    onClose,
    onSubmittingChange,
}) => {
    const router = useRouter();
    const { isLoading, user, isAuthenticated } = useAuth();

    const {
        control,
        handleSubmit,
        formState: { isSubmitting },
    } = useForm({
        resolver: zodResolver(checkoutSchema),
        values: {
            fullName: user?.user_metadata.name || "",
            email: user?.email || "",
            phone: user?.user_metadata.phone || "",
            country: "",
            address: "",
            city: "",
            state: "",
            zipCode: "",
            cardName: "",
            cardNumber: "",
            expiryDate: "",
            cvv: "",
        },
    });
    const { totalPrice, items, handleClearCart } = useCart();

    useEffect(() => {
        onSubmittingChange?.(isSubmitting);
    }, [isSubmitting, onSubmittingChange]);

    const submitHandler = async (data: TCheckoutSchema) => {
        if (!isAuthenticated) {
            toast.error("Please login to proceed to checkout!");
            return;
        }

        try {
            const { success, error } = await submitCheckout({
                items,
                total_amount: totalPrice > 0 ? totalPrice + 35 : 0,
                tax: totalPrice > 0 ? 35 : 0,
                shipping: "FREE",
                status: "Processing",
                shipping_address: {
                    full_name: data.fullName,
                    email: data.email,
                    phone: data.phone,
                    address: data.address,
                    city: data.city,
                    state: data.state,
                    zip_code: data.zipCode,
                    country: data.country,
                },
            });

            if (error) {
                toast.error(error);
                return;
            }

            if (success) {
                handleClearCart();
                toast.success("Order placed successfully!", {
                    duration: 10000,
                });
                onClose();
                router.push("/account");
            }
        } catch (err) {
            toast.error("Something went wrong. Please try again.");
        }
    };

    const handleCardNumberChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        onChange: (value: string) => void,
    ) => {
        const rowValue = e.target.value.replace(/\D/g, "").slice(0, 16);

        const formattedValue = rowValue.replace(/(\d{4})(?=\d)/g, "$1 ");

        onChange(formattedValue);
    };

    if (isLoading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <Loader2 className="animate-spin" />
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit(submitHandler)}>
            {/* Shipping Information */}
            <div className="mb-6">
                <div className="flex items-center gap-2 mb-4">
                    <MapPin className="h-4 w-4 text-primary-600" />
                    <h3 className="text-sm font-bold text-gray-800 dark:text-gray-200 uppercase tracking-wider">
                        Shipping Information
                    </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {/* Full Name */}
                    <Controller
                        control={control}
                        name="fullName"
                        render={({
                            field: { onChange, value },
                            fieldState: { error },
                        }) => (
                            <Input
                                label="Full Name"
                                type="text"
                                required
                                value={value}
                                onChange={onChange}
                                placeholder="John Doe"
                                Icon={
                                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                                }
                                error={error?.message}
                            />
                        )}
                    />

                    {/* Email */}
                    <Controller
                        control={control}
                        name="email"
                        render={({
                            field: { onChange, value },
                            fieldState: { error },
                        }) => (
                            <Input
                                label="Email"
                                Icon={
                                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                                }
                                type="email"
                                required
                                value={value}
                                onChange={onChange}
                                placeholder="john@example.com"
                                error={error?.message}
                            />
                        )}
                    />

                    {/* Phone */}
                    <div>
                        <Controller
                            control={control}
                            name="phone"
                            render={({
                                field: { onChange, value },
                                fieldState: { error },
                            }) => (
                                <>
                                    <label className="block text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                                        Phone Number{" "}
                                        <span className="text-red-600">*</span>
                                    </label>
                                    <PhoneInput
                                        value={value}
                                        onChange={onChange}
                                        international
                                        defaultCountry="EG"
                                        countryCallingCodeEditable={false}
                                        className={`flex items-center w-full rounded-lg bg-white px-3.5 py-2.5 dark:bg-gray-800 dark:text-white transition-all ${error ? "border border-red-400 dark:border-red-500 focus-within:border-red-500 dark:focus-within:border-red-500 focus-within:ring-2 focus-within:ring-red-500 focus-within:ring-offset-1 dark:focus-within:ring-offset-gray-900" : "border border-gray-300 dark:border-gray-700 focus-within:border-primary-500 dark:focus-within:border-primary-500 focus-within:ring-2 focus-within:ring-primary-500 focus-within:ring-offset-1 dark:focus-within:ring-offset-gray-900"}`}
                                        countrySelectProps={{
                                            className:
                                                "bg-gray-200 dark:bg-gray-800 text-sm text-gray-900 dark:text-white",
                                        }}
                                        numberInputProps={{
                                            className:
                                                "bg-transparent w-full text-sm text-gray-900 dark:text-white placeholder:text-gray-400 outline-none",
                                        }}
                                    />
                                    {error && (
                                        <p className="text-xs text-red-500 mt-0.5">
                                            {error.message}
                                        </p>
                                    )}
                                </>
                            )}
                        />
                    </div>

                    {/* Country */}
                    <Controller
                        control={control}
                        name="country"
                        render={({
                            field: { value, onChange },
                            fieldState: { error },
                        }) => (
                            <Input
                                label="Country"
                                type="text"
                                required
                                value={value}
                                onChange={onChange}
                                placeholder="United States"
                                Icon={
                                    <Building className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                                }
                                error={error?.message}
                            />
                        )}
                    />

                    {/* Address - full width */}
                    <div className="sm:col-span-2">
                        <Controller
                            control={control}
                            name="address"
                            render={({
                                field: { value, onChange },
                                fieldState: { error },
                            }) => (
                                <Input
                                    label="Street Address"
                                    Icon={
                                        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                                    }
                                    type="text"
                                    required
                                    value={value}
                                    onChange={onChange}
                                    placeholder="123 Main Street, Apt 4B"
                                    error={error?.message}
                                />
                            )}
                        />
                    </div>

                    {/* City */}
                    <Controller
                        control={control}
                        name="city"
                        render={({
                            field: { value, onChange },
                            fieldState: { error },
                        }) => (
                            <Input
                                label="City"
                                type="text"
                                required
                                value={value}
                                onChange={onChange}
                                placeholder="New York"
                                error={error?.message}
                            />
                        )}
                    />

                    {/* State */}
                    <div className="grid grid-cols-2 gap-3">
                        <Controller
                            control={control}
                            name="state"
                            render={({
                                field: { value, onChange },
                                fieldState: { error },
                            }) => (
                                <Input
                                    label="State"
                                    type="text"
                                    required
                                    value={value}
                                    onChange={onChange}
                                    placeholder="NY"
                                    error={error?.message}
                                />
                            )}
                        />
                        <Controller
                            control={control}
                            name="zipCode"
                            render={({
                                field: { value, onChange },
                                fieldState: { error },
                            }) => (
                                <Input
                                    label="Zip Code"
                                    type="text"
                                    required
                                    value={value}
                                    onChange={onChange}
                                    placeholder="10001"
                                    error={error?.message}
                                />
                            )}
                        />
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200 dark:border-gray-700 my-5" />

            {/* Payment Information */}
            <div className="mb-6">
                <div className="flex items-center gap-2 mb-4">
                    <CreditCard className="h-4 w-4 text-primary-600" />
                    <h3 className="text-sm font-bold text-gray-800 dark:text-gray-200 uppercase tracking-wider">
                        Payment Details
                    </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {/* Card Name */}
                    <div className="sm:col-span-2">
                        <Controller
                            control={control}
                            name="cardName"
                            render={({
                                field: { value, onChange },
                                fieldState: { error },
                            }) => (
                                <Input
                                    label="Name on Card"
                                    Icon={
                                        <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                                    }
                                    type="text"
                                    required
                                    value={value}
                                    onChange={onChange}
                                    placeholder="John Doe"
                                    error={error?.message}
                                />
                            )}
                        />
                    </div>

                    {/* Card Number */}
                    <div className="sm:col-span-2">
                        <Controller
                            control={control}
                            name="cardNumber"
                            render={({
                                field: { value, onChange },
                                fieldState: { error },
                            }) => (
                                <Input
                                    label="Card Number"
                                    Icon={
                                        <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                                    }
                                    type="text"
                                    required
                                    value={value}
                                    onChange={(e) =>
                                        handleCardNumberChange(e, onChange)
                                    }
                                    placeholder="1234 5678 9012 3456"
                                    error={error?.message}
                                />
                            )}
                        />
                    </div>

                    {/* Expiry Date */}
                    <Controller
                        control={control}
                        name="expiryDate"
                        render={({
                            field: { value, onChange },
                            fieldState: { error },
                        }) => (
                            <Input
                                label="Expiry Date"
                                type="text"
                                required
                                value={value}
                                onChange={onChange}
                                placeholder="MM/YY"
                                error={error?.message}
                            />
                        )}
                    />

                    {/* CVV */}
                    <Controller
                        control={control}
                        name="cvv"
                        render={({
                            field: { value, onChange },
                            fieldState: { error },
                        }) => (
                            <Input
                                label="CVV"
                                Icon={
                                    <LockKeyhole className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                                }
                                type="text"
                                required
                                value={value}
                                onChange={onChange}
                                placeholder="123"
                                error={error?.message}
                            />
                        )}
                    />
                </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200 dark:border-gray-700 my-5" />

            {/* Order Total Summary */}
            <div className="rounded-xl bg-gray-200/60 dark:bg-gray-800/60 p-4 mb-6 space-y-2">
                <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                    <span>Subtotal</span>
                    <span>${totalPrice}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                    <span>Tax</span>
                    <span>$35</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                    <span>Shipping</span>
                    <span className="text-green-600 dark:text-green-400 font-semibold">
                        FREE
                    </span>
                </div>
                <div className="flex justify-between border-t border-gray-300 dark:border-gray-700 pt-2 text-base font-bold text-gray-900 dark:text-white">
                    <span>Total</span>
                    <span>${totalPrice > 0 ? totalPrice + 35 : 0}</span>
                </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3">
                <button
                    disabled={isSubmitting}
                    type="submit"
                    className="flex-1 flex items-center justify-center gap-2 rounded-full bg-primary-600 px-6 py-3 font-semibold text-white shadow-lg shadow-primary-500/25 hover:bg-primary-700 hover:shadow-xl transition-all active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
                >
                    {isSubmitting ? (
                        <>
                            <Loader2 className="h-4 w-4 animate-spin" />
                            Processing...
                        </>
                    ) : (
                        <>
                            <LockKeyhole className="h-4 w-4" />
                            Place Order — $
                            {totalPrice > 0 ? totalPrice + 35 : 0}
                        </>
                    )}
                </button>
                <button
                    onClick={onClose}
                    disabled={isSubmitting}
                    type="button"
                    className="rounded-full px-6 py-3 text-sm font-semibold text-gray-700 dark:text-gray-300 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors cursor-pointer"
                >
                    Cancel
                </button>
            </div>
        </form>
    );
};

export default CheckoutForm;
