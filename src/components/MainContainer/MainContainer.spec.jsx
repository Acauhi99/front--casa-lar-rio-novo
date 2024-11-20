import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { MainContainer } from "./MainContainer.jsx";

describe("MainContainer", () => {
  it("should render children correctly", () => {
    render(
      <MainContainer>
        <div data-testid="child">Test Content</div>
      </MainContainer>
    );

    // Verifica se o conteúdo de teste está presente
    const child = screen.getByTestId("child");
    expect(child).toBeInTheDocument();
    expect(child).toHaveTextContent("Test Content");
  });
});
