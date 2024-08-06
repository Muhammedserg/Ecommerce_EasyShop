import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import AppURL from '../../api/AppURL';
import Forget from '../../assets/images/forget.jpg';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class ForgetPassword extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      message: '',
      loading: false
    };
  }

  // Forget Password Form Submit Method
  formSubmit = (e) => {
    e.preventDefault();

    const { email } = this.state;

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.", {
        position: "top-right"
      });
      return;
    }

    this.setState({ loading: true });

    axios.post(AppURL.UserForgetPassword, { email })
      .then(response => {
        this.setState({ message: response.data.message, loading: false });

        toast.success(response.data.message, {
          position: "top-right"
        });
      })
      .catch(error => {
        this.setState({ message: error.response.data.message, loading: false });
        toast.error(error.response.data.message, {
          position: "top-right"
        });
      });
  }

  render() {
    return (
      <Fragment>
        <Container>
          <Row className="p-2">
            <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>
              <Row className="text-center">
                <Col className="d-flex justify-content-center" md={6} lg={6} sm={12} xs={12}>
                  <Form className="onboardForm" onSubmit={this.formSubmit}>
                    <h4 className="section-title-login">FORGET PASSWORD?</h4>
                    <input
                      className="form-control m-2"
                      type="email"
                      placeholder="Enter Your Email"
                      onChange={(e) => this.setState({ email: e.target.value })}
                    />
                    <Button type="submit" className="btn btn-block m-2 site-btn-login" disabled={this.state.loading}>
                      {this.state.loading ? 'Processing...' : 'Reset Password'}
                    </Button>
                  </Form>
                </Col>
                <Col className="p-0 Desktop m-0" md={6} lg={6} sm={6} xs={6}>
                  <img className="onboardBanner" src={Forget} alt="Forget" />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <ToastContainer />
      </Fragment>
    );
  }
}

export default ForgetPassword;
