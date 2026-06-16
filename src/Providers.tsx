import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ThemeContextProvider from "@/Modules/Theme/components/theme-provider";
import { Toaster } from "react-hot-toast";

gsap.registerPlugin(useGSAP);

interface ProvidersProps {
    children: React.ReactNode;
}

const Providers: React.FC<ProvidersProps> = ({ children }) => {
    return (
        <ThemeContextProvider>
            <Toaster
                position="bottom-right"
                toastOptions={{
                    style: {
                        background: "var(--card-color)",
                        color: "var(--text-color)",
                        border: "1px solid var(--border-color)",
                    },
                }}
            />
            {children}
        </ThemeContextProvider>
    );
};

export default Providers;
