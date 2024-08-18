import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import FormSubmitHandler from './FormSubmitHandler'; 
import axios from 'axios';
import AppURL from '../../../ecom/src/api/AppURL'; 

vi.mock('axios');

describe('FormSubmitHandler Component', () => {
  it('handles form submission successfully', async () => {
    axios.post.mockResolvedValue({
      data: { token: 'fake-token', user: { id: 1, name: 'Test User' } }
    });

    render(
      <FormSubmitHandler>
        {({ email, password, message, loading, setEmail, setPassword, formSubmit }) => (
          <form onSubmit={formSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              name="password"
              placeholder="Enter Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" disabled={loading}>
              {loading ? 'Processing...' : 'Login'}
            </button>
            {message && <p>{message}</p>}
          </form>
        )}
      </FormSubmitHandler>
    );

    const emailInput = screen.getByPlaceholderText(/Enter Your Email/i);
    const passwordInput = screen.getByPlaceholderText(/Enter Your Password/i);
    const submitButton = screen.getByText(/Login/i);

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password' } });
    fireEvent.click(submitButton);

    expect(axios.post).toHaveBeenCalledWith(AppURL.UserLogin, { email: 'test@example.com', password: 'password' });
    expect(await screen.findByText('Login successful')).toBeInTheDocument();
  });

  it('handles form submission failure', async () => {
    axios.post.mockRejectedValue(new Error('Login failed'));

    render(
      <FormSubmitHandler>
        {({ email, password, message, loading, setEmail, setPassword, formSubmit }) => (
          <form onSubmit={formSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              name="password"
              placeholder="Enter Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" disabled={loading}>
              {loading ? 'Processing...' : 'Login'}
            </button>
            {message && <p>{message}</p>}
          </form>
        )}
      </FormSubmitHandler>
    );

    const emailInput = screen.getByPlaceholderText(/Enter Your Email/i);
    const passwordInput = screen.getByPlaceholderText(/Enter Your Password/i);
    const submitButton = screen.getByText(/Login/i);

    fireEvent.change(emailInput, { target: { value: 'wrong@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'wrongpassword' } });
    fireEvent.click(submitButton);

    expect(axios.post).toHaveBeenCalledWith(AppURL.UserLogin, { email: 'wrong@example.com', password: 'wrongpassword' });
    expect(await screen.findByText('Login failed. Please try again.')).toBeInTheDocument();
  });
});
