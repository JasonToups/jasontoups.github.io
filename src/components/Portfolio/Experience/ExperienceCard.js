import React from 'react';
import { TechnologiesContainer } from '../../Common/Technology/index';
import ImageLink from '../../Common/Images/ImageLink';

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
        <ImageLink data={company.image} />
      </section>
      <section className='title glass-background'>
        <h4>{job.title}</h4>
        <aside>{job.duration}</aside>
      </section>
      <TechnologiesContainer data={job.tech} />
    </main>
  );
};

export default ExperienceCard;
