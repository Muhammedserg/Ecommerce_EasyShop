import React, { useState, useEffect } from 'react';

const InputHandler = ({ children }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  useEffect(() => {
    if (loggedIn || localStorage.getItem('token')) {
      // Simulate navigation
      window.location.href = '/profile';
    }
  }, [loggedIn]);

  return children({ email, password, handleChange, setLoggedIn });
};

export default InputHandler;
