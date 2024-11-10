import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Header } from './Header.jsx';

describe('Header', () => {
  it('should render the logo with correct src and alt text', () => {
    render(<Header />);
    
    // Verifica se o logotipo está presente
    const logo = screen.getByAltText('Logo do asilo');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', '/LogoPNG2.png');
  });

  it('should render the navigation links with correct href attributes', () => {
    render(<Header />);
    
    // Verifica se o link "Contato" está presente e tem o href correto
    const contactLink = screen.getByRole('link', { name: /contato/i });
    expect(contactLink).toBeInTheDocument();
    expect(contactLink).toHaveAttribute('href', '/contact');
    
    // Verifica se o link "Doações" está presente e tem o href correto
    const donationsLink = screen.getByRole('link', { name: /doações/i });
    expect(donationsLink).toBeInTheDocument();
    expect(donationsLink).toHaveAttribute('href', '/donations');
    
    // Verifica se o link "FAQ" está presente e tem o href correto
    const faqLink = screen.getByRole('link', { name: /dúvidas/i });
    expect(faqLink).toBeInTheDocument();
    expect(faqLink).toHaveAttribute('href', '/faq');
  });
});