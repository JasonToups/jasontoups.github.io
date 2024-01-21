import React from 'react';

const ImageLink = ({ data }) => {
  // console.log(data);

  return (
    <a
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
