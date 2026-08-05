"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ThemeContextProvider from "@/Modules/Theme/components/theme-provider";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "@/Redux";
import AuthProvider from "./Modules/Auth/Context/AuthProvider";

gsap.registerPlugin(useGSAP);

interface ProvidersProps {
    children: React.ReactNode;
}

const Providers: React.FC<ProvidersProps> = ({ children }) => {
    return (
        <ThemeContextProvider>
            <AuthProvider>
                <Provider store={store}>
                    <PersistGate loading={null} persistor={persistor}>
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
                    </PersistGate>
                </Provider>
            </AuthProvider>
        </ThemeContextProvider>
    );
};

export default Providers;
