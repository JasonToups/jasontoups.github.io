import React from 'react';

const Image = ({ data }) => {
  return (
    <img
      className={`${data.className ? data.className : 'image'}`}
      src={data.source}
      alt={data.alt}
    />
  );
};

export default Image;
