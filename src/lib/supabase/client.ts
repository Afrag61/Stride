import { clientEnv } from "@/lib/env";
import { createBrowserClient } from "@supabase/ssr";

export const supabase = createBrowserClient(
    clientEnv.NEXT_PUBLIC_SUPABASE_URL,
    clientEnv.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY,
);
