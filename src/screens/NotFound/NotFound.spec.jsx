import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { NotFound } from './NotFound';

describe('NotFound Component', () => {
  it('should render without crashing', () => {
    const { container } = render(<NotFound />);
    expect(container).toBeDefined();
  });

  it('should display the correct header text', () => {
    const { getByText } = render(<NotFound />);
    expect(getByText('Página Não Encontrada')).toBeInTheDocument();
  });

  it('should display the correct message text', () => {
    const { getByText } = render(<NotFound />);
    expect(getByText('Infelizmente, o URL que você tentou acessar não é válido.')).toBeInTheDocument();
  });

  it('should have a button that redirects to home', () => {
    const { getByText } = render(<NotFound />);
    const button = getByText('Voltar para Home');
    expect(button).toBeInTheDocument();
    expect(button.tagName).toBe('BUTTON');
  });
});
