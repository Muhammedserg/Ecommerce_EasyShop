import React, { useState, Fragment } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import AppURL from '../../../ecom/src/api/AppURL'; // Korrigierter Pfad
import Forget from '../../../ecom/src/assets/images/forget.jpg'; // Korrigierter Pfad
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ResetPassword = () => {
  const [formData, setFormData] = useState({
    token: '',
    email: '',
    password: '',
    password_confirmation: ''
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // Validate form fields
  const validateForm = () => {
    const { token, email, password, password_confirmation } = formData;
    const errors = {};

    if (!token) errors.token = "Pin Code is required";
    if (!email) errors.email = "Email is required";
    if (email && !/\S+@\S+\.\S+/.test(email)) errors.email = "Invalid email address";
    if (!password) errors.password = "Password is required";
    if (password !== password_confirmation) errors.password_confirmation = "Passwords do not match";

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Reset Form Submit Method
  const formSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      toast.error("Please correct the errors in the form", {
        position: "top-right"
      });
      return;
    }

    setLoading(true); // Set loading state to true when form is submitted

    const { token, email, password, password_confirmation } = formData;
    const data = { token, email, password, password_confirmation };

    axios.post(AppURL.UserResetPassword, data)
      .then(response => {
        toast.success(response.data.message, {
          position: "top-right"
        });
        setLoading(false); // Set loading state to false after successful submission
        document.getElementById("formReset").reset();
        setFormData({
          token: '',
          email: '',
          password: '',
          password_confirmation: ''
        });
      })
      .catch(error => {
        const errorMessage = error.response && error.response.data && error.response.data.message 
          ? error.response.data.message 
          : 'An error occurred. Please try again later.';
        
        setLoading(false); // Set loading state to false after error
        toast.error(errorMessage, {
          position: "top-right"
        });
      });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Fragment>
      <Container>
        <Row className="p-2">
          <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>
            <Row className="text-center">
              <Col className="d-flex justify-content-center" md={6} lg={6} sm={12} xs={12}>
                <Form className="onboardForm" onSubmit={formSubmit} id="formReset">
                  <h4 className="section-title-login">RESET PASSWORD</h4>

                  <input
                    className="form-control m-2"
                    type="text"
                    placeholder="Enter Your Pin Code"
                    name="token"
                    onChange={handleChange}
                  />
                  {errors.token && <div className="text-danger">{errors.token}</div>}

                  <input
                    className="form-control m-2"
                    type="email"
                    placeholder="Enter Your Email"
                    name="email"
                    onChange={handleChange}
                  />
                  {errors.email && <div className="text-danger">{errors.email}</div>}

                  <input
                    className="form-control m-2"
                    type="password"
                    placeholder="Your New Password"
                    name="password"
                    onChange={handleChange}
                  />
                  {errors.password && <div className="text-danger">{errors.password}</div>}

                  <input
                    className="form-control m-2"
                    type="password"
                    placeholder="Confirm Your Password"
                    name="password_confirmation"
                    onChange={handleChange}
                  />
                  {errors.password_confirmation && <div className="text-danger">{errors.password_confirmation}</div>}

                  {/* Conditionally render button text based on loading state */}
                  <Button type="submit" className="btn btn-block m-2 site-btn-login" disabled={loading}>
                    {loading ? 'Processing...' : 'Reset Password'}
                  </Button>
                </Form>
              </Col>

              <Col className="p-0 Desktop m-0" md={6} lg={6} sm={6} xs={6}>
                <img className="onboardBanner" src={Forget} alt="Forget Password" />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <ToastContainer />
    </Fragment>
  );
};

export default ResetPassword;
