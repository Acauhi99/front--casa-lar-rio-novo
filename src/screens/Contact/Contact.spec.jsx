import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Contact } from "./Contact";

vi.mock('../../components/Map/Map', () => ({
  default: () => <div data-testid="map">Map Component</div>
}));

describe("Contact Component", () => {
  it("should render without crashing", () => {
    const { container } = render(<Contact />);
    expect(container).toBeDefined();
  });

  it("should display the main header", () => {
    render(<Contact />);
    expect(screen.getByText("Fale Conosco")).toBeInTheDocument();
  });

  it("should display the subheader", () => {
    render(<Contact />);
    expect(screen.getByText("Envie sua mensagem")).toBeInTheDocument();
  });

  it("should display the phone number", () => {
    render(<Contact />);
    expect(screen.getByText("32 99992-0658")).toBeInTheDocument();
  });

  it("should display the address", () => {
    render(<Contact />);
    const addressText = screen.getByText((content) => 
      content.includes("CEP 36150") && 
      content.includes("Rua Jacob da Paixao, 115") && 
      content.includes("Rio Novo - MG")
    );
    expect(addressText).toBeInTheDocument();
  });

  it("should have a location button", () => {
    render(<Contact />);
    expect(screen.getByRole("button", { name: /location/i })).toBeInTheDocument();
  });
});