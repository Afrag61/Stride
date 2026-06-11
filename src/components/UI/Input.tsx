interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    Icon?: React.ReactNode;
}

const Input: React.FC<Props> = ({ Icon, ...props }) => {
    if (Icon) {
        return (
            <div className="relative">
                {Icon}
                <input
                    {...props}
                    className="transition-all duration-200 w-full rounded-xl border border-gray-200 bg-gray-50 py-4 pl-12 pr-4 text-gray-900 placeholder:text-gray-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:border-primary-500 dark:focus:ring-primary-500 ring-offset-2 ring-offset-white dark:ring-offset-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                />
            </div>
        );
    }

    return (
        <input
            className="transition-all duration-200 flex-1 rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:border-primary-500 dark:focus:ring-primary-500 ring-offset-2 ring-offset-white dark:ring-offset-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
            {...props}
        />
    );
};

export default Input;
