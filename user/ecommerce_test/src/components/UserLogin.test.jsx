import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import UserLogin from './UserLogin'; // Stellen Sie sicher, dass der Pfad korrekt ist
import axios from 'axios';
import AppURL from '../../../ecom/src/api/AppURL'; // Korrigierter Pfad

vi.mock('axios');

const renderComponent = () => {
  render(<UserLogin />);
};

describe('UserLogin Component', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('handles form submission successfully', async () => {
    axios.post.mockResolvedValue({
      data: { token: 'mockToken', user: { name: 'Test User' } }
    });

    renderComponent();

    fireEvent.change(screen.getByPlaceholderText(/Enter Your Email/i), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByPlaceholderText(/Enter Your Password/i), { target: { value: 'password' } });
    fireEvent.click(screen.getByRole('button', { name: /Login/i }));

    expect(axios.post).toHaveBeenCalledWith(AppURL.UserLogin, {
      email: 'test@example.com',
      password: 'password'
    });

    await waitFor(() => {
      expect(localStorage.getItem('token')).toBe('mockToken');
      expect(localStorage.getItem('user')).toBe(JSON.stringify({ name: 'Test User' }));
      expect(screen.getByTestId('navigate-to-profile')).toBeInTheDocument();
    });

    expect(screen.queryByText('Login failed. Please try again.')).toBeNull();
  });

  it('handles form submission failure', async () => {
    axios.post.mockRejectedValue(new Error('Login failed'));

    renderComponent();

    fireEvent.change(screen.getByPlaceholderText(/Enter Your Email/i), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByPlaceholderText(/Enter Your Password/i), { target: { value: 'password' } });
    fireEvent.click(screen.getByRole('button', { name: /Login/i }));

    expect(axios.post).toHaveBeenCalledWith(AppURL.UserLogin, {
      email: 'test@example.com',
      password: 'password'
    });

    await waitFor(() => {
      expect(screen.getByText('Login failed. Please try again.')).toBeInTheDocument();
    });
  });
});
