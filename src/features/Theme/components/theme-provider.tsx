"use client";

import { useEffect, useState } from "react";
import { Theme, type ThemeContextProviderProps } from "../types";
import themeContext from "../context/themeContext";

function ThemeContextProvider({
    children,
    defaultTheme = Theme.SYSTEM,
    storageKey = "stride-theme",
    ...props
}: ThemeContextProviderProps) {
    const [theme, setTheme] = useState<Theme>(() =>
        typeof window !== "undefined"
            ? (localStorage.getItem(storageKey) as Theme) || defaultTheme
            : defaultTheme,
    );

    useEffect(() => {
        const root = window.document.documentElement;

        root.classList.remove("light", "dark");

        if (theme === "system") {
            const systemTheme = window.matchMedia(
                "(prefers-color-scheme: dark)",
            ).matches
                ? "dark"
                : "light";

            root.classList.add(systemTheme);
            return;
        }

        root.classList.add(theme);
    }, [theme]);

    const value = {
        theme,
        setTheme: (theme: Theme) => {
            if (typeof window === "undefined") return;
            localStorage.setItem(storageKey, theme);
            setTheme(theme);
        },
    };

    return (
        <themeContext.Provider {...props} value={value}>
            {children}
        </themeContext.Provider>
    );
}

export default ThemeContextProvider;
