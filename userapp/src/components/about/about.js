import React from 'react';
// import HeroSection from './card1'; // Ensure this path is correct
import PartnersCarousel from './card2'; // Ensure this path is correct
import '../../assets/css/about.css'; // Ensure this path is correct
import Card3 from './card3';
import Card4 from './card4';
import CardList from './card1';
import Footer from '../Footer';

const AboutUs = () => {
  const image = 'https://media.istockphoto.com/id/1404203888/photo/contact-us-wood-cube-symbol-chat-mail-address-and-mobile-phone-website-page-contact-us.jpg?s=2048x2048&w=is&k=20&c=BRzYcTLZQJggsIl-tMlfoNLIpSzkVZMOfEVJlDsgYxg='
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
      {/* <Footer/> */}
  

    </div>
  );
};

export default AboutUs;