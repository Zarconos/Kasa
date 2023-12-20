import React from 'react';
import Header from '../components/header';
import WelcomeSection from '../components/banner';
import CardSection from '../components/cards';
import Footer from '../components/footer';

const Home = () => {
  return (
    <div>
      <Header />
      <div id="main">
      <WelcomeSection />
      <CardSection />
      </div>
      <Footer />
    </div>
  );
};

export default Home;