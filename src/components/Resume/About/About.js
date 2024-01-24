import React from 'react';

const About = () => {
  return (
    <div className='resume-section'>
      <h2 id='about'>About</h2>
      <p>
        <em>This resume</em> was <strong>written in Markdown</strong>, and
        <strong> styled with CSS</strong>, using the{' '}
        <code>Markdown Resume</code>
        project I built myself.
      </p>
      <p>
        With a simple <code>script</code>, I can generate a <em>PDF</em>,
        <em>Word Document</em> and <em>HTML</em> to embed into a website.
      </p>
      <blockquote>
        <p>
          <a href='https://github.com/JasonToups/markdown-resume'>
            Checkout my code for this project on GitHub
          </a>
          .
        </p>
      </blockquote>
      <p>Thank you.</p>
    </div>
  );
};

export default About;
