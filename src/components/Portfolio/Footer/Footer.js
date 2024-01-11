import React, { useState, useEffect } from 'react';
import Apple from '../../../img/logos/apple-2001.png';

const Contact = ({ data }) => {
  const [date, setDate] = useState(null);

  useEffect(() => {
    setDate(new Date().getFullYear());
  }, []);

  return (
    <section className='footer'>
      <footer>
        <p>
          <b>All assets</b> lovingly <i>crafted by hand</i>.
        </p>
        <p>
          <i>No AI assistance</i> was used in designing this site.
        </p>
        <p>
          Checkout my{' '}
          <a href='https://github.com/JasonToups/jasontoups.github.io'>
            <code>source code</code>
          </a>
          ,
          <br /> or my{' '}
          <a href='https://github.com/users/JasonToups/projects/2'>
            <code>github project</code>
          </a>
          .<br /> Where I planned the <b>design</b>,<br /> <b>development</b> &{' '}
          <b>deployment</b>.
        </p>
        <div className='apple-container'>
          <a
            href='http://apple-history.com/g4_quicksilver'
            target='_blank'
            rel='noreferrer'
          >
            <img className='apple' src={Apple} alt='apple circa 2001' />
          </a>
          <p>since 2001.</p>
        </div>
        <aside>
          Copyright &copy; Jason Toups {date}
          <br />
        </aside>
      </footer>
    </section>
  );
};

export default Contact;
