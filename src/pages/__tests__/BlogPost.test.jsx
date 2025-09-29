import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter, Routes, Route } from "react-router-dom";

import BlogPost from "../BlogPost";

describe("BlogPost component", () => {
  test("renders an existing post (pool-maintenance-tips-spring)", () => {
    render(
      <MemoryRouter initialEntries={["/posts/pool-maintenance-tips-spring"]}>
        <Routes>
          <Route path="/posts/:slug" element={<BlogPost />} />
        </Routes>
      </MemoryRouter>
    );

    // Title, author and some content should be visible
    expect(
      screen.getByRole("heading", {
        name: /Essential Pool Maintenance Tips for Spring Opening/i,
      })
    ).toBeInTheDocument();
    expect(screen.getByText(/By Mike Johnson/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Spring is here, and it's time to get your pool ready/i)
    ).toBeInTheDocument();

    // Back links to blog exist
    expect(
      screen.getAllByRole("link", { name: /back to blog|back to all posts/i })
        .length
    ).toBeGreaterThan(0);
  });

  test("renders Post Not Found for unknown slug", () => {
    render(
      <MemoryRouter initialEntries={["/posts/does-not-exist"]}>
        <Routes>
          <Route path="/posts/:slug" element={<BlogPost />} />
        </Routes>
      </MemoryRouter>
    );

    expect(
      screen.getByRole("heading", { name: /Post Not Found/i })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/The blog post you're looking for doesn't exist/i)
    ).toBeInTheDocument();

    // should provide a link back to /blog
    const backLink = screen.getByRole("link", { name: /← Back to Blog/i });
    expect(backLink).toHaveAttribute("href", "/blog");
  });
});
