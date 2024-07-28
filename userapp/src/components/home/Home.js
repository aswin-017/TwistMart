import React from 'react';
import Carousel from './card1home';
// import Carousel from './card1home';
import Card2 from './card2';
import Card3 from './card3';
import Card4 from './bank';
import Card5 from './card4';
// import Slider from './slider';
const Home = () => {
  const image = 'https://your-image-url-here.jpg'; 

  return (
    <div className="home">
<Carousel />
<Card2 />
<Card5 />
<Card4 />
<Card3 />
{/* <Slider /> */}
    </div>
  );
};

export default Home;