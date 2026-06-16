"use client";

import { use } from "react";
import ThemeContextProvider from "../context/themeContext";

export const useTheme = () => {
    const context = use(ThemeContextProvider);

    if (context === undefined)
        throw new Error("useTheme must be used within a ThemeProvider");

    return context;
};
