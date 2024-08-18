import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import InputHandler from './InputHandler'; // Passe den Pfad zu deiner Komponente an

describe('InputHandler Component', () => {
  it('updates state on input change', () => {
    render(
      <InputHandler>
        {({ email, password, handleChange }) => (
          <>
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              value={email}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Enter Your Password"
              value={password}
              onChange={handleChange}
            />
          </>
        )}
      </InputHandler>
    );

    const emailInput = screen.getByPlaceholderText(/Enter Your Email/i);
    const passwordInput = screen.getByPlaceholderText(/Enter Your Password/i);

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password' } });

    expect(emailInput.value).toBe('test@example.com');
    expect(passwordInput.value).toBe('password');
  });

  it('navigates when logged in or token exists', () => {
    // Mock localStorage
    const getItemSpy = vi.spyOn(Storage.prototype, 'getItem').mockImplementation((key) => {
      return key === 'token' ? 'mockToken' : null;
    });
    const locationSpy = vi.spyOn(window, 'location', 'get').mockReturnValue({
      href: ''
    });

    render(
      <InputHandler>
        {() => <p>Should not see this</p>}
      </InputHandler>
    );

    expect(locationSpy().href).toBe('/profile');
    getItemSpy.mockRestore();
  });
});
