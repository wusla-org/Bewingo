import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                forest: "#0B221A",
                emerald: "#1B4332",
                sage: "#2D6A4F",
                gold: "#C9963A",
                "gold-light": "#E8B84B",
                cream: "#FDFCF8",
                muted: "#6B705C",
            },
            fontFamily: {
                playfair: ["var(--font-playfair)", "serif"],
                outfit: ["var(--font-inter)", "sans-serif"],
            },
            maxWidth: {
                "8xl": "88rem",
            },
        },
    },
    plugins: [],
};

export default config;
