import React from 'react';
// import HeroSection from './card1'; // Ensure this path is correct
import PartnersCarousel from './card2'; // Ensure this path is correct
import '../../assets/css/about.css'; // Ensure this path is correct
import Card3 from './card3';
import Card4 from './card4';
import CardList from './card1';
import Footer from '../Footer';

const AboutUs = () => {
  const image = 'https://img.freepik.com/free-photo/partnership-handshake-innovation-corporate-business-concept_53876-104048.jpg?w=996&t=st=1722007681~exp=1722008281~hmac=4355d73c230a549c4211bcf6a3eb8368ee20a35003a2f38737fdcac4a7b12de8'
  return (
    <div className="about-us">
      <div className="about-image-container">
        <img src={image} alt="About Us" className="about-image" />
        <div className="overlay-content">
          <h1> Welcome to Twistmart,</h1>
          <h2>
            where innovation meets convenience in the world of hypermarket solutions. 
          </h2>
        </div>
      </div>
      <Card3/>
      <Card4 />  
      <CardList /> 
      <Footer/>
  

    </div>
  );
};

export default AboutUs;