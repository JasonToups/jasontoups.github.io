import React, { useState, useEffect } from 'react';

const Contact = ({ data }) => {
  const [date, setDate] = useState(null);

  useEffect(() => {
    setDate(new Date().getFullYear());
  }, []);

  return (
    <section className='footer'>
      <footer>
        <p>
          <b>All assets</b> lovingly <i>crafted by hand</i>, by yours truly.
        </p>
        <p>
          <i>No AI assistance</i> was used in designing this site.
        </p>
        <p>
          Checkout my{' '}
          <a href='https://github.com/JasonToups/jasontoups.github.io'>
            <code>source code</code>
          </a>
          , or my{' '}
          <a href='https://github.com/users/JasonToups/projects/2'>
            <code>github project</code>
          </a>
          , where I planned the <b>design</b>, <b>development</b> &{' '}
          <b>deployment</b>.
        </p>
        <aside>Copyright &copy; Jason Toups {date}</aside>
      </footer>
    </section>
  );
};

export default Contact;
