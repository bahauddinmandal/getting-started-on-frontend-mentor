import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  base: "./",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        project1: resolve(__dirname, "qr-code-component/index.html"),
      },
    },
  },
});
