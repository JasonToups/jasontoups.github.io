import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faReact,
  faJs,
  faHtml5,
  faSass,
  faNodeJs,
  faEnvira,
} from '@fortawesome/free-brands-svg-icons';

const TechStack = () => {
  return (
    <section className='tech'>
      <header className='header'>
        <h2>.Tech.Stack</h2>
        <p>I work with these technologies:</p>
      </header>
      <div className='tech-items--container flex-container'>
        <div className='tech-item'>
          <span className='service-icon'>
            <FontAwesomeIcon icon={faReact} />
          </span>
          <p>React, Redux & Hooks</p>
        </div>
        <div className='tech-item'>
          <span className='service-icon'>
            <FontAwesomeIcon icon={faJs} />
          </span>
          <p>Javascript ES6</p>
        </div>
        <div className='tech-item'>
          <span className='service-icon'>
            <FontAwesomeIcon icon={faSass} />
          </span>
          <p>Sass & Mixins</p>
        </div>
        <div className='tech-item'>
          <span className='service-icon'>
            <FontAwesomeIcon icon={faHtml5} />
          </span>
          <p>HTML 5</p>
        </div>
        <div className='tech-item'>
          <span className='service-icon'>
            <FontAwesomeIcon icon={faNodeJs} />
          </span>
          <p>Node JS</p>
        </div>
        <div className='tech-item'>
          <span className='service-icon'>
            <FontAwesomeIcon icon={faEnvira} />
          </span>
          <p>MongoDB</p>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
