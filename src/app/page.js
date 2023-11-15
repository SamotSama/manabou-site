import React from 'react';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Subscription from './components/Suscription';
import Footer from './components/Footer';
import Full from './components/FullSteps';
import Map from './components/Map';


const Home = () => {
  return (
    <div className='scroll-smooth bg-amber-50'>
      <NavBar />
      <Header />
      <Full />
      <Map />
      <Subscription />
      <Footer />
    </div>
  );
};

export default Home;