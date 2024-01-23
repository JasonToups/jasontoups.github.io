import React from 'react';
import { motion } from 'framer-motion';

const ImageMotion = ({ data }) => {
  const className = data.className ? data.className : 'image-container';
  return (
    <motion.img
      className={className}
      src={data.source}
      alt={data.alt}
      animate={data.animate}
      transition={data.transition}
    />
  );
};

export default ImageMotion;
