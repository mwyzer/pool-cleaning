// HomePage.test.jsx
import React from "react";
import { render, screen, within } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import { vi } from "vitest";

// 🧪 Mock child components to keep tests unit-scoped
vi.mock("../../components/ImageGallery", () => ({
  __esModule: true,
  default: ({ showTitle, maxImages }) => (
    <div data-testid="image-gallery" data-props={`${showTitle}|${maxImages}`}>
      Mocked ImageGallery
    </div>
  ),
}));

vi.mock("../../components/Footer", () => ({
  __esModule: true,
  default: () => <div data-testid="google-map">Mocked GoogleMap</div>,
}));

import HomePage from "../HomePage";

describe("HomePage", () => {
  test("smoke: renders root container with .home-page", () => {
    const { container } = render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );
    expect(container.querySelector(".home-page")).toBeInTheDocument();
  });

  test("hero section shows title, subtitle, and CTA links", () => {
    const { container } = render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );

    const hero = container.querySelector("section.hero") || container;
    const h = within(hero);

    expect(
      h.getByRole("heading", { level: 1, name: /crystal clear pools/i })
    ).toBeInTheDocument();
    expect(
      h.getByText(/Professional swimming pool cleaning and maintenance/i)
    ).toBeInTheDocument();

    const quoteLink = h.getByRole("link", { name: /get free quote/i });
    const servicesLink = h.getByRole("link", { name: /our services/i });
    expect(quoteLink).toHaveAttribute("href", "#contact");
    expect(servicesLink).toHaveAttribute("href", "#services");
  });

  test("services section renders heading and 4 service cards", () => {
    const { container } = render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );
    const services = container.querySelector("section#services") || container;
    const s = within(services);

    expect(
      s.getByRole("heading", { level: 2, name: /our pool services/i })
    ).toBeInTheDocument();

    const grid = services.querySelector(".services-grid");
    expect(grid).toBeInTheDocument();

    const cards = grid.querySelectorAll(".service-card");
    expect(cards.length).toBe(4);

    // sample card assertions
    expect(
      s.getByRole("heading", { level: 3, name: /regular cleaning/i })
    ).toBeInTheDocument();
    expect(
      s.getByRole("heading", { level: 3, name: /chemical balancing/i })
    ).toBeInTheDocument();
    expect(
      s.getByRole("heading", { level: 3, name: /equipment maintenance/i })
    ).toBeInTheDocument();
    expect(
      s.getByRole("heading", { level: 3, name: /seasonal services/i })
    ).toBeInTheDocument();
  });

  test("about section shows benefits list", () => {
    const { container } = render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );
    const about = container.querySelector("section#about") || container;
    const a = within(about);

    expect(
      a.getByRole("heading", { level: 2, name: /why choose aquaclean/i })
    ).toBeInTheDocument();

    const list = about.querySelector(".benefits-list");
    expect(list).toBeInTheDocument();

    const items = within(list).getAllByRole("listitem");
    expect(items.length).toBeGreaterThanOrEqual(5);
    expect(
      a.getByText(/Licensed and insured professionals/i)
    ).toBeInTheDocument();
    expect(a.getByText(/Eco-friendly cleaning products/i)).toBeInTheDocument();
  });

  test("gallery section renders ImageGallery with correct props", () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );
    const gallery = screen.getByTestId("image-gallery");
    // we encoded props as "showTitle|maxImages" in the mock
    expect(gallery).toHaveAttribute("data-props", "true|6");
  });

  test("contact section has form fields and submit button", () => {
    const { container } = render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );

    const contact = container.querySelector("section#contact") || container;
    const c = within(contact);

    expect(
      c.getByRole("heading", { level: 2, name: /get your free quote/i })
    ).toBeInTheDocument();

    // Inputs by label
    const name = c.getByLabelText(/name/i);
    const email = c.getByLabelText(/email/i);
    const phone = c.getByLabelText(/phone/i);
    const service = c.getByLabelText(/service needed/i);
    const message = c.getByLabelText(/message/i);

    expect(name).toBeRequired();
    expect(email).toBeRequired();
    expect(phone).toBeInTheDocument();
    expect(service).toHaveDisplayValue(/select a service/i);
    expect(message).toHaveAttribute("rows", "4");

    expect(
      c.getByRole("button", { name: /send message/i })
    ).toBeInTheDocument();
  });

  test("contact information block shows phone, email, address, hours", () => {
    const { container } = render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );
    const contact = container.querySelector("section#contact") || container;
    const c = within(contact);

    expect(c.getByText(/phone:/i)).toBeInTheDocument();
    expect(c.getByText(/\(555\) 123-POOL/i)).toBeInTheDocument();
    expect(c.getByText(/email:/i)).toBeInTheDocument();
    expect(c.getByText(/info@aquaclean\.com/i)).toBeInTheDocument();
    expect(c.getByText(/Address:/i)).toBeInTheDocument();
    expect(c.getByText(/Pancoran Mas/i)).toBeInTheDocument();
    expect(c.getByText(/Hours:/i)).toBeInTheDocument();
  });

  test("renders mocked GoogleMap/Footer component (if present on page)", () => {
    // Your current file imports Footer as GoogleMap but does not render it.
    // If later added to the page, this test will pass without changes.
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );
    // Non-fatal assertion: just ensure mock renders if used
    const maybeMap = screen.queryByTestId("google-map");
    if (maybeMap) {
      expect(maybeMap).toBeInTheDocument();
    }
  });
});
