import React from 'react';
import Image from '../../Common/Images/Image';

const TechnologiesContainer = ({ data }) => {
  return (
    <div className='technologies-container'>
      <div className='technologies-list glass-foreground'>
        {data.map((data, index) => (
          <Image data={data} key={index} />
        ))}
      </div>
    </div>
  );
};

export default TechnologiesContainer;
