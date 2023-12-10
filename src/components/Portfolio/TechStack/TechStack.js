import React from 'react';
import Tech from './Tech';

const TechStack = ({ data }) => {
  return (
    <section className='tech'>
      <header className='header'>
        <h2>.Tech.Stack</h2>
        <p>I work with these technologies:</p>
      </header>
      <div className='tech-items--container flex-container'>
        {data.map((techItem, index) => (
          <Tech key={index} data={techItem} />
        ))}
      </div>
    </section>
  );
};

export default TechStack;
