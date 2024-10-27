import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer Component', () => {
  test('renders footer with correct content', () => {
    render(<Footer />);

    const titleElement = screen.getByText(/Casa Lar Rio Novo/i);
    expect(titleElement).toBeInTheDocument();

    const addressElement = screen.getByText(/Rua Jacob da Paixao, 115 Rio Novo - MG, 36.150-000/i);
    expect(addressElement).toBeInTheDocument();

    const instagramLink = screen.getByRole('link', { name: /Instagram/i });
    expect(instagramLink).toBeInTheDocument();
    expect(instagramLink).toHaveAttribute('href', 'https://www.instagram.com/casalarderionovo/');
  });
});
