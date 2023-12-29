import React from 'react';
import { motion } from 'framer-motion/dist/framer-motion';

const Header = ({ data }) => {
  const { image, imageAlt, title } = data;

  return (
    <div className='app-header flex-container .flex-direction-column'>
      <div className='content-container'>
        <motion.img
          className='header-logo'
          alt={imageAlt}
          src={image}
          whileHover={{ scale: 1.1 }}
        />
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default Header;
