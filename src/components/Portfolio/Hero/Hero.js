import React from 'react';
import Spline from '@splinetool/react-spline';

// import { motion } from 'framer-motion/dist/framer-motion';
// https://prod.spline.design/R-LxSjd0SI8iYVTd/scene.splinecode

// import { Application } from '@splinetool/runtime';

const Hero = ({ data }) => {
  const { title } = data;
  // const canvas = document.getElementById('canvas3d');
  // const app = new Application(canvas);
  // app.load('https://prod.spline.design/R-LxSjd0SI8iYVTd/scene.splinecode');

  return (
    <div className='app-header flex-container .flex-direction-column'>
      <div className='content-container'>
        <Spline scene='https://prod.spline.design/R-LxSjd0SI8iYVTd/scene.splinecode' />
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default Hero;
