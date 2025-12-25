import { defineConfig } from "vite";
import { templateCompilerOptions } from "@tresjs/core";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

export default defineConfig({
  resolve: {
    alias: {
      "#": resolve(__dirname, "lib"),
    },
  },
  plugins: [
    vue({
      ...templateCompilerOptions,
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "lib/index.ts"),
      name: "SVI",
      formats: ["es", "umd"],
      fileName: (format) => `svi.${format === "es" ? "mjs" : "js"}`,
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
