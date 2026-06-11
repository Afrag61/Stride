"use client";

import { usePathname, useSearchParams } from "next/navigation";
import nprogress from "nprogress";
import { useEffect, useRef } from "react";

nprogress.configure({
    parent: "#main-header",
    showSpinner: false,
    trickleSpeed: 200,
    minimum: 0.08,
});

export function ProgressBar() {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const prevPathname = useRef(pathname);
    const prevSearchParams = useRef(searchParams?.toString());

    useEffect(() => {
        const pathChanged = prevPathname.current !== pathname;
        const searchChanged = prevSearchParams.current !== searchParams?.toString();

        if (pathChanged || searchChanged) {
            nprogress.done();
            prevPathname.current = pathname;
            prevSearchParams.current = searchParams?.toString();
        }
    }, [pathname, searchParams]);

    return null;
}
