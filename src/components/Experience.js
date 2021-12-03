import React from 'react';
import NewlyWords from '../img/experience/experience-newlywords.jpg';
import Huoa from '../img/experience/experience-huoa.jpg';

const Experience = () => {

	return (
    <section className="experience" id="experience">
      <header className="header">
        <h2>{"{Engineering Experience}"}</h2>
      </header>
      <div className="experience-cards--container flex-container flex-direction-column" id="engineering-experience">
        <div className="experience-card flex-container flex-direction-row">
          <div className="experience-card--image-container">
            <a 
              className="experience-card--link" href="https://www.newlywords.com/" target="_blank"
              rel="noreferrer"
            >
              <img className="experience-card--image" src={NewlyWords} alt="newlywords"/>
            </a>
          </div>
          <div className="experience-card--description">
            <h3>Newlywords</h3>
            <p>NewlyWords is a React & Ruby memory book platform where hundreds of users per day can invite their friends & family to collaborate on a commemorative digital or physical book.</p>
            <p>I engineered the Memory Book Project Dashboard in React with custom Hooks, where project owners view and edit pages submitted from their contributors, and view information about their book.</p>
            <p>I built the Questionnaire as a the new memory book content type, providing project owners a place to ask their contributors questions to answer for their collaborative memory book content.</p>
            <p>I developed a design guide with classNamees and partials, from the product design system, to build stylesheets which implemented reusable classnames and styles.</p>
            <p>I mentored a junior ui/ux designer by providing design advice to help him utilize Figma features more robustly, and to think about user experience from our user’s perspective, following a contextual flow of page elements.</p>
          </div>
        </div>
        <hr id="portfolio-hr" />
        <div className="experience-card flex-container flex-direction-row">
          <div className="experience-card--image-container">
            <a 
              className="experience-card--link" href="https://github.com/Hawaian-United-Okinawa-Association/huoa-react" target="_blank"
              rel="noreferrer"
            >
              <img className="experience-card--image" src={Huoa} alt="Hawaii United Okinawa Association"/>
            </a>
          </div>
          <div className="experience-card--description">
            <h3>Hawaii United Okinawa Association</h3>
            <p>Rebuilding original static site to be in the JAMstack, improving speed, page weight, and security of the older version of the client's website. Built with: React, React-Redux, Hooks, with a Wordpress backend and mobile support.</p>
            <p>Contributing to component library, creating dynamic components rendering images and content served up by the WordPress API.</p>
            <p>Engineering the reusable React Container components to control all layouts (Web, Tablet, Mobile) in CSS Grid and Sass, along with reusable Card components that are used site-wide.</p>
            <p>Onboarded new engineers by writing <a href="https://github.com/Hawaian-United-Okinawa-Association/huoa-react/blob/788a5a02ddf2f1f9b3da5c2897bc1196067b4d1b/onboarding.md">onboarding documentation</a> in markdown and including it in the repo.</p>
            <p>Added Docker to the project to keep all of our dev environments in sync with the latest dependencies.</p>
          </div>
        </div>
      </div>
      
  </section>
	);
};

export default Experience;
