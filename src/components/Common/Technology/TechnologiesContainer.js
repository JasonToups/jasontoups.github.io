import React from 'react';
import Technology from './Technology';

const TechnologiesContainer = ({ data }) => {
  return (
    <div className='technologies-container'>
      <div
        className={`technologies-list ${data.className ? data.className : ''}`}
      >
        {data.images.map((data, index) => (
          <Technology data={data} key={index} />
        ))}
      </div>
    </div>
  );
};

export default TechnologiesContainer;
