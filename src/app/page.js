import React from 'react';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Subscription from './components/Suscription';
import Footer from './components/Footer';
import Full from './components/FullSteps';
import Map from './components/Map';


const Home = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <Full />
      <Subscription />
      <Footer />
    </div>
  );
};

export default Home;