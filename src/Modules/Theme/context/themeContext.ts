"use client";

import { createContext } from "react";
import { Theme, type ThemeContextState } from "../types";

const initialState: ThemeContextState = {
    theme: Theme.SYSTEM,
    setTheme: () => null,
};

const ThemeContext = createContext<ThemeContextState>(initialState);

export default ThemeContext;
