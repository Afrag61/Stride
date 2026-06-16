import Logo from "@/components/UI/Logo";
import {
    FaInstagram,
    FaFacebook,
    FaXTwitter,
    FaYoutube,
} from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";

const Brand = () => {
    return (
        <div>
            <Logo />
            <p className="mt-4 text-sm text-muted-foreground">
                Premium footwear for every step of your journey. From athletic
                performance to everyday comfort.
            </p>
            <div className="mt-6 flex gap-4">
                <a href="#">
                    <FaInstagram className="h-5 w-5 text-muted-foreground hover:text-primary-600 transition-colors" />
                </a>
                <a href="#">
                    <FaFacebook className="h-5 w-5 text-muted-foreground hover:text-primary-600 transition-colors" />
                </a>
                <a href="#">
                    <FaXTwitter className="h-5 w-5 text-muted-foreground hover:text-primary-600 transition-colors" />
                </a>
                <a href="#">
                    <FaYoutube className="h-5 w-5 text-muted-foreground hover:text-primary-600 transition-colors" />
                </a>
                <a href="#">
                    <FaTiktok className="h-5 w-5 text-muted-foreground hover:text-primary-600 transition-colors" />
                </a>
            </div>
        </div>
    );
};

export default Brand;
