import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Contact } from './Contact';

describe('Contact Component', () => {
  it('should render without crashing', () => {
    const { container } = render(<Contact />);
    expect(container).toBeDefined();
  });

  it('should display the correct text', () => {
    const { getAllByText } = render(<Contact />);
    expect(getAllByText('Contact').length).toBeGreaterThan(0);
  });
});