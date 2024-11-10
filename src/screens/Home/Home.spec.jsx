import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Home } from './Home.jsx';

describe('Home', () => {
  it('should render the main heading', () => {
    render(<Home />);
    
    // Verifica se o título principal está presente
    const mainHeading = screen.getByRole('heading', { name: /bem-vindo à home page/i });
    expect(mainHeading).toBeInTheDocument();
  });

  it('should render the body text', () => {
    render(<Home />);
    
    // Verifica se o texto do corpo está presente
    const bodyText = screen.getByText(/esta é a página inicial do nosso site. esperamos que você goste!/i);
    expect(bodyText).toBeInTheDocument();
  });

  it('should render the "Saiba Mais" button', () => {
    render(<Home />);
    
    // Verifica se o botão "Saiba Mais" está presente
    const button = screen.getByRole('button', { name: /saiba mais/i });
    expect(button).toBeInTheDocument();
  });
});