import React from 'react';
import ImageLink from '../Images/ImageLink';

const Technology = ({ data, index }) => {
  return <ImageLink data={data} key={index} />;
};

export default Technology;
