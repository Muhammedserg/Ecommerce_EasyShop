import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';
import AppURL from '../../api/AppURL';
import LoginImage from '../../assets/images/login.png'; 
const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);

  const formSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email,
      password
    };

    setLoading(true);

    try {
      const response = await axios.post(AppURL.UserLogin, data);
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      setLoggedIn(true);
      setLoading(false);
    } catch (error) {
      setMessage('Login failed. Please try again.');
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  if (loggedIn || localStorage.getItem('token')) {
    return <Navigate to="/profile" />;
  }

  return (
    <Container>
      <Row className="p-2">
        <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>
          <Row className="text-center">
            <Col className="d-flex justify-content-center" md={6} lg={6} sm={12} xs={12}>
              <Form className="onboardForm" onSubmit={formSubmit}>
                <h4 className="section-title-login">USER SIGN IN</h4>
                <input
                  className="form-control m-2"
                  type="email"
                  placeholder="Enter Your Email"
                  name="email"
                  onChange={handleChange}
                />
                <input
                  className="form-control m-2"
                  type="password"
                  placeholder="Enter Your Password"
                  name="password"
                  onChange={handleChange}
                />
                <Button type="submit" className="btn btn-block m-2 site-btn-login" disabled={loading}>
                  {loading ? 'Processing...' : 'Login'}
                </Button>
                <br /><br />
                <hr />
                <p><b>Forget My Password?</b> <Link to="/forget"><b>Forget Password</b></Link></p>
                <p><b>Don't Have An Account?</b> <Link to="/register"><b>Register</b></Link></p>
                {message && <p className="text-danger">{message}</p>}
              </Form>
            </Col>
            <Col className="p-0 Desktop m-0" md={6} lg={6} sm={6} xs={6}>
              <img className="onboardBanner" src={LoginImage} alt="Login" />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default UserLogin;
