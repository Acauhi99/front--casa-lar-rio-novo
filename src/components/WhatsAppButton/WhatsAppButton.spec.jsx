import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { WhatsAppButton } from './WhatsAppButton';

describe('WhatsAppButton Component', () => {
  it('should render without crashing', () => {
    const { container } = render(<WhatsAppButton />);
    expect(container).toBeDefined();
  });

  it('should render WhatsApp icon', () => {
    render(<WhatsAppButton />);
    const whatsappIcon = screen.getByTestId('WhatsAppIcon');
    expect(whatsappIcon).toBeInTheDocument();
  });
});