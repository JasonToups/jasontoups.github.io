import React from 'react';

const resumeData = {
  title: 'Jason Toups',
  author: 'Jason Toups',
  contact: [
    {
      display: 'me@jasontoups.com',
      link: 'mailto:me@jasontoups.com',
    },
    {
      display: 'LinkedIn',
      link: 'https://www.linkedin.com/in/jasontoups/',
    },
    {
      display: 'Portfolio',
      link: 'https://jasontoups.github.io/',
    },
    {
      display: 'Github',
      link: 'https://github.com/JasonToups',
    },
    {
      display: '404.625.6530',
      link: 'tel:4046256530',
    },
  ],
  experience:
    'Frontend Engineer, with over 15 years of Software Production experience, including Engineering, Testing & UI/UX Design',
};

const Resume = () => {
  return (
    <div className='resume-section'>
      <header id='title-block-header'>
        <h1 className='title'>{resumeData.title}</h1>
        <p className='author'>{resumeData.author}</p>
      </header>
      <h5 id='contact'>
        {resumeData.contact.map((item, index) => (
          <span key={index}>
            {item.display} {item.link && <a href={item.link}>{item.display}</a>}
          </span>
        ))}
      </h5>
      <h5 id='experience'>{resumeData.experience}</h5>
    </div>
  );
};

export default Resume;
