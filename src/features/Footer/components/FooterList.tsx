import Link from "next/link";

interface Props {
    list: Array<{ name: string; href: string }>;
    title: string;
}

const FooterList: React.FC<Props> = ({ list, title }) => {
    return (
        <div>
            <h4 className="font-semibold text-gray-900 dark:text-white">
                {title}
            </h4>
            <ul className="mt-4 space-y-3">
                {list.map((link) => (
                    <li key={link.name}>
                        <Link
                            href={link.href}
                            className="text-sm text-gray-600 transition-all duration-300 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-600"
                        >
                            {link.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FooterList;
