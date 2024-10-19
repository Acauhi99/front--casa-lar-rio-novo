import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Volunteers } from './Volunteers';

describe('Volunteers Component', () => {
  it('should render without crashing', () => {
    const { container } = render(<Volunteers />);
    expect(container).toBeDefined();
  });

  it('should display the correct text', () => {
    const { getByText } = render(<Volunteers />);
    expect(getByText('Volunteers')).toBeInTheDocument();
  });
});