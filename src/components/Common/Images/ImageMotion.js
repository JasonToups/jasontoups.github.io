import React from 'react';
import { motion } from 'framer-motion';

const ImageMotion = ({ data }) => {
  return (
    <motion.img
      className={`${data.className ? data.className : 'image'}`}
      src={data.source}
      alt={data.alt}
      animate={data.animate}
      transition={data.transition}
    />
  );
};

export default ImageMotion;
