import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import LoginForm from './LoginForm'; // Passe den Pfad zu deiner Komponente an

describe('LoginForm Component', () => {
  it('renders login form', () => {
    const mockHandleChange = vi.fn();
    const mockFormSubmit = vi.fn();

    render(
      <LoginForm
        email=""
        password=""
        handleChange={mockHandleChange}
        formSubmit={mockFormSubmit}
        loading={false}
      />
    );

    expect(screen.getByPlaceholderText(/Enter Your Email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Enter Your Password/i)).toBeInTheDocument();
    expect(screen.getByText(/Login/i)).toBeInTheDocument();
  });

  it('handles form submission', () => {
    const mockHandleChange = vi.fn();
    const mockFormSubmit = vi.fn((e) => e.preventDefault());

    render(
      <LoginForm
        email="test@example.com"
        password="password"
        handleChange={mockHandleChange}
        formSubmit={mockFormSubmit}
        loading={false}
      />
    );

    const emailInput = screen.getByPlaceholderText(/Enter Your Email/i);
    const passwordInput = screen.getByPlaceholderText(/Enter Your Password/i);
    const loginButton = screen.getByText(/Login/i);

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password' } });
    fireEvent.click(loginButton);

    expect(mockFormSubmit).toHaveBeenCalled();
  });
});
