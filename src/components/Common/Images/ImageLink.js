import React from 'react';

const ImageLink = ({ data, index }) => {
  // console.log(data);

  return (
    <a
      key={index}
      className={data.className.container}
      href={data.url}
      target='_blank'
      rel='noreferrer'
    >
      <img className={data.className.img} src={data.source} alt={data.alt} />
    </a>
  );
};

export default ImageLink;
