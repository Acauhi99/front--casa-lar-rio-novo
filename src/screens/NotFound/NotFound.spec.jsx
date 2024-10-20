import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { NotFound } from './NotFound';

describe('NotFound Component', () => {
  it('should render without crashing', () => {
    const { container } = render(<NotFound />);
    expect(container).toBeDefined();
  });

  it('should display the correct text', () => {
    const { getAllByText } = render(<NotFound />);
    expect(getAllByText('NotFound').length).toBeGreaterThan(0);
  });
});