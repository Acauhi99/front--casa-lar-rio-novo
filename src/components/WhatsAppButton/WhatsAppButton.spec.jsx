import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { WhatsAppButton } from './WhatsAppButton';

describe('WhatsAppButton Component', () => {
  it('should render without crashing', () => {
    const { container } = render(<WhatsAppButton />);
    expect(container).toBeDefined();
  });

  it('should display the correct text', () => {
    const { getByText } = render(<WhatsAppButton />);
    expect(getByText('WhatsAppButton')).toBeInTheDocument();
  });
});