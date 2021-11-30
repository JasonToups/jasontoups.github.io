import React from 'react';
import Logo from '../img/name/logo-jason-toups.svg'

const Header = () => {

	return (
		<div className='header'>
      <div className='content-container'>
        <img className="header-logo" alt="jason toups logo" src={Logo} />
        <p>
          software engineer
        </p>
      </div>
		</div>
	);
};

export default Header;
