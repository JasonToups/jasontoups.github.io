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
    <div className='experience-card'>
      <div className='experience-card--image-container'>
        <a
          className='experience-card--link'
          href={imageUrl}
          target='_blank'
          rel='noreferrer'
        >
          <img className='experience-card--image' src={image} alt={imageAlt} />
        </a>
      </div>
      <div className='experience-card--description'>
        <h3>{title}</h3>

        {description.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </div>
  );
};

export default ExperienceCard;
