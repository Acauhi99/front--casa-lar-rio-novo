import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { About } from './About';

describe('About Component', () => {
  it('should render without crashing', () => {
    const { container } = render(<About />);
    expect(container).toBeDefined();
  });

  it('should display the correct text', () => {
    const { getAllByText } = render(<About />);
    expect(getAllByText('About').length).toBeGreaterThan(0);
  });
});