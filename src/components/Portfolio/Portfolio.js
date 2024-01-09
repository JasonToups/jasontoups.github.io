import React from 'react';
import '../../style/app.scss';
import {
  About,
  ContactList,
  Experience,
  Hero,
  Map,
  Projects,
} from './index.js';
import {
  headerData,
  aboutData,
  experienceData,
  projectsData,
  contactData,
} from '../../data/portfolioData.js';

const Portfolio = () => {
  // I would like to create a nav button pinned in the upper right side of the window that will show my resume when clicked

  return (
    <div className='portfolio-site'>
      <Hero data={headerData} />
      <About data={aboutData} />
      <Experience data={experienceData} />
      <Projects data={projectsData} />
      <Map />
      <ContactList data={contactData} />
    </div>
  );
};

export default Portfolio;
