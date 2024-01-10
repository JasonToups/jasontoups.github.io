import React, { useState, useEffect } from 'react';

const Contact = ({ data }) => {
  const [date, setDate] = useState(null);

  useEffect(() => {
    setDate(new Date().getFullYear());
  }, []);

  return (
    <section className='footer'>
      <footer>
        <p>All assets lovingly crafted by hand, by yours truly.</p>
        <p>No AI assistance was used in designing this site.</p>
        <p>
          Checkout my{' '}
          <a href='https://github.com/JasonToups/jasontoups.github.io'>
            <code>source code</code>
          </a>
          , or my{' '}
          <a href='https://github.com/users/JasonToups/projects/2'>
            <code>github project</code>
          </a>
          ,
          <br /> where I planned the design, development & deployment.
        </p>
        <aside>Copyright &copy; Jason Toups {date}</aside>
      </footer>
    </section>
  );
};

export default Contact;
