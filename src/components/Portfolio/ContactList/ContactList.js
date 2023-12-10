import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useNavigation } from '../../../contexts/NavigationContext';
import Contact from './Contact';

const ContactList = ({ data }) => {
  const [date, setDate] = useState(null);
  const navigate = useNavigate();
  const { setPath } = useNavigation();

  const handleResumeClick = () => {
    setPath('/resume');
    navigate('/resume');
  };

  useEffect(() => {
    setDate(new Date().getFullYear());
  }, []);

  return (
    <footer className='contact'>
      <div className='contact-items-container flex-container'>
        {data.map((contact, index) => (
          <Contact key={index} icon={contact.icon} link={contact.link} />
        ))}
        <div className='contact-item'>
          <FontAwesomeIcon icon={faBriefcase} onClick={handleResumeClick} />
        </div>
      </div>
      <p className='footer'>Copyright &copy; Jason Toups {date}</p>
    </footer>
  );
};

export default ContactList;
