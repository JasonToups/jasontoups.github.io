import React from 'react';
import ImageLink from '../../Common/Images/ImageLink';
import { TechnologiesContainer } from '../../Common/Technology/index';

const ProjectCard = ({ data }) => {
  return (
    <div
      className={`project project-${data.projectNumber} glass-background border-radius`}
    >
      <ImageLink data={data.image} />
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
