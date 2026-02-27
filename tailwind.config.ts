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
                tan: "#b89364",
                "tan-dark": "#a08154",
                cream: "#f7f4f0",
                earth: "#4a3b2b",
                dark: "#1a1a1a",
                muted: "#8c8c8c",
            },
            fontFamily: {
                playfair: ["var(--font-playfair)", "serif"],
                outfit: ["var(--font-inter)", "sans-serif"],
            },
            maxWidth: {
                "8xl": "88rem",
            },
            animation: {
                marquee: 'marquee 25s linear infinite',
            },
            keyframes: {
                marquee: {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-100%)' },
                },
            },
        },
    },
    plugins: [],
};

export default config;
