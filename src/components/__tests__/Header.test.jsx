// filepath: c:\Users\unser\pool-cleaning-service-website\src\components\__tests__\Header.test.jsx
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import { vi } from "vitest";

// mock ThemeToggle to keep test focused
vi.mock("../ThemeToggle", () => {
  return {
    default: () => <div data-testid="theme-toggle" />,
  };
});

import Header from "../Header";

describe("Header", () => {
  test("renders main nav items and logo", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Services")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Blog")).toBeInTheDocument();
    expect(screen.getByText("Get Quote")).toBeInTheDocument();
    expect(screen.getByTestId("theme-toggle")).toBeInTheDocument();

    // check hrefs exist on link elements
    const home = screen.getByText("Home").closest("a");
    const blog = screen.getByText("Blog").closest("a");
    expect(screen.getByText("Services").closest("a")).toHaveAttribute(
      "href",
      "/#services"
    );
    expect(screen.getByText("About").closest("a")).toHaveAttribute(
      "href",
      "/#about"
    );
    expect(screen.getByText("Blog").closest("a")).toHaveAttribute(
      "href",
      "/blog"
    );
    expect(screen.getByText("Get Quote").closest("a")).toHaveAttribute(
      "href",
      "/#contact"
    );
  });
});
