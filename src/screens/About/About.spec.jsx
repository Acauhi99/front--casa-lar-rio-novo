import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { About } from './About';

describe('About Component', () => {
  it('should render without crashing', () => {
    const { container } = render(<About />);
    expect(container).toBeDefined();
  });

  it('should display the title "Nossa Casa"', () => {
    render(<About />);
    const title = screen.getByText('Nossa Casa');
    expect(title).toBeInTheDocument();
  });

  it('should render the section "Histórico Centenário da Casa Lar Cônego Agostinho Augusto França"', () => {
    render(<About />);
    const sectionTitle = screen.getByText(
      'Histórico Centenário da Casa Lar Cônego Agostinho Augusto França'
    );
    expect(sectionTitle).toBeInTheDocument();
  });

  it('should display the "Estrutura e Funcionamento Atual" section', () => {
    render(<About />);
    const sectionTitle = screen.getByText('Estrutura e Funcionamento Atual');
    expect(sectionTitle).toBeInTheDocument();
  });

  it('should include the image with alt text "Instituição"', () => {
    render(<About />);
    const image = screen.getByAltText('Instituição');
    expect(image).toBeInTheDocument();
  });

  it('should display the text about the administrative structure', () => {
    render(<About />);
    const textSnippet =
      'Após a morte do fundador, a administração da instituição passou a ser conduzida por uma diretoria eleita a cada três anos.';
    const text = screen.getByText(textSnippet, { exact: false });
    expect(text).toBeInTheDocument();
  });
});
