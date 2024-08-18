import React, { useState, Fragment } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import validation from '../../validation/validation';
import axios from 'axios';
import AppURL from '../../api/AppURL';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const onFormSubmit = (event) => {
        event.preventDefault();

        let sendBtn = document.getElementById('sendBtn');
        let contactForm = document.getElementById('contactForm');

        if (message.length === 0) {
            toast.error("Please write your message");
        } else if (name.length === 0) {
            toast.error("Please write down your name");
        } else if (email.length === 0) {
            toast.error("Please write down your Email");
        } else if (!(validation.NameRegx).test(name)) {
            toast.error("Invalid Name");
        } else {
            sendBtn.innerHTML = "Sending...";

            let MyFormData = new FormData();
            MyFormData.append("name", name);
            MyFormData.append("email", email);
            MyFormData.append("message", message);

            axios.post(AppURL.PostContact, MyFormData)
                .then(function (response) {
                    if (response.status === 200 && response.data === 1) {
                        toast.success("Message Send Successfully");
                    } else {
                        toast.success("Message Send Successfully");
                    }
                })
                .catch(function (error) {
                    toast.error("Message Send Failed");
                })
                .finally(() => {
                    sendBtn.innerHTML = "Send";
                    contactForm.reset();
                    setName('');
                    setEmail('');
                    setMessage('');
                });
        }
    };

    return (
        <Fragment>
            <Container>
                <Row className="p-2">
                    <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>
                        <Row className="text-center">
                            <Col className="d-flex justify-content-center" md={6} lg={6} sm={12} xs={12}>
                                <Form id="contactForm" onSubmit={onFormSubmit} className="onboardForm">
                                    <h4 className="section-title-login">CONTACT WITH US</h4>
                                    <h6 className="section-sub-title">Please Contact With Us</h6>
                                    <input onChange={(e) => setName(e.target.value)} value={name} className="form-control m-2" type="text" placeholder="Enter Your Name" />
                                    <input onChange={(e) => setEmail(e.target.value)} value={email} className="form-control m-2" type="email" placeholder="Enter Email" />
                                    <Form.Control onChange={(e) => setMessage(e.target.value)} value={message} className="form-control m-2" as="textarea" rows={3} placeholder="Message" />
                                    <Button id="sendBtn" type="submit" className="btn btn-block m-2 site-btn-login"> Send </Button>
                                </Form>
                            </Col>
                            <Col className="p-0 m-0" md={6} lg={6} sm={12} xs={12}>
                                <div className="contact-details">
                                    <p className="section-title-contact">
                                        45479 Mülheim an der rhur. AL 36104
                                        <br />
                                        Email: Support@easyShop.com
                                    </p>
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2460.679776053712!2d6.878707776027918!3d51.43022892098595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b8b98521cf1d81%3A0x4212c88a5aa2900!2s45479%20M%C3%BClheim%20an%20der%20Ruhr!5e0!3m2!1sen!2sde!4v1688598307743!5m2!1sen!2sde"
                                        width="550"
                                        height="450"
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        loading="lazy">
                                    </iframe>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <ToastContainer />
        </Fragment>
    );
};

export default Contact;
