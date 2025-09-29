import React from "react";
import { render, screen, fireEvent, within } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";

import BlogPage from "../BlogPage";

describe("BlogPage", () => {
  test("renders header, filters and posts", () => {
    const { container } = render(
      <MemoryRouter>
        <BlogPage />
      </MemoryRouter>
    );

    // scope to the blog section to avoid duplicate matches elsewhere in the page
    const blogSection =
      container.querySelector("section#blog-page") || container;
    const s = within(blogSection);
    // target the main page title (h1) to avoid matching the secondary h2
    expect(
      s.getByText(/Pool Care Blog/i, { selector: "h1" })
    ).toBeInTheDocument();
    // subtitle / description check
    expect(s.getByText(/Expert tips, guides/i)).toBeInTheDocument();

    // filter buttons exist
    expect(screen.getByRole("button", { name: "All" })).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Maintenance" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Water Chemistry" })
    ).toBeInTheDocument();

    // initial posts count
    expect(container.querySelectorAll(".blog-card").length).toBe(4);

    // a post link exists and has expected href
    const firstReadMore = screen.getAllByText(/Read More/)[0].closest("a");
    expect(firstReadMore).toHaveAttribute("href");
    expect(firstReadMore.getAttribute("href")).toMatch(/^\/blog\/.+/);
  });

  test("filters posts by category", () => {
    const { container } = render(
      <MemoryRouter>
        <BlogPage />
      </MemoryRouter>
    );

    // click Maintenance filter -> only posts in Maintenance category remain
    fireEvent.click(screen.getByRole("button", { name: "Maintenance" }));
    const cardsAfter = container.querySelectorAll(".blog-card");
    expect(cardsAfter.length).toBeGreaterThan(0);
    // all visible cards should include the Maintenance category label
    cardsAfter.forEach((card) => {
      expect(card.querySelector(".category").textContent).toBe("Maintenance");
    });

    // go back to All -> all posts visible
    fireEvent.click(screen.getByRole("button", { name: "All" }));
    expect(container.querySelectorAll(".blog-card").length).toBe(4);
  });
});
