import React from 'react';
// import Technology from './Technology';

const TechnologiesContainer = ({ data }) => {
  // console.log(data);

  return (
    <div className='technologies-container'>
      <div className='technologies-list glass-foreground'>
        {data.map((data, index) => (
          <img
            key={index}
            className='technology'
            src={data.source}
            alt={data.alt}
          />
        ))}
      </div>
    </div>
  );
};

export default TechnologiesContainer;
