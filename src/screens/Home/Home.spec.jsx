import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Home } from './Home';

describe('Home Component', () => {
  
  test('renders the main heading', () => {
    render(<Home />);
    const mainHeading = screen.getByText(/Ajudamos a transformar/i);
    expect(mainHeading).toBeInTheDocument();
  });

  test('renders three cards with correct titles and icons', () => {
    render(<Home />);

    // Verifique os títulos de cada card
    const cardTitles = screen.getAllByRole('heading', { level: 6 });
    const expectedTitles = [
      /Atendimento Humanizado/i,
      /Infraestrutura Dedicada/i,
      /Programas de Inclusão/i
    ];

    // Verificar se cada título esperado está presente
    expectedTitles.forEach((expectedTitle, index) => {
      expect(cardTitles[index]).toHaveTextContent(expectedTitle);
    });

    // Verifique os ícones de cada card
    expect(screen.getByTestId('CheckCircleIcon')).toBeInTheDocument();
    expect(screen.getByTestId('FavoriteIcon')).toBeInTheDocument();
    expect(screen.getByTestId('GroupIcon')).toBeInTheDocument();
  });

  test('renders card texts correctly', () => {
    render(<Home />);
    
    // Verifique trechos do texto de cada card
    const cardTexts = [
      /oferecer um atendimento humanizado/i,
      /oferecer um ambiente seguro e acolhedor/i,
      /envolve laços sociais e interação com a comunidade/i
    ];

    cardTexts.forEach((text) => {
      expect(screen.getByText(text)).toBeInTheDocument();
    });
  });
});
