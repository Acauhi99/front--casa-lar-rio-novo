import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Home } from './Home';

describe('Home Component', () => {
  it('should render without crashing', () => {
    const { container } = render(<Home />);
    expect(container).toBeDefined();
  });

  it('should display the correct text', () => {
    const { getAllByText } = render(<Home />);
    expect(getAllByText('Home').length).toBeGreaterThan(0);
  });
});