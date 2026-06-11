import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: "class",
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            animation: {
                float: "float 5s ease-in-out infinite",
            },
            keyframes: {
                float: {
                    "0%": {
                        transform: "translateY(0px)",
                    },
                    "50%": {
                        transform: "translateY(-20px)",
                    },
                    "100%": {
                        transform: "translateY(0px)",
                    },
                },
            },
        },
    },
};

export default config;
