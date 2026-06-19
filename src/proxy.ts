import { env } from "@/lib/env";
import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

export const proxy = async (request: NextRequest) => {
    let response = NextResponse.next({
        request: {
            headers: request.headers,
        },
    });

    const supabase = createServerClient(
        env.NEXT_PUBLIC_SUPABASE_URL,
        env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY,
        {
            cookies: {
                getAll() {
                    return request.cookies.getAll();
                },
                setAll(cookiesToSet) {
                    cookiesToSet.forEach(({ name, value, options }) =>
                        response.cookies.set(name, value, options),
                    );
                },
            },
        },
    );

    const {
        data: { user },
    } = await supabase.auth.getUser();

    const protectedRoutes = ["/account", "/wishlist", "/cart"];

    const isProtectedRoute = protectedRoutes.some((route) =>
        request.nextUrl.pathname.startsWith(route),
    );

    if (isProtectedRoute && !user) {
        const loginUrl = new URL("/login", request.url);

        loginUrl.searchParams.set("next", request.nextUrl.pathname);

        return NextResponse.redirect(loginUrl);
    }

    if (
        (request.nextUrl.pathname === "/login" ||
            request.nextUrl.pathname === "/register") &&
        user
    ) {
        return NextResponse.rewrite(new URL("/", request.url));
    }

    return response;
};

export const config = {
    matcher: [
        "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
    ],
};
