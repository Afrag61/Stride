import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

const getSafeRedirect = (redirectTo: string | null) => {
    if (
        redirectTo &&
        redirectTo.startsWith("/") &&
        !redirectTo.startsWith("//")
    ) {
        return redirectTo;
    }
    return "/";
};

export async function GET(request: Request) {
    const { searchParams, origin } = new URL(request.url);
    const code = searchParams.get("code");

    const cookieStore = await cookies();
    const next = getSafeRedirect(
        cookieStore.get("next_redirect")?.value ?? null,
    );

    if (code) {
        const supabase = await createClient();
        const { error } = await supabase.auth.exchangeCodeForSession(code);

        if (error) {
            return NextResponse.redirect(
                `${origin}/login?error=auth_callback_failed`,
            );
        }
    }

    const response = NextResponse.redirect(`${origin}${next}`);
    response.cookies.delete("next_redirect");
    return response;
}
