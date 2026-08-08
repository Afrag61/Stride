interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    Icon?: React.ReactNode;
    error?: string;
}

const CheckoutInput: React.FC<Props> = ({
    label,
    Icon,
    error,
    required,
    ...props
}) => {
    const inputBaseClass =
        "block w-full rounded-lg bg-white px-3.5 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white outline-none focus:border-primary-500 dark:focus:border-primary-500 focus:ring-2 focus:ring-primary-500 focus:ring-offset-1 dark:focus:ring-offset-gray-900 transition-all";

    const inputErrorClass =
        "block w-full rounded-lg bg-white px-3.5 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 border border-red-400 dark:border-red-500 dark:bg-gray-800 dark:text-white outline-none focus:border-red-500 dark:focus:border-red-500 focus:ring-2 focus:ring-red-500 focus:ring-offset-1 dark:focus:ring-offset-gray-900 transition-all";

    return (
        <div>
            <label className="block text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                {label} {required && <span className="text-red-600">*</span>}
            </label>
            <div className="relative">
                {Icon}
                <input
                    {...props}
                    className={`${Icon && "pl-9"} ${error ? inputErrorClass : inputBaseClass}`}
                />
            </div>
            {error && <p className="text-xs text-red-500 mt-0.5">{error}</p>}
        </div>
    );
};

export default CheckoutInput;
