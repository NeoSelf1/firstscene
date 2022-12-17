import React from 'react';
import Logo_1 from '../components/Logo/Logo_1';
import Logo_2 from '../components/Logo/Logo_2';
import Logo_3 from '../components/Logo/Logo_3';
import Logo_4 from '../components/Logo/Logo_4';
import grid from '../assets/images/gridline.png';
import Footer from '../components/Footer/Footer';
import Loader from '../components/Loader.js';
const Logo = () => {
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
        <Logo_1 />
        <Logo_2 />
        <Logo_3 />
        <Logo_4 />
        <Footer />
      </div>
    </>
  );
};
export default Logo;
