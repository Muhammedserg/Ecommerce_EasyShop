import React, { Fragment, Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';

import AppURL from '../api/AppURL';
import NavMenu from '../components/Common/NaveMenu';
import CartPage from '../pages/CartPage';
import ContactPage from '../pages/ContactPage';
import FavouritePage from '../pages/FavouritePage';
import ForgetPasswordPage from '../pages/ForgetPasswordPage';
import Homepage from '../pages/Homepage';
import NotificationPage from '../pages/NotificationPage';
import PrivacyPage from '../pages/PrivacyPage';
import ProductCategoryPageWrapper from '../pages/ProductCategoryPage';
import ProductDetailsPage from '../pages/ProductDetailsPage';
import ProductSubCategoryPage from '../pages/ProductSubCategoryPage';
import ProfilePage from '../pages/ProfilePage';
import PurchasePage from '../pages/PurchasePage';
import RefundPage from '../pages/RefundPage';
import RegisterPage from '../pages/RegisterPage';
import ResetPasswordPage from '../pages/ResetPasswordPage';
import UserLoginPage from '../pages/UserLoginPage';

class AppRoute extends Component {
  constructor() {
    super();
    this.state = {
      user: {}
    };
  }

  componentDidMount() {
    this.getUserData();
  }

  getUserData = async () => {
    try {
      const response = await axios.get(AppURL.UserData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      this.setUser(response.data);
    } catch (error) {
      // Fehlerbehandlung falls erforderlich
    }
  }

  setUser = (user) => {
    this.setState({ user: user });
  }

  render() {
    return (
      <Fragment>
        <NavMenu user={this.state.user} />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/favourite" element={<FavouritePage />} />
          <Route path="/forget" element={<ForgetPasswordPage key={Date.now()} />} />
          <Route path="/login" element={<UserLoginPage setUser={this.setUser} user={this.state.user} />} />
          <Route path="/notification" element={<NotificationPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/productcategory/:category" element={<ProductCategoryPageWrapper />} />
          <Route path="/productdetails/:code" element={<ProductDetailsPage user={this.state.user} key={Date.now()} />} />
          <Route path="/productsubcategory/:category/:subcategory" element={<ProductSubCategoryPage />} />
          <Route path="/purchase" element={<PurchasePage />} />
          <Route path="/refund" element={<RefundPage />} />
          <Route path="/register" element={<RegisterPage user={this.state.user} setUser={this.setUser} />} />
          <Route path="/reset/:id" element={<ResetPasswordPage key={Date.now()} />} />
          <Route path="/profile" element={<ProfilePage user={this.state.user} setUser={this.setUser} />} />
        </Routes>
      </Fragment>
    );
  }
}

export default AppRoute;
