import React from 'react';
import NavBar from './components/navbar';
import Header from './components/header';
import Subscription from './components/Suscription';
import Footer from './components/footer';
import Full from './components/FullSteps';


const Home = () => {
  return (
    <div className='scroll-smooth bg-amber-50'>
      <NavBar />
      <Header />
      <Subscription />
      <Full />
      <Subscription />
      <Footer />
    </div>
  );
};

export default Home;