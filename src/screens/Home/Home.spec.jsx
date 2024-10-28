import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Home } from './Home';

describe('Home Component', () => {
  it('should render without crashing', () => {
    const { container } = render(<Home />);
    expect(container).toBeDefined();
  });

  it('should display the correct header text', () => {
    const { getByText } = render(<Home />);
    expect(getByText('Bem-vindo à Home Page')).toBeInTheDocument();
  });

  it('should display the introductory paragraph', () => {
    const { getByText } = render(<Home />);
    expect(getByText('Esta é a página inicial do nosso site. Esperamos que você goste!')).toBeInTheDocument();
  });

  it('should have a button with the correct text', () => {
    const { getByText } = render(<Home />);
    const button = getByText('Clique Aqui');
    expect(button).toBeInTheDocument();
    expect(button.tagName).toBe('BUTTON');
  });
});
