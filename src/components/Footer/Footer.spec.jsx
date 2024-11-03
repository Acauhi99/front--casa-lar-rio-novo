import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Footer } from './Footer.jsx';

describe('Footer', () => {
  it('should render the footer with correct texts', () => {
    render(<Footer />);
    
    // Verifica se o texto "Casa Lar Rio Novo" está presente
    expect(screen.getByText('Casa Lar Rio Novo')).toBeInTheDocument();
    
    // Verifica se o texto "Rua Jacob da Paixao, 115 Rio Novo - MG, 36.150-000" está presente
    expect(screen.getByText('Rua Jacob da Paixao, 115 Rio Novo - MG, 36.150-000')).toBeInTheDocument();
  });

  it('should render the Instagram icon with correct link', () => {
    render(<Footer />);
    
    // Verifica se o ícone do Instagram está presente
    const instagramIcon = screen.getByTestId('InstagramIcon');
    expect(instagramIcon).toBeInTheDocument();
    
    // Verifica se o link do Instagram está correto
    const instagramLink = instagramIcon.closest('a');
    expect(instagramLink).toHaveAttribute('href', 'https://www.instagram.com/casalarderionovo/');
  });
});