"use client"

import React from 'react';
import NavBar from '../components/NavBar.jsx';
import Subscription from '../components/Suscription.jsx';
import Footer from '../components/Footer.jsx';
import Map from '../components/Map.jsx'
import Head from 'next/head'


const Home = () => {
  return (
    <Head>
      <NavBar />
      <Map />
      <Subscription />
      <Footer />
    </Head>
  );
};

export default Home;

