import React from 'react';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import Subscription from '../components/Suscription';
import Footer from '../components/Footer';
import Full from '../components/FullSteps';
import Layout from '../components/layout'


const Home = () => {
  return (
      <Layout>
        <NavBar />
        <Header />
        <Full />
        <Subscription />
        <Footer />
      </Layout>
  );
};

export default Home;