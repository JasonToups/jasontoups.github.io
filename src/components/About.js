import React from 'react';
import ProfilePic from '../img/profile-pic-jason-toups.png';

const About = () => {

	return (
		<section className='about'>
      <div className='content-container flex-container flex-direction-row'>
        <img src={ProfilePic} alt='jason toups profile pic'/>
        <div className='description'>
          <h2>
            About Me
          </h2>
          <p>
            I'm an engineer, with over 15 years of mobile
            software production experience; 7 years in Javascript, 12 years in
            QA and 3 years in UI/UX Design.<br /><br />
            I can design, engineer, and test new products.<br /><br />
            In total, I’ve submitted over 30 apps to the iOS App Store and
            designed over 150 playable ads.
          </p>
        </div>
      </div>
		</section>
	);
};

export default About;
