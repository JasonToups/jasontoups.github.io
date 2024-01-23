import React from 'react';

const ImageLink = ({ data }) => {
  const className = data.className ? data.className : 'image-container';
  return (
    <a className={className} href={data.url} target='_blank' rel='noreferrer'>
      <img src={data.source} alt={data.alt} />
    </a>
  );
};

export default ImageLink;
