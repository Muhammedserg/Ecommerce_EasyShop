import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ResetPassword from './ResetPassword'; // Stellen Sie sicher, dass der Pfad korrekt ist
import axios from 'axios';
import AppURL from '../../../ecom/src/api/AppURL'; // Korrigierter Pfad
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

vi.mock('axios');

const renderComponent = () => {
  render(
    <>
      <ResetPassword />
      <ToastContainer />
    </>
  );
};

describe('ResetPassword Component', () => {
  it('handles form submission successfully', async () => {
    axios.post.mockResolvedValue({
      data: { message: 'Password reset successful' }
    });

    renderComponent();

    fireEvent.change(screen.getByPlaceholderText(/Enter Your Pin Code/i), { target: { value: '123456' } });
    fireEvent.change(screen.getByPlaceholderText(/Enter Your Email/i), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByPlaceholderText(/Your New Password/i), { target: { value: 'password' } });
    fireEvent.change(screen.getByPlaceholderText(/Confirm Your Password/i), { target: { value: 'password' } });
    fireEvent.click(screen.getByRole('button', { name: /Reset Password/i }));

    expect(axios.post).toHaveBeenCalledWith(AppURL.UserResetPassword, {
      token: '123456',
      email: 'test@example.com',
      password: 'password',
      password_confirmation: 'password'
    });

    await waitFor(() => {
      const successMessages = screen.getAllByText('Password reset successful');
      expect(successMessages.length).toBeGreaterThan(0);
    });
  });

  it('handles form submission failure', async () => {
    axios.post.mockRejectedValue(new Error('Password reset failed'));

    renderComponent();

    fireEvent.change(screen.getByPlaceholderText(/Enter Your Pin Code/i), { target: { value: '123456' } });
    fireEvent.change(screen.getByPlaceholderText(/Enter Your Email/i), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByPlaceholderText(/Your New Password/i), { target: { value: 'password' } });
    fireEvent.change(screen.getByPlaceholderText(/Confirm Your Password/i), { target: { value: 'password' } });
    fireEvent.click(screen.getByRole('button', { name: /Reset Password/i }));

    expect(axios.post).toHaveBeenCalledWith(AppURL.UserResetPassword, {
      token: '123456',
      email: 'test@example.com',
      password: 'password',
      password_confirmation: 'password'
    });

    await waitFor(() => {
      const errorMessages = screen.getAllByText('An error occurred. Please try again later.');
      expect(errorMessages.length).toBeGreaterThan(0);
    });
  });
});
