import React from 'react';
import Typo_0 from '../components/Typography/Typo_0';
import Typo_1 from '../components/Typography/Typo_1';
import Typo_2 from '../components/Typography/Typo_2';
import Typo_3 from '../components/Typography/Typo_3';
import Typo_4 from '../components/Typography/Typo_4';
import Footer from '../components/Footer/Footer';
import Loader from '../components/Loader';
const Typography = () => {
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
        <Typo_0 />
        <Typo_1 />
        <Typo_3 />
        <Typo_2 />
        <Typo_4 />
        <Footer />
      </div>
    </>
  );
};

export default Typography;
