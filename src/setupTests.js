// setupTests for Vitest / Testing Library
import "@testing-library/jest-dom";

// Basic global fetch mock to prevent tests from attempting real network requests (safe fallback)
if (typeof global.fetch === "undefined") {
  global.fetch = () =>
    Promise.resolve({ ok: true, text: () => Promise.resolve("") });
}

// add any global test setup or mocks below if needed
