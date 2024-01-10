import React from 'react';
import {
  TechnologiesContainer,
  Technology,
} from '../../Common/Technology/index';

const ProjectCard = ({ data }) => {
  return (
    <a
      className={`project project-${data.projectNumber} glass-background border-radius`}
      href={data.imageUrl}
      target='_blank'
      rel='noreferrer'
    >
      <div className='project-image-container'>
        <img className='project-image' src={data.image} alt={data.imageAlt} />
      </div>
      <h3 className='project-title'>{data.title}</h3>
      <p className='project-description'>{data.description}</p>
      <TechnologiesContainer data={data.technologies} />
    </a>
  );
};

export default ProjectCard;
