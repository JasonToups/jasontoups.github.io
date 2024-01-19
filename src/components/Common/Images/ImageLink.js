import React from 'react';

const ImageLink = ({ data, index }) => {
  // console.log(data);

  return (
    <a
      key={index}
      className={data.className.link}
      href={data.url}
      target='_blank'
      rel='noreferrer'
    >
      <img className={data.className.image} src={data.source} alt={data.alt} />
    </a>
  );
};

export default ImageLink;
