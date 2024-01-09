import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useNavigation } from '../../../contexts/NavigationContext';
import ContactItem from './ContactItem';

const Contact = ({ data }) => {
  const navigate = useNavigate();
  const { setPath } = useNavigation();

  const handleResumeClick = () => {
    setPath('/resume');
    navigate('/resume');
  };

  return (
    <section className='contact'>
      <div>
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
      </div>
      <div className='connect'>
        <img
          className='connect-image'
          src={data.connect.header.source}
          alt={data.connect.header.alt}
        />
        <div className='connect-icons-container'>
          {data.connect.icons.map((contact, index) => (
            <img
              key={index}
              className={contact.class}
              src={contact.source}
              alt={contact.alt}
            />
          ))}
        </div>
        <button type={data.connect.button.type}>
          {data.connect.button.text}
        </button>
      </div>
    </section>
  );
};

export default Contact;
