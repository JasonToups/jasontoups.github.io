import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '../../../contexts/NavigationContext';

const Connect = ({ data }) => {
  const navigate = useNavigate();
  const { setPath } = useNavigation();

  const handleResumeClick = () => {
    setPath('/resume');
    navigate('/resume');
  };

  return (
    <section className='connect'>
      <div className='connect-header'>
        <img
          className='connect-image'
          src={data.header.source}
          alt={data.header.alt}
        />
      </div>
      <div className='connect-container'>
        <div className='connect-background'>
          <motion.img
            src={data.background.circle.source}
            alt={data.background.circle.alt}
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 7, repeat: Infinity }}
          />
        </div>
        <div className='connect-content'>
          <div className='connect-card-background glass-background'>
            <img
              className='profile-pic'
              src={data.profilePic.source}
              alt={data.profilePic.alt}
            />
            <div className='connect-card-foreground'>
              <div className='connect-card'>
                <div className='connect-icons-container'>
                  {data.icons.map((contact, index) => (
                    <a
                      key={index}
                      href={contact.url}
                      target='_blank'
                      rel='noreferrer'
                      className={contact.class}
                    >
                      <img
                        className='connect-icon'
                        src={contact.source}
                        alt={contact.alt}
                      />
                    </a>
                  ))}
                  <a
                    href='mailto:me@jasontoups.com'
                    target='_blank'
                    rel='noreferrer'
                    className='email'
                  >
                    <FontAwesomeIcon
                      className='connect-icon fa-7x'
                      icon={faEnvelope}
                      alt='email jason toups'
                    />
                  </a>
                </div>
                <button type={data.button.type} onClick={handleResumeClick}>
                  {data.button.text}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Connect;
