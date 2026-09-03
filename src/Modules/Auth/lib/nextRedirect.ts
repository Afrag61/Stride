const COOKIE_NAME = "next_redirect";

const getSafeRedirect = (value: string | null) => {
    if (value && value.startsWith("/") && !value.startsWith("//")) {
        return value;
    }
    return "/";
};

export const setStoredRedirect = (value: string) => {
    if (typeof document === "undefined") return;

    const safeRedirect = getSafeRedirect(value);

    document.cookie = `${COOKIE_NAME}=${encodeURIComponent(safeRedirect)}; path=/; max-age=600; sameSite=lax`;

    return;
};

export const getStoredRedirect = (): string => {
    if (typeof document === "undefined") return "/";

    const match = document.cookie.match(
        new RegExp(`(?:^|; )${COOKIE_NAME}=([^;]*)`),
    );

    const value = match ? decodeURIComponent(match[1]) : null;

    return getSafeRedirect(value);
};

export const clearStoredRedirect = () => {
    if (typeof document === "undefined") return;
    document.cookie = `${COOKIE_NAME}=; path=/; max-age=0`;
};
