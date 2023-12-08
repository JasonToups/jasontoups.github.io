import React from 'react';
import '../style/app.scss';
import About from './About';
import Contact from './Contact';
import Experience from './Experience';
import Header from './Header';
import Map from './Map';
import Projects from './Projects';
import Tech from './Tech';

const Portfolio = () => {
  // I would like to create a nav button pinned in the upper right side of the window that will show my resume when clicked

  return (
    <div className='portfolio-site'>
      <Header />
      <About />
      <Tech />
      <Experience />
      <Projects />
      <Map />
      <Contact />
    </div>
  );
};

export default Portfolio;
