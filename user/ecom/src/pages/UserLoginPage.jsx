import React, { useEffect, Fragment } from 'react';
import Footer from '../components/Common/Footer';
import NavMenu from '../components/Common/NaveMenu';
import UserLogin from '../components/Common/UserLogin';

const UserLoginPage = ({ setUser, user }) => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <Fragment>
      <NavMenu user={user} />
      <UserLogin setUser={setUser} user={user} />
      <Footer />
    </Fragment>
  );
};

export default UserLoginPage;
