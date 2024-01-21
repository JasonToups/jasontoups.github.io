import React from 'react';
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
      <section className='technologies glass-background'>
        {job.tech.map((item, index) => (
          <ImageLink data={item} key={index} />
        ))}
      </section>
    </main>
  );
};

export default ExperienceCard;
