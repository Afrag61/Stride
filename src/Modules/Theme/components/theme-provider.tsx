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
    const [theme, setTheme] = useState<Theme>(defaultTheme);

    useEffect(() => {
        const root = document.documentElement;
        root.classList.add("no-transition");

        const stored = localStorage.getItem(storageKey) as Theme;
        if (stored) setTheme(stored);

        requestAnimationFrame(() => {
            root.classList.remove("no-transition");
        });
    }, []);

    useEffect(() => {
        const root = window.document.documentElement;

        root.classList.remove("light", "dark");

        if (theme === Theme.SYSTEM) {
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
