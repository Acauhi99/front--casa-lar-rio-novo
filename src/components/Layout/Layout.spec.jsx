import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Layout } from "./Layout";

// Mock child components
vi.mock("../Header/Header", () => ({
  Header: () => <div data-testid="header">Header Mock</div>,
}));

vi.mock("../MainContainer/MainContainer", () => {
  // eslint-disable-next-line no-undef
  const PropTypes = require("prop-types");
  const MainContainer = ({ children }) => (
    <div data-testid="main-container">{children}</div>
  );

  MainContainer.propTypes = {
    children: PropTypes.node.isRequired,
  };

  return { MainContainer };
});

vi.mock("../WhatsAppButton/WhatsAppButton", () => ({
  WhatsAppButton: () => <div data-testid="whatsapp-button">WhatsApp Mock</div>,
}));

vi.mock("../Footer/Footer", () => ({
  Footer: () => <div data-testid="footer">Footer Mock</div>,
}));

describe("Layout", () => {
  it("should render all child components", () => {
    render(
      <Layout>
        <div data-testid="test-child">Test Content</div>
      </Layout>
    );

    expect(screen.getByTestId("header")).toBeInTheDocument();
    expect(screen.getByTestId("main-container")).toBeInTheDocument();
    expect(screen.getByTestId("whatsapp-button")).toBeInTheDocument();
    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });

  it("should render children content", () => {
    render(
      <Layout>
        <div data-testid="test-child">Test Content</div>
      </Layout>
    );

    expect(screen.getByTestId("test-child")).toBeInTheDocument();
    expect(screen.getByText("Test Content")).toBeInTheDocument();
  });
});
