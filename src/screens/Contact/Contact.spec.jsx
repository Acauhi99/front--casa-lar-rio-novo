import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Contact } from './Contact';

describe('Contact Component', () => {
  it('should render without crashing', () => {
    const { container } = render(<Contact />);
    expect(container).toBeDefined();
  });

  it('should display the correct header text', () => {
    const { getByText } = render(<Contact />);
    expect(getByText('Entre em Contato')).toBeInTheDocument();
  });

  it('should display the introductory paragraph', () => {
    const { getByText } = render(<Contact />);
    expect(getByText('Ficaremos felizes em ajudar! Preencha o formulário abaixo para entrar em contato conosco.')).toBeInTheDocument();
  });

  it('should have a submit button with the correct text', () => {
    const { getByText } = render(<Contact />);
    const button = getByText('Enviar Mensagem');
    expect(button).toBeInTheDocument();
    expect(button.tagName).toBe('BUTTON');
  });

  it('should allow input of name, email, and message', () => {
    const { getByPlaceholderText } = render(<Contact />);
    const nameInput = getByPlaceholderText('Seu Nome');
    const emailInput = getByPlaceholderText('Seu Email');
    const messageInput = getByPlaceholderText('Sua Mensagem');

    fireEvent.change(nameInput, { target: { value: 'Teste' } });
    fireEvent.change(emailInput, { target: { value: 'teste@exemplo.com' } });
    fireEvent.change(messageInput, { target: { value: 'Esta é uma mensagem de teste' } });

    expect(nameInput.value).toBe('Teste');
    expect(emailInput.value).toBe('teste@exemplo.com');
    expect(messageInput.value).toBe('Esta é uma mensagem de teste');
  });
});
