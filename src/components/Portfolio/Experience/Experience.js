import React from 'react';
import ExperienceCard from './ExperienceCard';
import { experienceData } from '../../../data/portfolioData';

const Experience = ({ data }) => {
  const { header, workExperience } = data;
  return (
    <section className='experience' id='experience'>
      <header className='header'>
        <h2>{header}</h2>
      </header>
      <div
        className='experience-cards--container flex-container flex-direction-column'
        id='engineering-experience'
      >
        {workExperience.map((experience, index) => (
          <ExperienceCard key={index} data={experience} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
