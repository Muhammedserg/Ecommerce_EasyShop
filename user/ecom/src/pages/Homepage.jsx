import React, { useEffect, Fragment } from 'react';
import axios from 'axios';
import Footer from '../components/Common/Footer';
import FeaturedProducts from '../components/home/FeaturedProducts';
import Categories from '../components/home/Categories';
import Collection from '../components/home/Collection';
import NewArrival from '../components/home/NewArrival';
import NaveMenu from '../components/Common/NaveMenu';
import HomeTopMobile from '../components/home/HomeTopMobile';
import AppURL from '../api/AppURL';

const HomePage = () => {
  
  const GetVisitorDetails = () => {
    axios.get(AppURL.VisitorDetails)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  useEffect(() => {
    window.scroll(0, 0);
    GetVisitorDetails();
  }, []);

  return (
    <Fragment>
      <NaveMenu />
      <HomeTopMobile />
      <FeaturedProducts />
      <NewArrival />
      <Categories />
      <Collection />
      <Footer />
    </Fragment>
  );
};

export default HomePage;
