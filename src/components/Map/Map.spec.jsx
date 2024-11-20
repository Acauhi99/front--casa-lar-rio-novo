import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import Map from './Map';

vi.mock('leaflet', () => ({
  default: {
    icon: vi.fn(() => ({})),
    Marker: { prototype: { options: { icon: {} } } }
  }
}));

vi.mock('react-leaflet', () => ({
  MapContainer: ({ children }) => <div data-testid="map-container">{children}</div>,
  TileLayer: () => <div data-testid="tile-layer">TileLayer</div>,
  Marker: ({ children }) => <div data-testid="marker">{children}</div>,
  Popup: ({ children }) => <div data-testid="popup">{children}</div>
}));

describe('Map Component', () => {
  const defaultProps = {
    position: [-21.47230429755037, -43.12305091806953],
    mapRef: { current: null }
  };

  it('should render without crashing', () => {
    const { container } = render(<Map {...defaultProps} />);
    expect(container).toBeDefined();
  });

  it('should render all map components', () => {
    render(<Map {...defaultProps} />);
    expect(screen.getByTestId('map-container')).toBeInTheDocument();
    expect(screen.getByTestId('tile-layer')).toBeInTheDocument();
    expect(screen.getByTestId('marker')).toBeInTheDocument();
    expect(screen.getByTestId('popup')).toBeInTheDocument();
  });

  it('should render popup with correct text', () => {
    render(<Map {...defaultProps} />);
    const popup = screen.getByTestId('popup');
    expect(popup).toHaveTextContent('Nossa localização');
  });
});