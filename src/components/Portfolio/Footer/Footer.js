import React, { useState, useEffect } from 'react';

const Contact = ({ data }) => {
  const [date, setDate] = useState(null);

  useEffect(() => {
    setDate(new Date().getFullYear());
  }, []);

  return (
    <footer className='footer'>Copyright &copy; Jason Toups {date}</footer>
  );
};

export default Contact;
