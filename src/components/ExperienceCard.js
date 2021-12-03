import React from 'react';

const ExperienceCard = ({cardImage, cardImageAlt, cardUrl, children}) => {

	return (
    <div className="experience-card">
        <div className="experience-card--image-container">
          <a 
            className="experience-card--link" href={cardUrl} target="_blank"
            rel="noreferrer"
          >
            <img className="experience-card--image" src={cardImage} alt={cardImageAlt}/>
          </a>
        </div>
        <div className="experience-card--description">
          {children}
        </div>
    </div>
	);
};

export default ExperienceCard;
