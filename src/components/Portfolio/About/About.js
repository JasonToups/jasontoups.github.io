import React from 'react';

const About = ({
  data: { profilePic, header, introduction, summary, closer, paragraphs },
}) => {
  return (
    <section className='about'>
      <div className='content-container'>
        <img src={profilePic.source} alt={profilePic.alt} />
        <div className='description'>
          <h2>{header}</h2>
          <p>{introduction}</p>

          <p className='text-gradient'>{summary}</p>

          {closer.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
