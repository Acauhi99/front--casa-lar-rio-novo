import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Volunteers } from './Volunteers';

describe('Volunteers Component', () => {

  it('should render without crashing', () => {
    const { container } = render(<Volunteers />);
    expect(container).toBeDefined(); // Verifica se o container do componente está definido
  });

  it('should display the correct header text', () => {
    const { getByText } = render(<Volunteers />);
    expect(getByText('Para Voluntariado')).toBeInTheDocument(); // Verifica se o texto do cabeçalho está presente no documento
  });

  // Testa se todos os campos de entrada necessários estão presentes
  it('should have the necessary input fields', () => {
    const { getByPlaceholderText } = render(<Volunteers />);

    expect(getByPlaceholderText('Nome Completo')).toBeInTheDocument(); 
    expect(getByPlaceholderText('Idade')).toBeInTheDocument();
    expect(getByPlaceholderText('E-mail')).toBeInTheDocument(); 
    expect(getByPlaceholderText('Telefone')).toBeInTheDocument(); 
    expect(getByPlaceholderText('Disponibilidade de horário (ex.: Seg-Sex, 9h-12h)')).toBeInTheDocument(); 
    expect(getByPlaceholderText('Experiência Prévia (opcional)')).toBeInTheDocument();
    expect(getByPlaceholderText('Motivação para Voluntariado')).toBeInTheDocument();
  });

  it('should have a submit button with correct text', () => {
    const { getByText } = render(<Volunteers />);
    expect(getByText('Enviar')).toBeInTheDocument(); // Verifica se o botão "Enviar" está presente no documento
  });
});
