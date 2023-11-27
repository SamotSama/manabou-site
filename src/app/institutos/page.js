"use client"

import React from 'react';
import NavBar from '../components/NavBar';
import Subscription from '../components/Suscription';
import Footer from '../components/Footer';
import Map from '../components/Map'


const Home = () => {
  return (
    <div >
      <NavBar />
      <Map />
      <Subscription />
      <Footer />
    </div>
  );
};

export default Home;

