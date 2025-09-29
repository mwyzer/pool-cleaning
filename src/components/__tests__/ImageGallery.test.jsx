import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import ImageGallery from "../ImageGallery";

describe("ImageGallery component", () => {
  test("renders gallery header and filter buttons", () => {
    render(<ImageGallery />);
    expect(screen.getByText("Our Work Gallery")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "All" })).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Cleaning" })
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Service" })).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Maintenance" })
    ).toBeInTheDocument();
  });

  test("filters images by category (Cleaning)", () => {
    const { container } = render(<ImageGallery />);
    // initial items
    expect(container.querySelectorAll(".gallery-item").length).toBe(6);

    // click Cleaning filter
    fireEvent.click(screen.getByRole("button", { name: "Cleaning" }));

    // after filtering only cleaning items remain (ids 1 and 5 in sampleImages)
    expect(container.querySelectorAll(".gallery-item").length).toBe(2);
    expect(
      screen.getByText("Before & After: Weekly Cleaning Service")
    ).toBeInTheDocument();
    expect(screen.getByText("Perfect Water Quality")).toBeInTheDocument();
  });

  test("opens and closes lightbox when an image is clicked", () => {
    const { container } = render(<ImageGallery />);
    const galleryButtons = container.querySelectorAll(".gallery-image");
    expect(galleryButtons.length).toBeGreaterThan(0);

    // open lightbox for first image
    fireEvent.click(galleryButtons[0]);
    expect(container.querySelector(".lightbox-overlay")).toBeInTheDocument();
    // lightbox should show the image title
    expect(
      screen.getAllByText(
        /Before & After: Weekly Cleaning Service|Our Team at Work/
      ).length
    ).toBeGreaterThan(0);

    // close lightbox
    const closeBtn = container.querySelector(".lightbox-close");
    fireEvent.click(closeBtn);
    expect(container.querySelector(".lightbox-overlay")).toBeNull();
  });
});
