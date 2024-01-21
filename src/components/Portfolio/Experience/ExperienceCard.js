import React from 'react';
import { TechnologiesContainer } from '../../Common/Technology/index';

const ExperienceCard = ({ data }) => {
  const { company, job } = data;

  return (
    <main className='experience-card'>
      <section className='company glass-foreground'>
        <h3>{company.name}</h3>
        <aside>{company.description}</aside>
      </section>
      <section className='description debossed'>
        {job.description.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </section>
      <section className='image glass-foreground'>
        <a
          className='experience-card-image-container'
          href={company.url}
          target='_blank'
          rel='noreferrer'
        >
          <img
            className='experience-card--image'
            src={company.image.source}
            alt={company.image.alt}
          />
        </a>
      </section>
      <section className='title glass-background'>
        <h4>{job.title}</h4>
        <aside>{job.duration}</aside>
      </section>
      <div className='technologies'>
        <TechnologiesContainer data={job.tech} />
      </div>
    </main>
  );
};

export default ExperienceCard;
