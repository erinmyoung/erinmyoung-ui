/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { peerDependencies } from "./package.json";

export default defineConfig({
  plugins: [
    react(),
    dts({
      include: ["src"],
      exclude: [
        "**/*.test.*",
        "**/*.stories.*",
        "**/__test__/**",
        "**/__docs__/**",
      ],
      outDir: "dist",
      insertTypesEntry: true,
      tsconfigPath: "./tsconfig.build.json",
    }),
  ],
  build: {
    lib: {
      entry: "./src/index.ts",
      name: "erinmyoung-ui",
      fileName: (format) => `index.${format}.js`,
      formats: ["cjs", "es"],
    },
    rollupOptions: {
      external: [
        ...Object.keys(peerDependencies),
        "styled-components",
        "framer-motion",
      ],
    },
    sourcemap: true,
    emptyOutDir: true,
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./setupTests.ts",
  },
});
