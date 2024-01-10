import React from 'react';
// import Technology from './Technology';

const TechnologiesContainer = ({ data }) => {
  // console.log(data);

  return (
    <div className='technologies-container glass-foreground'>
      {data.map((data, index) => (
        <img
          key={index}
          className='technology'
          src={data.source}
          alt={data.alt}
        />
      ))}
    </div>
  );
};

export default TechnologiesContainer;
