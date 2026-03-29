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
        bg: "#0a0a0a",
        surface: "#111111",
        surface2: "#1a1a1a",
        border: "#262626",
        text: "#e5e5e5",
        muted: "#a3a3a3",
        accent: "#22d3ee",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-fira-code)", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
