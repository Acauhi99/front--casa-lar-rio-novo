import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Footer } from './Footer';

describe('Footer Component', () => {
  it('should render without crashing', () => {
    const { container } = render(<Footer />);
    expect(container).toBeDefined();
  });

  it('should display the correct text', () => {
    const { getByText } = render(<Footer />);
    expect(getByText('Footer')).toBeInTheDocument();
  });
});