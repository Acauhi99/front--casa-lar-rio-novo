import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Contact } from './Contact';

describe('Contact Component', () => {
  it('should render without crashing', () => {
    const { container } = render(<Contact />);
    expect(container).toBeDefined();
  });

  it('should display the correct text', () => {
    const { getByText } = render(<Contact />);
    expect(getByText('Contact')).toBeInTheDocument();
  });
});