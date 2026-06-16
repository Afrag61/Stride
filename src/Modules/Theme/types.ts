export enum Theme {
    LIGHT = "light",
    DARK = "dark",
    SYSTEM = "system",
}

export interface ThemeContextProviderProps {
    children: React.ReactNode;
    defaultTheme?: Theme;
    storageKey?: string;
}

export interface ThemeContextState {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}
