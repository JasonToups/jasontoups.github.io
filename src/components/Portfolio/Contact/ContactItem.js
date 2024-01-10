import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ContactItem = ({ icon, link }) => {
  return (
    <a className='contact-item' href={link} target='_blank' rel='noreferrer'>
      <FontAwesomeIcon icon={icon} />
    </a>
  );
};

export default ContactItem;
