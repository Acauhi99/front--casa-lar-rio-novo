import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'; // Necessário para o Link funcionar
import Header from './Header';

describe('Header component', () => {
  test('renders logo and navigation links', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    // Verifica se a logo está sendo renderizada
    const logo = screen.getByAltText('Logo do asilo');
    expect(logo).not.toBeNull(); // Checa se o elemento existe

    // Verifica se os links de navegação estão sendo renderizados
    const contactLink = screen.getByText('Contato');
    const donationsLink = screen.getByText('Doações');
    const faqLink = screen.getByText('FAQ');
    const volunteersLink = screen.getByText('Voluntários');

    expect(contactLink).not.toBeNull();
    expect(donationsLink).not.toBeNull();
    expect(faqLink).not.toBeNull();
    expect(volunteersLink).not.toBeNull();
  });
});
