import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useNavigation } from '../../../contexts/NavigationContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Connect = ({ data }) => {
  const navigate = useNavigate();
  const { setPath } = useNavigation();

  const handleResumeClick = () => {
    setPath('/resume');
    navigate('/resume');
  };

  return (
    <section className='connect'>
      <img
        className='connect-image'
        src={data.header.source}
        alt={data.header.alt}
      />
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
    </section>
  );
};

export default Connect;
