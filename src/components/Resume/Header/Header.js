import React from 'react';

const Header = ({ data }) => {
  const { title, author, contact, experience } = data;
  return (
    <div className='resume-section'>
      <header id='title-block-header'>
        <h1 className='title'>{title}</h1>
        <p className='author'>{author}</p>
      </header>
      <h5 id='contact'>
        {contact.map((item, index) => (
          <React.Fragment key={index}>
            <a href={item.link}>{item.display}</a>{' '}
            {index < data.contact.length - 1 ? ' . ' : ''}
          </React.Fragment>
        ))}
      </h5>
      <h5 id='experience'>{experience}</h5>
    </div>
  );
};

export default Header;
