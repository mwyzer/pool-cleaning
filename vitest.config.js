import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "happy-dom", // changed from "jsdom"
    setupFiles: "src/setupTests.js",
    globals: true,
    watch: false,
    coverage: {
      reporter: ["text", "lcov"],
    },
  },
});
