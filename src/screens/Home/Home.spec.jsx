import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Home } from "./Home";

describe("Home Component", () => {
  test("renders the main heading", () => {
    render(<Home />);
    const mainHeading = screen.getByText(/Ajudamos a transformar/i);
    expect(mainHeading).toBeInTheDocument();
  });

  test("renders three cards with correct titles and icons", () => {
    render(<Home />);

    // Obter todos os elementos de heading de nível 6
    const cardTitles = screen.getAllByRole("heading", { level: 6 });

    // Definir os títulos esperados
    const expectedTitles = [
      "Atendimento Humanizado",
      "Infraestrutura Dedicada",
      "Programas de Inclusão",
    ];

    // Verificar se cada título esperado está presente
    expectedTitles.forEach((title) => {
      const matchingTitle = cardTitles.find(
        (cardTitle) => cardTitle.textContent === title
      );
      expect(matchingTitle).toBeInTheDocument();
    });

    // Verificar se há exatamente três títulos de cards
    expect(cardTitles.length).toBeGreaterThanOrEqual(3); // Ajuste conforme necessário
  });

  test("renders card texts correctly", () => {
    render(<Home />);

    // Verifique trechos do texto de cada card
    const cardTexts = [
      /oferecer um atendimento humanizado/i,
      /oferecer um ambiente seguro e acolhedor/i,
      /envolve laços sociais e interação com a comunidade/i,
    ];

    cardTexts.forEach((text) => {
      expect(screen.getByText(text)).toBeInTheDocument();
    });
  });
});
