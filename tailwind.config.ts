import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: "#1B2E4B",
        purple: "#6D28D9",
        lavender: "#EDE9FE",
        teal: "#2A9D8F",
        steel: "#3B82F6",
        ink: "#1E1B4B"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"]
      },
      boxShadow: {
        soft: "0 18px 45px rgba(27, 46, 75, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
