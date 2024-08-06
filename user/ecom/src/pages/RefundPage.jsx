import React, { useEffect, Fragment } from 'react';
import Footer from '../components/Common/Footer';
import NavMenu from '../components/Common/NaveMenu';
import Refund from '../components/others/Refund';

const RefundPage = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <Fragment>
      <NavMenu />
      <Refund />
      <Footer />
    </Fragment>
  );
};

export default RefundPage;
