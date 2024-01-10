import React from 'react';

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
        <div className='experience-card--image-container'>
          <a
            className='experience-card--link'
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
        </div>
      </section>
      <section className='title glass-foreground'>
        <h4>{job.title}</h4>
        <aside>{job.duration}</aside>
      </section>
      <section className='technologies glass-background'>
        {job.tech.map((item, index) => (
          <img
            key={index}
            className='experience-card--technology'
            src={item.source}
            alt={item.alt}
          />
        ))}
      </section>
    </main>
  );
};

export default ExperienceCard;
