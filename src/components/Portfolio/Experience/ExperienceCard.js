import React from 'react';

const ExperienceCard = ({ data }) => {
  const {
    image,
    imageAlt,
    imageUrl,
    title,
    imageTemp,
    company,
    job,
    tech,
    description,
  } = data;

  return (
    <main className='experience-card glass-background'>
      <section className='company'>
        <h3>{company.name}</h3>
        <aside>{company.description}</aside>
      </section>
      <section className='description'>
        {job.description.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </section>
      <section className='image'>
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
      <section className='title'>
        <h4>{job.title}</h4>
        <aside>{job.duration}</aside>
      </section>
      <section className='technologies'>
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
