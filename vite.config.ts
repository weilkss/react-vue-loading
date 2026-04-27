import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: "lib",
    minify: "esbuild",
    lib: {
      entry: "./src/index.ts",
      name: "RVLoading",
      formats: ["es", "umd"],
    },
  },
});
