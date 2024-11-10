import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Faq } from './Faq';

describe('Faq Component', () => {
  it('should render without crashing', () => {
    const { container } = render(<Faq />);
    expect(container).toBeDefined();
  });

  it('should display the correct heading', () => {
    render(<Faq />);
    expect(screen.getByText('Dúvidas Frequentes')).toBeInTheDocument();
  });
});