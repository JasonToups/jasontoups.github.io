import React from 'react';

const ProjectCard = ({
  image,
  imageAlt,
  imageUrl,
  projectNumber,
  children,
}) => {
  return (
    <a
      className={`project project-${projectNumber}`}
      href={imageUrl}
      target='_blank'
      rel='noreferrer'
    >
      <div className='project-image-container'>
        <img className='project-image' src={image} alt={imageAlt} />
      </div>
      <span className='project-description'>
        <span className='caption-content'>{children}</span>
      </span>
    </a>
  );
};

export default ProjectCard;
