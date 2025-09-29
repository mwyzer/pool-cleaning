import React from "react";
import {
  render,
  screen,
  within,
  fireEvent,
  waitFor,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import { vi } from "vitest";

import BlogPage from "../BlogPage";

describe("BlogPage", () => {
  test("renders main title and subtitle (scoped to blog section)", () => {
    const { container } = render(
      <MemoryRouter>
        <BlogPage />
      </MemoryRouter>
    );

    const blogSection =
      container.querySelector("section#blog-page") || container;
    const s = within(blogSection);

    // target the H1 title to avoid matching the secondary H2
    expect(
      s.getByText(/Pool Care Blog/i, { selector: "h1" })
    ).toBeInTheDocument();
    expect(s.getByText(/Expert tips, guides/i)).toBeInTheDocument();
  });

  test("smoke: blog-page id exists", () => {
    const { container } = render(
      <MemoryRouter>
        <BlogPage />
      </MemoryRouter>
    );
    expect(container.querySelector("#blog-page")).toBeInTheDocument();
  });
});

describe("BlogPage scroll behavior", () => {
  let scrollMock;

  beforeEach(() => {
    // mock scrollIntoView to observe calls
    scrollMock = vi
      .spyOn(HTMLElement.prototype, "scrollIntoView")
      .mockImplementation(() => {});
  });

  afterEach(() => {
    scrollMock.mockRestore();
    vi.clearAllMocks();
  });

  test("scrolls to target when location.state.scrollTo is provided", async () => {
    render(
      <MemoryRouter
        initialEntries={[
          { pathname: "/blog", state: { scrollTo: "blog-page" } },
        ]}
      >
        <BlogPage />
      </MemoryRouter>
    );

    await waitFor(
      () => {
        expect(scrollMock).toHaveBeenCalled();
      },
      { timeout: 1000 }
    );
  });

  test("scrolls to target when location.hash is provided", async () => {
    render(
      <MemoryRouter
        initialEntries={[{ pathname: "/blog", hash: "#blog-page" }]}
      >
        <BlogPage />
      </MemoryRouter>
    );

    await waitFor(
      () => {
        expect(scrollMock).toHaveBeenCalled();
      },
      { timeout: 1000 }
    );
  });
});
