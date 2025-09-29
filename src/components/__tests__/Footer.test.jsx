import React from "react";
import { render, screen, fireEvent, within } from "@testing-library/react";
import "@testing-library/jest-dom";
import { vi } from "vitest";

import Footer from "../Footer";

describe("Footer / GoogleMap", () => {
  const originalOpen = global.open;

  beforeEach(() => {
    global.open = vi.fn();
  });

  afterEach(() => {
    global.open = originalOpen;
    vi.clearAllMocks();
  });

  test("renders footer sections and iframe map", () => {
    const { container } = render(<Footer />);

    // scope queries to the footer element to avoid duplicate matches elsewhere
    const footer = container.querySelector("footer");
    const f = within(footer);

    // target the H3 site title (there is also an H4 with the same text)
    expect(
      f.getByText("AquaClean Pool Services", { selector: "h3" })
    ).toBeInTheDocument();
    expect(f.getByText(/Professional pool cleaning/i)).toBeInTheDocument();
    expect(f.getByText("Find Us")).toBeInTheDocument();

    const iframe = f.getByTitle(
      /Map showing location of AquaClean Pool Services/i
    );
    expect(iframe).toBeInTheDocument();
    expect(iframe).toHaveAttribute("src");
    expect(iframe.getAttribute("src")).toContain("maps.google.com");
  });

  test("shows loading spinner then hides after iframe load, and opens Google Maps on buttons", () => {
    const { container } = render(<Footer />);

    const footer = container.querySelector("footer");
    const f = within(footer);

    // loading indicator initially visible inside the footer
    expect(f.getByText(/Loading map.../i)).toBeInTheDocument();

    const iframe = f.getByTitle(
      /Map showing location of AquaClean Pool Services/i
    );
    // avoid external network by overriding src and dispatching load
    iframe.src = "about:blank";
    fireEvent.load(iframe);
    expect(f.queryByText(/Loading map.../i)).not.toBeInTheDocument();

    const getDirectionsBtn = f.getByRole("button", {
      name: /Get directions in Google Maps/i,
    });
    fireEvent.click(getDirectionsBtn);
    expect(global.open).toHaveBeenCalled();
    const calledUrl1 = global.open.mock.calls[0][0];
    expect(calledUrl1).toContain(
      "https://www.google.com/maps/search/?api=1&query="
    );

    const fallbackBtn = f.getByText(/View on Google Maps/i);
    fireEvent.click(fallbackBtn);
    expect(global.open).toHaveBeenCalledTimes(2);
    const calledUrl2 = global.open.mock.calls[1][0];
    expect(calledUrl2).toContain(
      "https://www.google.com/maps/search/?api=1&query="
    );
  });
});
