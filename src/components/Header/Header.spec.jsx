import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Header } from './Header';

describe('Header Component', () => {
  it('should render without crashing', () => {
    const { container } = render(<Header />);
    expect(container).toBeDefined();
  });

  it('should display the correct text', () => {
    const { getAllByText } = render(<Header />);
    expect(getAllByText('Header').length).toBeGreaterThan(0);
  });
});