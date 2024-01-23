import React from 'react';

const Image = ({ data }) => {
  const className = data.className ? data.className : 'image';
  return <img className={className} src={data.source} alt={data.alt} />;
};

export default Image;
