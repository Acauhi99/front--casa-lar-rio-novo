import React from 'react';
import { render, screen } from '@testing-library/react';
import Banner from './Banner'; 
import '@testing-library/jest-dom'; 

describe('Banner Component', () => {
  it('renders the Banner component correctly', () => {
    render(<Banner />);

    expect(screen.getByText('Transforme Vidas')).toBeInTheDocument();
    expect(screen.getByText('Apoie a nossa missão de cuidar de quem mais precisa.')).toBeInTheDocument();
    expect(screen.getByText('Saiba Mais')).toBeInTheDocument();
    expect(screen.getByText('Doar Agora')).toBeInTheDocument();
  });

  it('should render all slides', () => {
    render(<Banner />);

    const slides = screen.getAllByText(/Transforme Vidas|Cuidados Humanizados|Juntos Somos Mais Fortes/);
    expect(slides).toHaveLength(3);
  });

  it('should have the correct background image URL for each slide', () => {
    render(<Banner />);
    
    const firstSlide = screen.getByText('Transforme Vidas').closest('div');
    expect(firstSlide).toHaveStyle('background-image: url(/foto1.jpg)');
  });

  it('should have buttons with the correct labels', () => {
    render(<Banner />);

    expect(screen.getByRole('button', { name: 'Saiba Mais' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Doar Agora' })).toBeInTheDocument();
  });
});