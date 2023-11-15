"use client"

import React from 'react';
import NavBar from '../components/NavBar';
import Subscription from '../components/Suscription.jsx';
import Footer from '../components/Footer.jsx';


const Home = () => {
  return (
    <div>
      <NavBar />

      <Subscription />
      <Footer />
    </div>
  );
};

export default Home;

