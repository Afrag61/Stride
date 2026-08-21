interface Props {
    size?: number;

    className?: string;
    strokeWidth?: number;
}

const Loader: React.FC<Props> = ({
    size = 50,
    className = "",
    strokeWidth = 3,
}) => {
    return (
        <svg
            width={size}
            height={size}
            className={`animate-spin-slow ${className}`}
            viewBox="0 0 50 50"
        >
            <circle
                cx="25"
                cy="25"
                r="20"
                fill="none"
                strokeWidth={strokeWidth}
                className={`stroke-primary-500 animate-spinner-path`}
                strokeLinecap="round"
            />
        </svg>
    );
};

export default Loader;
