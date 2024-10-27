import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Contact } from './Contact';

// Conjunto de testes para o componente Contact
describe('Contact Component', () => {
  
  // Testa se o componente renderiza sem erros
  it('should render without crashing', () => {
    const { container } = render(<Contact />);
    expect(container).toBeDefined();
  });

  // Verifica se o título "Entre em Contato" está presente
  it('should display the correct header text', () => {
    const { getByText } = render(<Contact />);
    expect(getByText('Entre em Contato')).toBeInTheDocument();
  });

  // Verifica se o parágrafo introdutório está presente
  it('should display the introductory paragraph', () => {
    const { getByText } = render(<Contact />);
    expect(getByText('Ficaremos felizes em ajudar! Preencha o formulário abaixo para entrar em contato conosco.')).toBeInTheDocument();
  });

  // Verifica se o botão de envio está presente e possui o texto correto
  it('should have a submit button with the correct text', () => {
    const { getByText } = render(<Contact />);
    const button = getByText('Enviar Mensagem');
    expect(button).toBeInTheDocument(); // Confirma a presença do botão
    expect(button.tagName).toBe('BUTTON'); // Verifica se é um elemento do tipo botão
  });

  // Testa se os campos de entrada permitem a inserção de dados
  it('should allow input of name, email, and message', () => {
    const { getByPlaceholderText } = render(<Contact />);

    // Obtém os campos de entrada pelo texto do placeholder
    const nameInput = getByPlaceholderText('Seu Nome');
    const emailInput = getByPlaceholderText('Seu Email');
    const messageInput = getByPlaceholderText('Sua Mensagem');

    // Simula a inserção de dados em cada campo
    fireEvent.change(nameInput, { target: { value: 'Teste' } });
    fireEvent.change(emailInput, { target: { value: 'teste@exemplo.com' } });
    fireEvent.change(messageInput, { target: { value: 'Esta é uma mensagem de teste' } });

    // Verifica se os valores foram atualizados corretamente
    expect(nameInput.value).toBe('Teste');
    expect(emailInput.value).toBe('teste@exemplo.com');
    expect(messageInput.value).toBe('Esta é uma mensagem de teste');
  });
});