import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "3%",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        "custom-font-figtree": ["FigTree", "sans-serif"],
      },
      colors: {
        "custom-teal": "#008E97",
        "custom-black": "#191A21",
      },
      grayscale: {
        30: "30%",
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
