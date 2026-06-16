"use client";

import { Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "../hooks/useTheme";
import { Theme } from "../types";

const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        if (theme === Theme.LIGHT) setTheme(Theme.DARK);
        else if (theme === Theme.DARK) setTheme(Theme.SYSTEM);
        else setTheme(Theme.LIGHT);
    };

    const Icon =
        theme === Theme.LIGHT ? Moon : theme === Theme.DARK ? Monitor : Sun;

    return (
        <button
            onClick={toggleTheme}
            className="rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 p-2 cursor-pointer transition-colors"
            title={`Current theme: ${theme}. Click to switch.`}
            aria-label="Toggle theme"
        >
            <Icon className="h-5 w-5" />
        </button>
    );
};

export default ThemeToggle;
