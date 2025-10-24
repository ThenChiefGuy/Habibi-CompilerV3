import type { Config } from "tailwindcss";

// Tailwind configuration for Habibi Compiler V3.
export default {
  darkMode: ["class"],
  // Explizite Pfade: nur eigene Dateien scannen, nicht node_modules
  content: [
    "./index.html",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./hooks/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
