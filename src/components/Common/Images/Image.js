import React from 'react';

const Image = ({ data, index }) => {
  // console.log(data);

  return (
    <img
      key={index}
      className={data.className}
      src={data.source}
      alt={data.alt}
    />
  );
};

export default Image;
