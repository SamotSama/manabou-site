"use client"

import React from 'react';
import NavBar from '../../components/NavBar';
import Subscription from '../../components/Suscription';
import Footer from '../../components/Footer';
import Videos from '../../components/Videos'

const Home = () => {
  return (
    <div>
      <NavBar />
      <Videos />
      <Subscription />
      <Footer />
    </div>
  );
};

export default Home;

