import React from 'react';
import '../../style/app.scss';
import {
  About,
  Contact,
  Experience,
  Header,
  Map,
  Projects,
  Tech,
} from './index.js';

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
