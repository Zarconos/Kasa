import React from 'react';
import banner from '../assets/photos/banner.jpg'

const WelcomeSection = () => {
  return (
    <section id="banner">
      <div id="shadow">
      <img src={banner} alt="Welcome" />
      <div id="banner_text">
      <p>Chez vous, partout et ailleurs</p>
      </div>
      </div>
      
    </section>
  );
};

export default WelcomeSection;
