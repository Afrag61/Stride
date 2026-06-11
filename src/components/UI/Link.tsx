"use client";

import NextLink from "next/link";
import nprogress from "nprogress";
import { forwardRef, useCallback } from "react";
import type { ComponentProps } from "react";

function resolveHref(href: ComponentProps<typeof NextLink>["href"]): string {
    if (typeof href === "string") return href;
    if (!href) return "";
    const search = href.query
        ? "?" + new URLSearchParams(href.query as Record<string, string>).toString()
        : "";
    return (href.pathname || "") + search;
}

export const Link = forwardRef<
    HTMLAnchorElement,
    ComponentProps<typeof NextLink>
>(({ onNavigate, ...props }, ref) => {
    const handleNavigate = useCallback(
        (event: { preventDefault: () => void }) => {
            const target = resolveHref(props.href);
            const current = window.location.pathname + window.location.search;
            if (target !== current) {
                nprogress.start();
            }
            onNavigate?.(event);
        },
        [props.href, onNavigate],
    );

    return (
        <NextLink ref={ref} onNavigate={handleNavigate} {...props} />
    );
});

Link.displayName = "Link";
