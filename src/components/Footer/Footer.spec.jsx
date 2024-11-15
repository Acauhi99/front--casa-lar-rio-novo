// Footer.spec.js
import { render, screen } from "@testing-library/react";
import { describe, expect, it, beforeEach } from "vitest";
import { Footer } from "./Footer";

describe("Footer", () => {
  beforeEach(() => {
    render(<Footer />);
  });

  it("should render all main components", () => {
    // Test title and address
    expect(screen.getByText("Casa Lar Rio Novo")).toBeInTheDocument();
    expect(
      screen.getByText("Rua Jacob da Paixao, 115 Rio Novo - MG, 36.150-000")
    ).toBeInTheDocument();

    // Test social icons presence using MUI's default data-testid values
    expect(screen.getByTestId("InstagramIcon")).toBeInTheDocument();
    expect(screen.getByTestId("FacebookIcon")).toBeInTheDocument();
    expect(screen.getByTestId("WhatsAppIcon")).toBeInTheDocument();
  });

  it("should have correct social media links with proper attributes", () => {
    const instagramLink = screen.getByTestId("instagram-link");
    expect(instagramLink).toHaveAttribute(
      "href",
      "https://www.instagram.com/casalarderionovo/"
    );
    expect(instagramLink).toHaveAttribute("target", "_blank");
    expect(instagramLink).toHaveAttribute("rel", "noopener");

    const facebookLink = screen.getByTestId("facebook-link");
    expect(facebookLink).toHaveAttribute(
      "href",
      "https://www.facebook.com/ILPIcasalar/?locale=pt_BR"
    );
    expect(facebookLink).toHaveAttribute("target", "_blank");
    expect(facebookLink).toHaveAttribute("rel", "noopener");

    const whatsappLink = screen.getByTestId("whatsapp-link");
    expect(whatsappLink).toHaveAttribute(
      "href",
      "https://wa.me/5532999920658?text=Ol%C3%A1,%20vim%20atr%C3%A1ves%20do%20site%20e%20gostaria%20de%20informa%C3%A7%C3%B5es"
    );
    expect(whatsappLink).toHaveAttribute("target", "_blank");
    expect(whatsappLink).toHaveAttribute("rel", "noopener");
  });

  it("should have correct styling properties", () => {
    const footer = screen.getByRole("contentinfo");

    expect(footer).toHaveStyle({
      position: "fixed",
      bottom: "0",
      width: "100%",
    });
  });
});
