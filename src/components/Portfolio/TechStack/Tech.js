import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Tech = ({ data }) => {
  const { icon, text } = data;

  return (
    <div className='tech-item'>
      <span className='service-icon'>
        <FontAwesomeIcon icon={icon} />
      </span>
      <p>{text}</p>
    </div>
  );
};

export default Tech;
