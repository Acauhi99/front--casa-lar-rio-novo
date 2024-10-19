import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Donations } from './Donations';

describe('Donations Component', () => {
  it('should render without crashing', () => {
    const { container } = render(<Donations />);
    expect(container).toBeDefined();
  });

  it('should display the correct text', () => {
    const { getAllByText } = render(<Donations />);
    expect(getAllByText('Donations').length).toBeGreaterThan(0);
  });
});