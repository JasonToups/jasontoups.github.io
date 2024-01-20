import React from 'react';

const About = ({
  data: { profilePic, header, introduction, summary, closer, paragraphs },
}) => {
  return (
    <section className='about'>
      <div className='content-container'>
        <header className='header'>
          <h2>{header}</h2>
        </header>
        <div className='section-foreground'>
          <img src={profilePic.source} alt={profilePic.alt} />
          <div className='description'>
            <div className='section-foreground'>
              <p>{introduction}</p>

              <p className='text-gradient'>{summary}</p>

              {closer.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
