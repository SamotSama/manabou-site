import React from 'react';
import NavBar from './components/navbar';
import Header from './components/header';
import Subscription from './components/Suscription';
import Footer from './components/footer';


const Home = () => {
  return (
    <div className='scroll-smooth'>
      <NavBar />
      <Header />
      <Subscription />
      <Footer />
    </div>
  );
};

export default Home;