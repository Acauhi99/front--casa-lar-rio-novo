import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { MainContainer } from './MainContainer.jsx';

describe('MainContainer', () => {
  it('should render children correctly', () => {
    render(
      <MainContainer>
        <div data-testid="child">Test Content</div>
      </MainContainer>
    );
    
    // Verifica se o conteúdo de teste está presente
    const child = screen.getByTestId('child');
    expect(child).toBeInTheDocument();
    expect(child).toHaveTextContent('Test Content');
  });

  it('should have correct styles', () => {
    render(
      <MainContainer>
        <div data-testid="child">Test Content</div>
      </MainContainer>
    );
    
    // Verifica se o componente Box tem os estilos corretos
    const box = screen.getByTestId('child').parentElement;
    expect(box).toHaveStyle({
      width: '100%',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    });
  });
});