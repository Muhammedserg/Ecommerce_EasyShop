import React, { useEffect, Fragment } from 'react';
import Footer from '../components/Common/Footer';
import NavMenu from '../components/Common/NaveMenu';
import Notification from '../components/Notification/Notification';

const NotificationPage = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <Fragment>
      <NavMenu />
      <Notification />
      <Footer />
    </Fragment>
  );
};

export default NotificationPage;
