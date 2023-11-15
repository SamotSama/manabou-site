"use client"

import React from 'react';
import NavBar from '../components/NavBar.jsx';
import Subscription from '../components/Suscription.jsx';
import Footer from '../components/Footer.jsx';
import Map from '../components/Map.jsx'


const Home = () => {
  return (
    <div>
      <NavBar />
      <Map />
      <Subscription />
      <Footer />
    </div>
  );
};

export default Home;

