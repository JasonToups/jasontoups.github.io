import React from 'react';
import ExperienceCard from './ExperienceCard';

const Experience = ({ data }) => {
  const { header, workExperience } = data;
  return (
    <section className='experience' id='experience'>
      <header className='header'>
        <h2>{header}</h2>
      </header>
      <div className='section-container'>
        <div className='section-background'></div>
        <div className='section-foreground'>
          <div className='experience-content'>
            <section
              className='experience-cards--container'
              id='engineering-experience'
            >
              {workExperience.map((experience, index) => (
                <ExperienceCard key={index} data={experience} />
              ))}
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
