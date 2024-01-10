import React from 'react';
import { TechnologiesContainer } from '../../Common/Technology/index';

const ProjectCard = ({ data }) => {
  return (
    <div
      className={`project project-${data.projectNumber} glass-background border-radius`}
    >
      <a
        className='project-image-container'
        href={data.imageUrl}
        target='_blank'
        rel='noreferrer'
      >
        <img className='project-image' src={data.image} alt={data.imageAlt} />
      </a>
      <a
        className='project-title'
        href={data.imageUrl}
        target='_blank'
        rel='noreferrer'
      >
        <h3>{data.title}</h3>
      </a>
      <p className='project-description'>{data.description}</p>
      <TechnologiesContainer data={data.technologies} />
    </div>
  );
};

export default ProjectCard;
