import type { Config } from "tailwindcss";

export default {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                "dark-green": "#133216",
                "green-primary": "#77892B",
            },
            backgroundImage: {
                "hero-bg": "url('/hero-bg.png')",
            },
            fontFamily: {
                "tiro-bangla": ['"Tiro Bangla"', "serif"],
            },
        },
    },
    plugins: [],
} satisfies Config;
