import React from 'react';

const ImageLink = ({ data }) => {
  return (
    <a
      className={`${
        data.className?.container ? data.className.container : 'image-container'
      }`}
      href={data.url}
      target='_blank'
      rel='noreferrer'
    >
      <img
        className={`${data.className?.img ? data.className.img : 'image'}`}
        src={data.source}
        alt={data.alt}
      />
    </a>
  );
};

export default ImageLink;
