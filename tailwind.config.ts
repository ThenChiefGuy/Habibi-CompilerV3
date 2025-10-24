import type { Config } from "tailwindcss";

// Tailwind configuration for Habibi Compiler V3.  This file tells Tailwind
// where to look for class names so unused styles can be purged in production.
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;