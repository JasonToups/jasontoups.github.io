import React from 'react';

const Image = ({ data }) => {
  return (
    <img
      className={`${data.className ? data.className : 'img'}`}
      src={data.source}
      alt={data.alt}
    />
  );
};

export default Image;
