import React from 'react';

const Header = () => {

	return (
		<div className='header'>
			<div className="hero">
        <img className="header-logo" src='./img/name/logo-jason-toups.svg'>
        <h3 className="mb-5">
          <em
            >Software Developer<br />
            with over 15 years of software production experience.</em
          >
        </h3>
        <a className="btn btn-primary btn-xl js-scroll-trigger" href="#about"
          >Find Out More</a
        >
      </div>
		</div>
	);
};

export default Header;
