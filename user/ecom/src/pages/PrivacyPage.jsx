import React, { useEffect, Fragment } from 'react';
import Footer from '../components/Common/Footer';
import NavMenu from '../components/Common/NaveMenu';
import Privacy from '../components/others/Privacy';

const PrivacyPage = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <Fragment>
      <NavMenu />
      <Privacy />
      <Footer />
    </Fragment>
  );
};

export default PrivacyPage;
