import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { DonationButton } from './DonationButton';

describe('DonationButton Component', () => {
  it('should render without crashing', () => {
    const { container } = render(<DonationButton />);
    expect(container).toBeDefined();
  });

  it('should display the correct text', () => {
    const { getAllByText } = render(<DonationButton />);
    expect(getAllByText('DonationButton').length).toBeGreaterThan(0);
  });
});