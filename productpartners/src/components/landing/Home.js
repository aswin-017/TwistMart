import React from 'react';
import { Element } from 'react-scroll';
import LandingPage from './Landing';
import Services from './Services';
import Works from './Works';
import Partners from './Partners';
import FAQ from './FAQ';
import ContactUs from './ContactUs';
import Footer from './Footer';

const Home = () => {
  return (
    <div>
      <LandingPage />
      <Element name="services">
        <Services />
      </Element>
      <Element name="works">
        <Works />
      </Element>
      <Partners />
      <Element name="faq">
        <FAQ />
      </Element>
      <Element name="contact">
        <ContactUs />
      </Element>
      <Footer />
    </div>
  );
};

export default Home;
