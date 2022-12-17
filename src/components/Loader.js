import React from 'react';
import './Loader.scss';
import loadingAnim from '../assets/images/loadingAnim.gif';
const loading = () => {
  return (
    <div className='loader_base'>
      <img src={loadingAnim} alt='loading' />
    </div>
  );
};

export default loading;
