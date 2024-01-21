import React from 'react';

const Image = ({ data }) => {
  // console.log(data);

  return <img className={data.className} src={data.source} alt={data.alt} />;
};

export default Image;
