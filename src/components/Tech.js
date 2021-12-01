import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faJs, faHtml5, faSass, faNodeJs, faEnvira } from '@fortawesome/free-brands-svg-icons';

const Tech = () => {

	return (
		<section className='tech'>
      <div className="heading">
        <h2>Tech Stack</h2>
        <p>I work with these technologies:</p>
      </div>
      <div className="tech-items--container flex-container">
        <div className="tech-item">
          <span className="service-icon">
            <FontAwesomeIcon icon={faReact} />
          </span>
          <p>
            React, Redux & Hooks
          </p>
        </div>
        <div className="tech-item">
          <span className="service-icon">
            <FontAwesomeIcon icon={faJs} />
          </span>
          <p>
            Javascript ES6
          </p>
        </div>
        <div className="tech-item">
          <span className="service-icon">
            <FontAwesomeIcon icon={faHtml5} />
          </span>
          <p>
            HTML 5
          </p>
        </div>
        <div className="tech-item">
          <span className="service-icon">
            <FontAwesomeIcon icon={faSass} />
          </span>
          <p>
            CSS 3
          </p>
        </div>
        <div className="tech-item">
          <span className="service-icon">
            <FontAwesomeIcon icon={faNodeJs} />
          </span>
          <p>
            Node JS
          </p>
        </div>
        <div className="tech-item">
          <span className="service-icon">
            <FontAwesomeIcon icon={faEnvira} />
          </span>
          <p>
            MongoDB
          </p>
        </div>
      </div>
    </section>
	);
};

export default Tech;
