import React from 'react';

const About = ({
  data: { profilePic, header, introduction, summary, closer, paragraphs },
}) => {
  return (
    <section className='about'>
      <div className='content-container'>
        <img src={profilePic} alt='jason toups profile pic' />
        <div className='description'>
          <h2>{header}</h2>
          <p>{introduction}</p>
          <span className=''>
            <p className='text-gradient'>{summary}</p>
          </span>
          {closer.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
