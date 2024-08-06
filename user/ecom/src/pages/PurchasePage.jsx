import React, { useEffect, Fragment } from 'react';
import Footer from '../components/Common/Footer';
import NavMenu from '../components/Common/NaveMenu';
import Purchase from '../components/others/Purchase';

const PurchasePage = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <Fragment>
      <NavMenu />
      <Purchase />
      <Footer />
    </Fragment>
  );
};

export default PurchasePage;
