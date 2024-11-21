import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Donations } from "./Donations";
import "@testing-library/jest-dom"; // Assegura as matchers do jest-dom

describe("Donations Component", () => {
  it("should render without crashing", () => {
    const { container } = render(<Donations />);
    expect(container).toBeDefined();
  });

  it("should display the inspirational quote", () => {
    render(<Donations />);
    expect(
      screen.getByText(/Toda doação é uma forma de amor/i)
    ).toBeInTheDocument();
  });

  it("should render the donation description", () => {
    render(<Donations />);
    expect(
      screen.getByText(/As doações são muito importantes para o Asilo/i)
    ).toBeInTheDocument();
  });

  it("should display the donation image", () => {
    render(<Donations />);
    const image = screen.getByAltText("Imagem de Doação");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "/fotoqualidademelhorada.png");
  });

  it("should display bank details correctly", () => {
    render(<Donations />);
    expect(screen.getByText(/Sicoob/i)).toBeInTheDocument();
    expect(screen.getByText(/Agência: 3182-5/i)).toBeInTheDocument();
    expect(screen.getByText(/Conta Poupança: 62336498-0/i)).toBeInTheDocument();
    expect(screen.getByText(/Banco do Brasil/i)).toBeInTheDocument();
    expect(screen.getByText(/Agência: 2544-5/i)).toBeInTheDocument();
    expect(screen.getByText(/Conta Corrente: 8328-3/i)).toBeInTheDocument();
    expect(screen.getByText(/PIX/i)).toBeInTheDocument();
    expect(screen.getByText(/CNPJ: 24.186.074\/0001-22/i)).toBeInTheDocument();
  });

  it("should render the donation button", () => {
    render(<Donations />);
    expect(
      screen.getByText(/Transforme sua generosidade em impacto/i)
    ).toBeInTheDocument();
  });

  it("should display sharing buttons", () => {
    render(<Donations />);
    // Verifica os botões de compartilhamento com aria-label
    const shareButtons = screen.getAllByLabelText(/Compartilhar no/i);
    expect(shareButtons.length).toBeGreaterThanOrEqual(2); // Ajustado para 2
  });

  it("should render the newsletter section", () => {
    render(<Donations />);
    // Verifica a presença do campo de e-mail
    expect(
      screen.getByPlaceholderText(/Digite seu e-mail/i)
    ).toBeInTheDocument();

    // Filtra o botão pelo role
    const subscribeButton = screen.getByRole("button", {
      name: /Inscreva-se/i,
    });
    expect(subscribeButton).toBeInTheDocument();
  });
});
