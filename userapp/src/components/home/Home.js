import React from 'react';
import Carousel from './card1home';
// import Carousel from './card1home';
import Card3 from './card3';
import CardList from './card2';
import Card10 from './card3';
import Footer from '../Footer';
// import Slider from './slider';
const Home = () => {
  const image = 'https://your-image-url-here.jpg'; 

  return (
    <div className="home">
<Carousel />
<CardList />
<Card10 />
{/* <Card2 />
<Card5 />
<Card4 />
<Card3 />
<Slider /> */}
{/* <Footer /> */}
    </div>
  );
};

export default Home;