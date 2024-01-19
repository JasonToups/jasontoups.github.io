import React from 'react';
import { motion } from 'framer-motion';

const ImageMotion = ({ data, index }) => {
  // console.log(data);

  return (
    <motion.img
      key={index}
      className={data.className}
      src={data.source}
      alt={data.alt}
      animate={data.animate}
      transition={data.transition}
    />
  );
};

export default ImageMotion;
