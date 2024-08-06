import React, { useEffect, Fragment } from 'react';
import Footer from '../components/Common/Footer';
import NavMenu from '../components/Common/NaveMenu';
import Cart from '../components/Cart/Cart'; // Assuming Favourite is the correct component

const CartPage = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <Fragment>
      <NavMenu />
      <Cart />
      <Footer />
    </Fragment>
  );
};

export default CartPage;
