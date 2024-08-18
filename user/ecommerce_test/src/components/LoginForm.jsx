import React from 'react';

const LoginForm = ({ email, password, handleChange, formSubmit, loading }) => {
  return (
    <form onSubmit={formSubmit}>
      <h4>USER SIGN IN</h4>
      <input
        type="email"
        placeholder="Enter Your Email"
        name="email"
        value={email}
        onChange={handleChange}
      />
      <input
        type="password"
        placeholder="Enter Your Password"
        name="password"
        value={password}
        onChange={handleChange}
      />
      <button type="submit" disabled={loading}>
        {loading ? 'Processing...' : 'Login'}
      </button>
    </form>
  );
};

export default LoginForm;
