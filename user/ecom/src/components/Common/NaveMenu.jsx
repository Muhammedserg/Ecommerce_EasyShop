import React, { useState, Fragment } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { Link } from "react-router-dom";
import MegaMenu from '../home/MegaMenu';
import Logo from '../../assets/images/easyshop.png';
import Bars from '../../assets/images/bars.png';

const NavMenu = () => {
  const [sideNavState, setSideNavState] = useState("sideNavClose");
  const [contentOverState, setContentOverState] = useState("ContentOverlayClose");
  const user = JSON.parse(localStorage.getItem('user')) || null;

  const menuBarClickHandler = () => {
    sideNavOpenClose();
  }

  const contentOverlayClickHandler = () => {
    sideNavOpenClose();
  }

  const sideNavOpenClose = () => {
    if (sideNavState === "sideNavOpen") {
      setSideNavState("sideNavClose");
      setContentOverState("ContentOverlayClose");
    } else {
      setSideNavState("sideNavOpen");
      setContentOverState("ContentOverlayOpen");
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = "/login"; 
  }

  const userName = user && user.name ? user.name : null;

  return (
    <Fragment>
      <div className="TopSectionDown">
        <Container fluid className="fixed-top shadow-sm p-1 mb-0 bg-white">
          <Row className="align-items-center">
            <Col lg={3} md={3} sm={3} xs={6} className="d-flex align-items-center">
              <img onClick={menuBarClickHandler} className="bar-img" src={Bars} alt="Menu Icon" />
              <Link to="/">
                <img className="nav-logo" src={Logo} alt="EasyShop Logo" />
              </Link>
            </Col>
            <Col lg={6} md={6} sm={6} xs={6} className="d-flex justify-content-center">
              <Form className="search-bar w-100 d-flex">
                <Form.Control
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                />
                <Button type="submit" className="search-btn">
                  <i className="fa fa-search"></i>
                </Button>
              </Form>
            </Col>
            <Col lg={3} md={3} sm={3} xs={6} className="d-flex justify-content-end align-items-center nav-right-icons">
              <Link to="/favourite" className="btn d-none d-md-block">
                <i className="fa h4 fa-heart"></i>
                <sup><span className="badge text-white bg-danger">3</span></sup>
              </Link>
              <Link to="/notification" className="btn">
                <i className="fa h4 fa-bell"></i>
                <sup><span className="badge text-white bg-danger">5</span></sup>
              </Link>
              {userName ? (
                <>
                  <Link to="/profile" className="btn btn-text small-btn">Profile</Link>
                  <Button className="btn btn-text small-btn logout-btn" onClick={handleLogout}>Logout</Button>
                </>
              ) : (
                <>
                  <Link to="/login" className="btn btn-text small-btn">Login</Link>
                  <Link to="/register" className="btn btn-text small-btn">Register</Link>
                </>
              )}
              <Link to="/cart" className="cart-btn btn">
                <i className="fa fa-shopping-cart"></i> <span className="d-none d-sm-inline">0</span>
              </Link>
            </Col>
          </Row>
        </Container>
        <div className={sideNavState}>
          <MegaMenu />
          <hr className="w-80" />
        </div>
        <div onClick={contentOverlayClickHandler} className={contentOverState}></div>
      </div>
    </Fragment>
  );
}

export default NavMenu;
