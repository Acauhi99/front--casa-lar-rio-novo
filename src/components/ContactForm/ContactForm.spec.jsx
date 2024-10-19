import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { ContactForm } from './ContactForm';

describe('ContactForm Component', () => {
  it('should render without crashing', () => {
    const { container } = render(<ContactForm />);
    expect(container).toBeDefined();
  });

  it('should display the correct text', () => {
    const { getAllByText } = render(<ContactForm />);
    expect(getAllByText('ContactForm').length).toBeGreaterThan(0);
  });
});