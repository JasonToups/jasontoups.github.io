import React from 'react';

const Technology = ({ item, index }) => {
  // I don't think this data needs to be desctructured.
  // const {
  //   image,
  //   imageAlt,
  //   imageUrl,
  //   title,
  //   imageTemp,
  //   company,
  //   job,
  //   tech,
  //   description,
  // } = data;

  return (
    <img key={index} className='technology' src={item.source} alt={item.alt} />
  );
};

export default Technology;
