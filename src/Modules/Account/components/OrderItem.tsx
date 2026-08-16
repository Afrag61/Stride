"use client";

import { TOrder } from "@/types";
import {
    Calendar,
    ChevronDown,
    ChevronUp,
    MapPin,
    Package,
} from "lucide-react";
import { useState } from "react";

interface Props {
    order: TOrder;
}

const OrderItem: React.FC<Props> = ({ order }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleOrder = () => {
        setIsExpanded((prev) => !prev);
    };

    const getStatusColor = (status: TOrder["status"]) => {
        switch (status) {
            case "Processing":
                return "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/30 dark:text-amber-400 dark:border-amber-900";
            case "Shipped":
                return "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/30 dark:text-blue-400 dark:border-blue-900";
            case "Delivered":
                return "bg-green-50 text-green-700 border-green-200 dark:bg-green-950/30 dark:text-green-400 dark:border-green-900";
            default:
                return "bg-gray-50 text-gray-700 border-gray-200 dark:bg-gray-800/30 dark:text-gray-400 dark:border-gray-800";
        }
    };

    const formattedDateTime = new Date(order.created_at)
        .toLocaleString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        })
        .replace("at", "•");

    return (
        <div
            key={order.id}
            className="overflow-hidden rounded-2xl border border-gray-200/50 dark:border-gray-800 bg-white dark:bg-gray-900/50 shadow-sm"
        >
            {/* Order Header Summary */}
            <div
                onClick={toggleOrder}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-5 sm:p-6 gap-4 cursor-pointer bg-gray-100 dark:bg-gray-800/50 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
                <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2.5">
                        <span className="font-bold text-gray-900 dark:text-white text-sm sm:text-base">
                            {order.shipping_address.address}
                        </span>
                        <span
                            className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold ${getStatusColor(order.status)}`}
                        >
                            {order.status.toLowerCase()}
                        </span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                        <Calendar className="h-3.5 w-3.5" />
                        <span>{formattedDateTime}</span>
                    </div>
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-6 border-t sm:border-t-0 pt-3 sm:pt-0 border-gray-150 dark:border-gray-850">
                    <div>
                        <p className="text-xs text-gray-400 dark:text-gray-500 uppercase tracking-wider font-semibold">
                            Total
                        </p>
                        <p className="text-base font-bold text-gray-900 dark:text-white">
                            ${order.total_amount}
                        </p>
                    </div>
                    <div className="rounded-full bg-gray-100 p-1.5 text-gray-500 dark:bg-gray-800 dark:text-gray-400">
                        {isExpanded ? (
                            <ChevronUp className="h-5 w-5" />
                        ) : (
                            <ChevronDown className="h-5 w-5" />
                        )}
                    </div>
                </div>
            </div>

            {/* Expanded Order details */}
            {isExpanded && (
                <div className="border-t border-gray-200 dark:border-gray-800 p-5 sm:p-6 space-y-6">
                    {/* Items list */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                            Items Ordered
                        </h4>
                        <div className="divide-y divide-gray-300 dark:divide-gray-800">
                            {order.items?.map((item: any, idx: number) => (
                                <div
                                    key={idx}
                                    className="flex items-center justify-between py-4 first:pt-0 last:pb-0 gap-4"
                                >
                                    <div className="flex items-center gap-4">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="h-14 w-14 rounded-lg object-cover bg-gray-100 dark:bg-gray-800 border border-gray-100 dark:border-gray-800"
                                        />
                                        <div>
                                            <h5 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                                                {item.name}
                                            </h5>
                                            <div className="flex flex-wrap gap-2 mt-1 text-xs text-gray-500 dark:text-gray-400">
                                                {item.color && (
                                                    <span className="flex items-center gap-1.5">
                                                        Color:
                                                        <span
                                                            className="inline-block h-3 w-3 rounded-full border border-gray-300 dark:border-gray-600"
                                                            style={{
                                                                backgroundColor:
                                                                    typeof item.color ===
                                                                        "object" &&
                                                                    item.color
                                                                        .value,
                                                            }}
                                                        />
                                                        {typeof item.color ===
                                                            "object" &&
                                                            item.color.name}
                                                    </span>
                                                )}
                                                {item.size && (
                                                    <span>
                                                        Size: {item.size}
                                                    </span>
                                                )}
                                                <span>
                                                    Qty: {item.quantity}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <p className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                                        ${item.totalPrice}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Shipping Address and Pricing Summary */}
                    <div className="grid gap-6 sm:grid-cols-2 pt-6 border-t border-gray-200 dark:border-gray-800">
                        {/* Address */}
                        {order.shipping_address && (
                            <div className="space-y-3">
                                <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider flex items-center gap-2">
                                    <MapPin className="h-4 w-4" />
                                    Delivery Address
                                </h4>
                                <div className="text-sm text-gray-600 dark:text-gray-350 space-y-1">
                                    <p className="font-semibold text-gray-800 dark:text-white">
                                        {order.shipping_address.full_name}
                                    </p>
                                    <p>{order.shipping_address.address}</p>
                                    <p>
                                        {order.shipping_address.city},{" "}
                                        {order.shipping_address.state}{" "}
                                        {order.shipping_address.zip_code}
                                    </p>
                                    <p>{order.shipping_address.country}</p>
                                </div>
                            </div>
                        )}

                        {/* Summary */}
                        <div className="space-y-3 bg-gray-200 dark:bg-gray-800/50 p-4 rounded-xl border border-gray-100 dark:border-gray-800">
                            <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider flex items-center gap-2">
                                <Package className="h-4 w-4" />
                                Pricing Summary
                            </h4>
                            <div className="space-y-2 text-sm">
                                <div className="flex justify-between text-gray-600 dark:text-gray-400">
                                    <span>Subtotal</span>
                                    <span>
                                        ${order.total_amount - (order.tax || 0)}
                                    </span>
                                </div>
                                <div className="flex justify-between text-gray-600 dark:text-gray-400">
                                    <span>Tax</span>
                                    <span>${order.tax || 0}</span>
                                </div>
                                <div className="flex justify-between text-gray-600 dark:text-gray-400">
                                    <span>Shipping</span>
                                    <span className="text-green-600 dark:text-green-400 font-semibold">
                                        {order.shipping}
                                    </span>
                                </div>
                                <div className="flex justify-between border-t border-gray-300 dark:border-gray-700 pt-2 font-bold text-gray-900 dark:text-white text-base">
                                    <span>Total Paid</span>
                                    <span>${order.total_amount}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default OrderItem;
