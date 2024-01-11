import React from 'react';
import ExperienceCard from './ExperienceCard';

const Experience = ({ data }) => {
  const { header, workExperience } = data;
  return (
    <section className='experience' id='experience'>
      <div className='experience-content'>
        <header className='header'>
          <h2>{header}</h2>
        </header>
        <section
          className='experience-cards--container'
          id='engineering-experience'
        >
          {workExperience.map((experience, index) => (
            <ExperienceCard key={index} data={experience} />
          ))}
        </section>
      </div>
    </section>
  );
};

export default Experience;
