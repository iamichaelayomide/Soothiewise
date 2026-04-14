import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./styles/**/*.css",
  ],
  theme: {
    extend: {
      colors: {
        yellow: { DEFAULT: "#FFE600", dark: "#D4C000" },
        ink: { DEFAULT: "#1C1C14", light: "#3A3A2E" },
        white: "#FFFFFF",
        danger: "#FF3B30",
        safe: "#2D6A4F",
        amber: "#F0A500",
      },
      boxShadow: {
        brutalist: "6px 6px 0px 0px #1C1C14",
        "brutalist-hover": "10px 10px 0px 0px #1C1C14",
        "brutalist-none": "0px 0px 0px 0px #1C1C14",
      },
      borderRadius: {
        xl2: "24px",
        xl: "16px",
        lg: "12px",
        md: "8px",
      },
      fontFamily: {
        display: ["Clash Display", "Space Grotesk", "sans-serif"],
        body: ["Satoshi", "DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
