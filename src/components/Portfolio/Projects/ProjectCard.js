import React from 'react';

const ProjectCard = ({cardImage, cardImageAlt, cardUrl, projectNumber, children}) => {

	return (
    <a
    className={`project project-${projectNumber}`}
    href={cardUrl}
    target="_blank"
    rel="noreferrer"
  >
    <div className="project-image-container">
      <img
        className="project-image"
        src={cardImage}
        alt={cardImageAlt}
      />   
    </div>
    <span className="project-description">
      <span className="caption-content">
        {children}
      </span>
    </span>
  </a>
	);
};

export default ProjectCard;
