import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  base: "sample.fluentemoji",
  build: {
    outDir: "dist"
  },
  plugins: [vue()]
});
