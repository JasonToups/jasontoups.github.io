import React from 'react';

const ConnectIcon = ({ data }) => {
  return (
    <a
      className='contact-item'
      href={data.url}
      target='_blank'
      rel='noreferrer'
    >
      <img className='contact-image' src={data.source} alt={data.alt} />
    </a>
  );
};

export default ConnectIcon;
