import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import LoginImageComponent from './LoginImage'; // Passe den Pfad zu deiner Komponente an

describe('LoginImage Component', () => {
  it('renders the login image', () => {
    render(<LoginImageComponent />);

    const imgElement = screen.getByAltText(/Login/i);
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute('src', '/assets/images/login.png');
  });
});
