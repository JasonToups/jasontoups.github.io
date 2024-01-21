import React from 'react';
import ImageLink from '../../Common/Images/ImageLink';

const TechnologiesContainer = ({ data }) => {
  return (
    <div className='technologies-container'>
      <div
        className={`technologies-list ${data.className ? data.className : ''}`}
      >
        {data.images.map((data, index) => (
          <ImageLink data={data} key={index} />
        ))}
      </div>
    </div>
  );
};

export default TechnologiesContainer;
