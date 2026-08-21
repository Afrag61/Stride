import { Star } from "lucide-react";
import Image from "next/image";

interface Props {
    title: string;
    name: string;
    comment: string;
    rate: number;
    image: string;
}

const CustomerCard: React.FC<Props> = ({
    name,
    comment,
    rate,
    image,
    title,
}) => {
    const stars = Array.from({ length: rate }, (_, i) => (
        <Star key={i} className="h-4 w-4 text-yellow-400" fill="currentColor" />
    ));

    return (
        <div className="rounded-2xl bg-gray-800/50 p-8">
            <div className="flex gap-1">{stars}</div>
            <blockquote className="mt-6 text-lg text-gray-300">
                &ldquo;{comment}&rdquo;
            </blockquote>
            <div className="mt-8 flex items-center gap-4">
                <Image
                    width={100}
                    height={100}
                    src={image}
                    alt={name}
                    className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                    <p className="font-semibold text-white">{name}</p>
                    <p className="text-sm text-gray-500">{title}</p>
                </div>
            </div>
        </div>
    );
};

export default CustomerCard;
