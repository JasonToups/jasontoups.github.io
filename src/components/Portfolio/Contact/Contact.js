import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useNavigation } from '../../../contexts/NavigationContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact = ({ data }) => {
  const navigate = useNavigate();
  const { setPath } = useNavigation();

  const handleResumeClick = () => {
    setPath('/resume');
    navigate('/resume');
  };

  return (
    <section className='contact'>
      {/* <div>
        <h2>Contact</h2>
        <form>
          <label htmlFor={data.form.name.field}>{data.form.name.label}</label>
          <input type={data.form.name.type} />
          <label htmlFor={data.form.name.field}>{data.form.email.label}</label>
          <input type={data.form.email.type} />
          <label htmlFor={data.form.message.field}>
            {data.form.message.label}
          </label>
          <textarea
            name={data.form.message.type}
            id='message'
            cols='30'
            rows='10'
          ></textarea>
          <button type={data.form.button.type}>{data.form.button.text}</button>
        </form>
      </div> */}
      <div className='connect'>
        <img
          className='connect-image'
          src={data.connect.header.source}
          alt={data.connect.header.alt}
        />
        <div className='connect-card-background glass-background'>
          <img
            className='profile-pic'
            src={data.connect.profilePic.source}
            alt={data.connect.profilePic.alt}
          />
          <div className='connect-card-foreground'>
            <div className='connect-card'>
              <div className='connect-icons-container'>
                {data.connect.icons.map((contact, index) => (
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
              <button
                type={data.connect.button.type}
                onClick={handleResumeClick}
              >
                {data.connect.button.text}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
