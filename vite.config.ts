import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// Vite configuration for Habibi Compiler V3
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "."),
    },
  },
  css: {
    postcss: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});