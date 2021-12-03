import React from 'react';
import Huoa from '../img/experience/experience-huoa.jpg';
import NewlyWords from '../img/experience/experience-newlywords.jpg';
import WilliamsSonoma from '../img/experience/experience-ws.jpg';

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
              className="experience-card--link" href="http://www.williams-sonomainc.com/" target="_blank"
              rel="noreferrer"
            >
              <img className="experience-card--image" src={WilliamsSonoma} alt="Williams Sonoma Inc"/>
            </a>
          </div>
          <div className="experience-card--description">
            <h3>Williams Sonoma, Inc.</h3>
            <p>Working on the Micro Front End team, transitioning Production pages from 6 brands, into a unified Vue project, with 6 brand configs.</p>
            <p>Engineering styling & architectural updates to Vue components to all 6 supported brands, including; the Product Information pages for the Purchasing Component & Product Flags Component, Shop pages, & Content pages.</p>
            <p>Solved Local Environment Stability Issues across several teams with a self-directed Node & Shell project that automated repetitive engineering tasks, including; cloning 11 repos pointing to multiple remotes per brand, running 4-5 server commands, creating multiple feature branches across each brand with an interactive Shell script, updating local branches to the latest release code, and pruning the Docker container.</p>
            <p>Managing & Migrating pull requests from team-specific repos, to Bedrock & Release Management repos, including batch cherry-picked commits from my team to the upstream repos.</p>
          </div>
        </div>
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
            <p>Rebuilt original static site to be in the JAMstack, improving speed, page weight, and security of the older version of the client's website. Built with: React, React-Redux, Hooks, with a Wordpress backend and mobile support.</p>
            <p>Contributed to component library, creating dynamic components rendering images and content served up by the WordPress API.</p>
            <p>Engineered the reusable React Container components to control all layouts (Web, Tablet, Mobile) in CSS Grid and Sass, along with reusable Card components that are used site-wide.</p>
            <p>Added Docker to the project to keep all of our dev environments in sync with the latest dependencies.</p>
            <p>Onboarded new engineers by writing onboarding documentation in markdown & included it in the repo.</p>
          </div>
        </div>
      </div>
      
  </section>
	);
};

export default Experience;
