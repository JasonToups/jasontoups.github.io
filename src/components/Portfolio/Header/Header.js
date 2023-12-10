import React from 'react';

const Header = ({ data }) => {
  const { image, imageAlt, title, subtitle } = data;

  return (
    <div className='app-header flex-container .flex-direction-column'>
      <div className='content-container'>
        <img className='header-logo' alt={imageAlt} src={image} />
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
      </div>
    </div>
  );
};

export default Header;
