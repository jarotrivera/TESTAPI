import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";


export default defineConfig({
  base: "https://jarotrivera.github.io/TESTAPI/",
  plugins: [react(), eslint()],
});
