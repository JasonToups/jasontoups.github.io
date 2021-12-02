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
            <p>Engineering new features like the memory book project dashboard, where project owners can view and edit pages submitted from their contributors, and view information about their book.</p>
            <p>Engineering new memory book content types like the questionnaire, where project owners create a questionnaire for their contributors to answer for their memory book. This helps project owners work with contributors that need some help sharing, or providing them with a consistent theme for their book, like birthdays, retirements, or weddings.</p>
            <p>Building responsive pages, in HTML CSS, JS, React and Ruby, implementing front-end best practices, to be visited by hundreds of users per day.</p>
            <p>Developing a design guide with classNamees and partials, from the product design system, to build stylesheets which implements reusable classNamees and styles</p>
            <p>Implementing Agile methodologies for the team by timeline task planning, with the Trello plugin Planyway, by scoping features to hit deadlines, and coordinating phases of testing from PR QA & Staging QA & Deployment.</p>
            <p>Documenting our user feedback sessions where they provide feature requests, and we demo upcoming features, while capturing their feedback to tailor the features directly to the needs of our users.</p>
            <p>Collaborating with product team to improve accessibility for customers, reviewing designs with our team before engineering begins, and suggesting improvements.</p>
            <p>Mentoring a junior designer by providing design advice to help him utilize Figma features more robustly, and to think about user experience from our user’s perspective, following a contextual flow of page elements.</p>
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
