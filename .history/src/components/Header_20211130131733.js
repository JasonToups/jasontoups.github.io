import React from 'react';
import Logo from '../img/name/logo-jason-toups.svg'

const Header = () => {

	return (
		<div className='header'>
      <div className='content-container'>
        <img className="header-logo" alt="jason toups logo" src={Logo} />
        <h1>
          Welcome to my site<br />
          Scroll down to see what I've been working on
        </h1>
      </div>
		</div>
	);
};

export default Header;
