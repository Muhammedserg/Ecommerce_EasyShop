import React, { useState } from 'react';
import axios from 'axios';
import AppURL from '../../../ecom/src/api/AppURL'; // Angepasster Pfad

const FormSubmitHandler = ({ children }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);

  const formSubmit = async (e) => {
    e.preventDefault();
    const data = { email, password };
    setLoading(true);

    try {
      const response = await axios.post(AppURL.UserLogin, data);
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      setLoggedIn(true);
      setMessage('Login successful');
    } catch (error) {
      setMessage('Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return children({ email, password, message, loggedIn, loading, setEmail, setPassword, formSubmit });
};

export default FormSubmitHandler;
