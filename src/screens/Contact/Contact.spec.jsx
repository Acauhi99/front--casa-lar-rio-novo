import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Contact } from "./Contact";

describe("Contact Component", () => {
  it("should render without crashing", () => {
    const { container } = render(<Contact />);
    expect(container).toBeDefined();
  });

  it("should display the correct header text", () => {
    render(<Contact />);
    expect(screen.getByText("Entre em Contato")).toBeInTheDocument();
  });

  it("should display the introductory paragraph", () => {
    render(<Contact />);
    expect(
      screen.getByText(
        "Ficaremos felizes em ajudar! Preencha o formulário abaixo para entrar em contato conosco."
      )
    ).toBeInTheDocument();
  });

  it("should have a submit button with the correct text", () => {
    render(<Contact />);
    const submitButton = screen.getByRole("button", {
      name: /enviar mensagem/i,
    });
    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toHaveAttribute("type", "submit");
  });

  it("should allow input of name, email, and message", () => {
    render(<Contact />);

    const nameInput = screen.getByLabelText(/nome/i);
    const emailInput = screen.getByLabelText(/email/i);
    const messageInput = screen.getByLabelText(/mensagem/i);

    fireEvent.change(nameInput, { target: { value: "João Silva" } });
    fireEvent.change(emailInput, { target: { value: "joao@exemplo.com" } });
    fireEvent.change(messageInput, { target: { value: "Mensagem de teste" } });

    expect(nameInput).toHaveValue("João Silva");
    expect(emailInput).toHaveValue("joao@exemplo.com");
    expect(messageInput).toHaveValue("Mensagem de teste");
  });

  it("should have required fields", () => {
    render(<Contact />);

    const nameInput = screen.getByLabelText(/nome/i);
    const emailInput = screen.getByLabelText(/email/i);
    const messageInput = screen.getByLabelText(/mensagem/i);

    expect(nameInput).toHaveAttribute("required");
    expect(emailInput).toHaveAttribute("required");
    expect(messageInput).toHaveAttribute("required");
  });
});
