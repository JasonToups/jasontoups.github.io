import React from 'react';
import ProfilePic from '../img/profile-pic-jason-toups.png';

const About = () => {

	return (
		<section className='about'>
      <div className='content-container'>
        <img src={ProfilePic} alt='jason toups profile pic'/>
        <div className='description'>
          <h2>
            About#Me
          </h2>
          <p>
            Thanks for stopping by. I'm a React engineer & designer, with over 15 years of software production experience; 7 years in Javascript, 12 years in QA and 3 years in UI/UX Design. My specialty is working with Hooks, Redux & Thunk.</p>
          <p>
            I designed all of the vector graphics here in Affinity Designer, and styled my portfolio from scratch with Sass & Mixins
          </p>
          <p>
            I can design, engineer, & test new applications.</p>
          <p>
            I’ve been working in Agile software production environments for over a decade. When working in a team environment, my task-tracking, written communication & documentation are unmatched.
          </p>
          <p>If you are looking for a unicorn that can do just about anything in the digital realm, you’ve found your engineer.<br/>🦄👨‍💻✨</p>
        </div>
      </div>
		</section>
	);
};

export default About;
