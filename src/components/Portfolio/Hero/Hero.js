import React, { useState } from 'react';
import Spline from '@splinetool/react-spline';

const Hero = ({ data }) => {
  const { title } = data;
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className='hero flex-container .flex-direction-column'>
      <div className='content-container'>
        {isLoading && <h2 className='loading'>Loading...</h2>}
        <Spline
          onLoad={() => setIsLoading(false)}
          className='spline-canvas'
          scene='https://prod.spline.design/R-LxSjd0SI8iYVTd/scene.splinecode'
        />
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default Hero;
