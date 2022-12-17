import React from 'react';
import Symbol_0 from '../components/Symbols/Symbol_0';
import Symbol_1 from '../components/Symbols/Symbol_1';
import Symbol_2 from '../components/Symbols/Symbol_2';
import Loader from '../components/Loader';
import Footer from '../components/Footer/Footer';
import Symbol_3 from '../components/Symbols/Symbol_3';
const Symbols = () => {
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
        <Symbol_0 />
        <Symbol_1 />
        <Symbol_2 />
        <Symbol_3 />
        <Footer />
      </div>
    </>
  );
};
export default Symbols;
