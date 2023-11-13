import React from 'react';
import NavBar from './components/navbar';
import Header from './components/header';
import Subscription from './components/Suscription';
import Footer from './components/footer';
import Full from './components/FullSteps';
import Map from './components/map';


const Home = () => {
  return (
    <div className='scroll-smooth bg-amber-50'>
      <NavBar />
      <Header />
      <Subscription />
      <Full />
      <Map id="institutos" />
      <Subscription />
      <Footer />
    </div>
  );
};

export default Home;