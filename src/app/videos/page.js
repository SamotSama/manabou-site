"use client"

import React from 'react';
import NavBar from '/src/app/components/NavBar.jsx';
import Subscription from '/src/app/components/Suscription.jsx';
import Footer from '/src/app/components/Footer.jsx';


const Home = () => {
  return (
    <div className=' bg-amber-50'>
      <NavBar />

      <Subscription />
      <Footer />
    </div>
  );
};

export default Home;

