import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { vi } from "vitest";

// Mock the ThemeContext hook used by ThemeToggle.
// Path is relative to this test file and should resolve to src/contexts/ThemeContext
vi.mock("../../contexts/ThemeContext", () => {
  return {
    useTheme: () => ({
      theme: "light",
      toggleTheme: mockToggle,
      isDark: false,
    }),
  };
});

// create the mock after vi.mock so it's available in the mock implementation
const mockToggle = vi.fn();

import ThemeToggle from "../ThemeToggle";

describe("ThemeToggle", () => {
  beforeEach(() => {
    mockToggle.mockClear();
  });

  test("renders button with correct aria-label and calls toggleTheme on click", () => {
    render(<ThemeToggle />);
    const btn = screen.getByRole("button", { name: /switch to dark mode/i });
    expect(btn).toBeInTheDocument();

    fireEvent.click(btn);
    expect(mockToggle).toHaveBeenCalledTimes(1);
  });
});
