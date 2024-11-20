import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import "@testing-library/jest-dom";
import Banner from "./Banner";

// Mock the Swiper components
vi.mock("swiper/react", () => ({
  Swiper: ({ children }) => <div data-testid="swiper">{children}</div>,
  SwiperSlide: ({ children }) => (
    <div data-testid="swiper-slide">{children}</div>
  ),
}));

// Mock the Swiper modules
vi.mock("swiper/modules", () => ({
  Autoplay: vi.fn(),
  Pagination: vi.fn(),
  Navigation: vi.fn(),
}));

describe("Banner Component", () => {
  it("renders the Banner component with correct number of slides", () => {
    render(<Banner />);
    const slides = screen.getAllByTestId("swiper-slide");
    expect(slides.length).toBe(3);
  });

  it("renders the correct content for each slide", () => {
    render(<Banner />);
    const slides = screen.getAllByTestId("swiper-slide");

    const expectedContent = [
      {
        title: "Transforme Vidas",
        description: "Apoie a nossa missão de cuidar de quem mais precisa.",
        primaryButton: "Saiba Mais",
        secondaryButton: "Doar Agora",
      },
      {
        title: "Cuidados Humanizados",
        description: "Oferecemos cuidado e acolhimento com amor e dedicação.",
        primaryButton: "Nossos Serviços",
        secondaryButton: "Doar Agora",
      },
      {
        title: "Juntos Somos Mais Fortes",
        description: "Ajude a construir um futuro melhor para nossos idosos.",
        primaryButton: "Conheça Mais",
        secondaryButton: "Doar Agora",
      },
    ];

    slides.forEach((slide, index) => {
      const content = expectedContent[index];
      expect(slide).toHaveTextContent(content.title);
      expect(slide).toHaveTextContent(content.description);
      expect(slide).toHaveTextContent(content.primaryButton);
      expect(slide).toHaveTextContent(content.secondaryButton);
    });
  });

  it("renders buttons with correct styles", () => {
    render(<Banner />);
    const primaryButtons = screen.getAllByText(
      /Saiba Mais|Nossos Serviços|Conheça Mais/
    );
    const secondaryButtons = screen.getAllByText("Doar Agora");

    primaryButtons.forEach((button) => {
      expect(button).toHaveClass("MuiButton-contained");
      expect(button).toHaveClass("MuiButton-sizeLarge");
      expect(button).toHaveClass("MuiButton-colorPrimary");
    });

    secondaryButtons.forEach((button) => {
      expect(button).toHaveClass("MuiButton-outlined");
      expect(button).toHaveClass("MuiButton-sizeLarge");
    });
  });
});
