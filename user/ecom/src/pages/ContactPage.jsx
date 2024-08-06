import React, { useEffect, Fragment } from 'react';
import Contact from '../components/Common/Contact';
import Footer from '../components/Common/Footer';
import NavMenu from '../components/Common/NaveMenu';

const ContactPage = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <Fragment>
      <NavMenu />
      <Contact />
        <Footer />
    </Fragment>
  );
};

export default ContactPage;
