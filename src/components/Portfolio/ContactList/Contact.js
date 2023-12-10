import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Contact = ({ icon, link }) => {
  return (
    <a className='contact-item' href={link} target='_blank' rel='noreferrer'>
      <FontAwesomeIcon icon={icon} />
    </a>
  );
};

export default Contact;
