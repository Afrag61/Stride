import { Link } from "@/components/UI/Link";
import { FiZap } from "react-icons/fi";

interface Props {
    onClick?: () => void;
}

const Logo: React.FC<Props> = ({ onClick }) => {
    return (
        <Link onClick={onClick} href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-primary-500 to-primary-600">
                <FiZap className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold font-display dark:text-white text-black">
                Stride
            </span>
        </Link>
    );
};

export default Logo;
