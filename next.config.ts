import type { NextConfig } from "next";
const supabase_url = process.env.NEXT_PUBLIC_SUPABASE_URL;

const nextConfig: NextConfig = {
    /* config options here */
    reactCompiler: true,
    allowedDevOrigins: ["192.168.1.3"],
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: new URL(supabase_url!).hostname,
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "lh3.googleusercontent.com",
                port: "",
                pathname: "/**",
            },
        ],
    },
};

export default nextConfig;
