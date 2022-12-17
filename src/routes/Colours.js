import React from 'react';
import Colours_0 from '../components/Colours/Colours_0';
import Colours_1 from '../components/Colours/Colours_1';
import Colours_2 from '../components/Colours/Colours_2';
import Loader from '../components/Loader';
import Footer from '../components/Footer/Footer';
const Colours = () => {
  return (
    <>
      <Loader />
      <div
        style={{
          animation: 'fadeIn 2s backwards',
          animationDelay: '1.4s',
        }}
        className='content'
      >
        <Colours_0 />
        <Colours_1 />
        <Colours_2 />
        <Footer />
      </div>
    </>
  );
};

export default Colours;
