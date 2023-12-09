import React from 'react';

const Header = ({ data }) => {
  return (
    <div className='resume-section'>
      <header id='title-block-header'>
        <h1 className='title'>{data.title}</h1>
        <p className='author'>{data.author}</p>
      </header>
      <h5 id='contact'>
        {data.contact.map((item, index) => (
          <>
            <a href={item.link}>{item.display}</a>{' '}
            {index < data.contact.length - 1 ? ' . ' : ''}
          </>
        ))}
      </h5>
      <h5 id='experience'>{data.experience}</h5>
    </div>
  );
};

export default Header;
