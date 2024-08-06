import React, { Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import Apple from '../../assets/images/apple.png';
import Google from '../../assets/images/google.png';

const FooterDesktop = () => {
  return (
    <Fragment>
      <div className="footerback m-0 mt-5 pt-3 shadow-sm">
        <Container>
          <Row className="px-0 my-5 text-center">
            <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
              <h5 className="footer-menu-title">OFFICE ADDRESS</h5>
              <p>
                45479, Mülheim an der Ruhr, AL 36104 <br />
                Email: Support@easyShop.com
              </p>
              <h5 className="footer-menu-title">SOCIAL LINK</h5>
              <a href="#"><i className="fab m-1 h4 fa-facebook"></i></a>
              <a href="#"><i className="fab m-1 h4 fa-instagram"></i></a>
              <a href="#"><i className="fab m-1 h4 fa-twitter"></i></a>
            </Col>

            <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
              <h5 className="footer-menu-title">THE COMPANY</h5>
              <Link to="/" className="footer-link">About Us</Link><br />
              <Link to="/" className="footer-link">Company Profile</Link><br />
              <Link to="/contact" className="footer-link">Contact Us</Link><br />
            </Col>

            <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
              <h5 className="footer-menu-title">POLICIES</h5>
              <Link to="/purchase" className="footer-link">How To Purchase</Link><br />
              <Link to="/privacy" className="footer-link">Privacy Policy</Link><br />
              <Link to="/refund" className="footer-link">Refund Policy</Link><br />
            </Col>

            <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
              <h5 className="footer-menu-title">DOWNLOAD APPS</h5>
              <a href="#"><img src={Google} alt="Google Play" className="img-fluid" /></a><br />
              <a href="#"><img className="mt-2 img-fluid" src={Apple} alt="Apple Store" /></a><br />
            </Col>
          </Row>
          <Row className="px-0 text-center">
            <Col className="p-2" md={12}>
              <h5 className="footer-menu-title">
                <FontAwesomeIcon icon={faGlobe} /> Change Your Language
              </h5>
              <div id="google_translate_element" className="translate-element"></div>
            </Col>
          </Row>
        </Container>
        <Container fluid className="text-center m-0 pt-3 pb-1 bg-dark">
          <Container>
            <Row>
              <Col>
                <h6 className="text-white">© Copyright 2024 by EasyShop, All Rights Reserved</h6>
              </Col>
            </Row>
          </Container>
        </Container>
      </div>
    </Fragment>
  );
};

export default FooterDesktop;
