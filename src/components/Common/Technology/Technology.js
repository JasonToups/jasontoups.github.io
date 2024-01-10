import React from 'react';

const Technology = ({ data, index }) => {
  // console.log(data);

  return (
    <img key={index} className='technology' src={data.source} alt={data.alt} />
  );
};

export default Technology;
