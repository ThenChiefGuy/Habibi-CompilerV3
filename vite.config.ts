import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

// Vite configuration for Habibi Compiler V3
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "."),
    },
  },
  // PostCSS‑Plugins über ESM importieren – keine require() Aufrufe mehr!
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
