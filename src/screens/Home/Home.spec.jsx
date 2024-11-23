import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { Home } from "./Home";
import theme from "../../theme";
import "@testing-library/jest-dom";

describe("Home Component", () => {
  it("renders the Banner component", () => {
    render(
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </ThemeProvider>
    );
    const bannerTitle = screen.getByText(/Transforme Vidas/i);
    expect(bannerTitle).toBeInTheDocument();
  });

  it("displays the main heading", () => {
    render(
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </ThemeProvider>
    );
    const mainHeading = screen.getByRole("heading", {
      name: /Ajudamos a transformar\.\.\./i,
      level: 5,
    });
    expect(mainHeading).toBeInTheDocument();
  });

  it("displays each card with correct title and description", () => {
    render(
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </ThemeProvider>
    );
    const cardTitles = [
      "Atendimento Humanizado",
      "Infraestrutura Dedicada",
      "Programas de Inclusão",
    ];

    cardTitles.forEach((title) => {
      const cardTitle = screen.getByRole("heading", { name: title, level: 6 });
      expect(cardTitle).toBeInTheDocument();
    });
  });
});
