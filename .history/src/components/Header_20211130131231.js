import React from 'react';
import Logo from '../img/name/logo-jason-toups.svg'

const Header = () => {

	return (
		<div className='header'>
      <div className='content-container'>
        <img className="header-logo" alt="jason toups logo" src={Logo} />
        <h1>
          Software Developer<br />
          with over 15 years of software production experience.
        </h1>
      </div>
		</div>
	);
};

export default Header;
