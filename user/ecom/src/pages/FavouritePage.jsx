import React, { useEffect, Fragment } from 'react';
import Footer from '../components/Common/Footer';
import NavMenu from '../components/Common/NaveMenu';
import Favourite from '../components/Favourite/Favourite'; // Assuming Favourite is the correct component

const FavouritePage = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <Fragment>
      <NavMenu />
      <Favourite />
      <Footer />
    </Fragment>
  );
};

export default FavouritePage;
