import React, { Component } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';
import AppURL from '../../api/AppURL';
import LoginImage from '../../assets/images/login.png'; // Ensure the image path is correct

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
      message: '',
      loggedIn: false,
      loading: false
    };
  }

  formSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password_confirmation: this.state.password_confirmation
    };

    this.setState({ loading: true });

    axios.post(AppURL.UserRegister, data).then(response => {
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      this.setState({ loggedIn: true, loading: false });
    }).catch(error => {
      this.setState({ message: 'Registration failed. Please try again.', loading: false });
    });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    if (this.state.loggedIn || localStorage.getItem('token')) {
      return <Navigate to="/profile" />;
    }

    const { loading } = this.state;

    return (
      <Container>
        <Row className="p-2">
          <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>
            <Row className="text-center">
              <Col className="d-flex justify-content-center" md={6} lg={6} sm={12} xs={12}>
                <Form className="onboardForm" onSubmit={this.formSubmit}>
                  <h4 className="section-title-login">USER REGISTER</h4>
                  <input
                    className="form-control m-2"
                    type="text"
                    placeholder="Enter Your Name"
                    name="name"
                    onChange={this.handleChange}
                  />
                  <input
                    className="form-control m-2"
                    type="email"
                    placeholder="Enter Your Email"
                    name="email"
                    onChange={this.handleChange}
                  />
                  <input
                    className="form-control m-2"
                    type="password"
                    placeholder="Enter Your Password"
                    name="password"
                    onChange={this.handleChange}
                  />
                  <input
                    className="form-control m-2"
                    type="password"
                    placeholder="Confirm Your Password"
                    name="password_confirmation"
                    onChange={this.handleChange}
                  />
                  <Button type="submit" className="btn btn-block m-2 site-btn-login" disabled={loading}>
                    {loading ? 'Processing...' : 'Sign Up'}
                  </Button>
                  <br /><br />
                  <hr />
                  <p><b>Forget My Password?</b> <Link to="/forget"><b>Forget Password</b></Link></p>
                  <p><b>Already Have An Account?</b> <Link to="/login"><b>Login</b></Link></p>
                  {this.state.message && <p className="text-danger">{this.state.message}</p>}
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
  }
}

export default Register;
