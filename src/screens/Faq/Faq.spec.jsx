import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Faq } from './Faq';

describe('Faq Component', () => {
  it('should render without crashing', () => {
    const { container } = render(<Faq />);
    expect(container).toBeDefined();
  });

  it('should display the correct text', () => {
    const { getByText } = render(<Faq />);
    expect(getByText('Faq')).toBeInTheDocument();
  });
});