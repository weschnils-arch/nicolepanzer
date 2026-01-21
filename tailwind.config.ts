import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#F6F3EA",
        text: "#1E2A24",
        muted: "#6B7A71",
        accent: "#2F5B45",
        gold: "#C9A24A",
        card: "rgba(255, 255, 255, 0.72)",
      },
      fontFamily: {
        serif: ['"Playfair Display"', "serif"],
        sans: ['"Inter"', "sans-serif"],
        bodoni: ['"Bodoni Moda"', "serif"],
      },
      borderRadius: {
        card: "24px",
      },
      boxShadow: {
        soft: "0 2px 8px rgba(0, 0, 0, 0.04)",
        card: "0 4px 16px rgba(0, 0, 0, 0.06)",
      },
    },
  },
  plugins: [],
};
export default config;

