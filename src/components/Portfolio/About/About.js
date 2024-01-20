import React from 'react';
import Image from '../../Common/Images/Image';

const About = ({
  data: { profilePic, introduction, summary, closer, paragraphs },
}) => {
  return (
    <section className='about'>
      <div className='content-container'>
        <div className='section-foreground'>
          <Image data={profilePic} index={0} />
          <div className='description'>
            <p>{introduction}</p>

            <p className='text-gradient'>{summary}</p>

            {closer.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
