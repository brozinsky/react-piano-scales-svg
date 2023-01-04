import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@/": path.join(__dirname, "src/"),
      "@/utils": path.join(__dirname, "src/utils"),
      "@/components": path.join(__dirname, "src/components"),
      "@/modules": path.join(__dirname, "src/components/modules"),
      "@/contexts": path.join(__dirname, "src/contexts"),
    },
  },
});
