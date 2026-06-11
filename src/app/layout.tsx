import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";

import "./globals.css";
import Providers from "@/Providers";
import { ProgressBar } from "@/components/UI/ProgressBar";
import Header from "@/features/Header";
import Footer from "@/features/Footer";

export const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

export const outfit = Outfit({
    variable: "--font-outfit",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Stride - Step into Style",
    description:
        "Premium footwear for every step of your journey. From athletic performance to everyday comfort.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={`${inter.variable} ${outfit.variable} h-full antialiased`}
        >
            <body
                suppressHydrationWarning
                className="min-h-screen bg-background text-foreground"
            >
                <ProgressBar />
                <div id="modal-root">
                    <div id="mobile-nav" className="sm:hidden"></div>
                </div>
                <Providers>
                    <Header />
                    <main>{children}</main>
                    <Footer />
                </Providers>
            </body>
        </html>
    );
}
