import React from 'react';
import Logo from '../../../img/svg/logo-jason-toups.svg';

const Header = () => {
  return (
    <div className='app-header flex-container .flex-direction-column'>
      <div className='content-container'>
        <img className='header-logo' alt='jason toups logo' src={Logo} />
        <h1>design-oriented software engineer</h1>
      </div>
    </div>
  );
};

export default Header;
