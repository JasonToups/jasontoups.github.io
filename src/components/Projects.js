import React from 'react';
import RickAndMorty from '../img/projects/rick-and-morty-portfolio.png';
import CrushIt from '../img/projects/crush-it-logo.svg';

const Projects = () => {

	return (
		<section className='projects' id="projects">
      <div className="heading">
        <h2>My Apps</h2>
      </div>
      <div className="projects-container flex-container flex-direction-row">
        <a
          className="portfolio-item"
          href="https://jasontoups.github.io/rick-and-morty/"
          target="_blank"
          rel="noreferrer"
        >
          <span className="caption">
            <span className="caption-content">
              <h2>Rick & Morty Characteropedia</h2>
              <p className="mb-0">
                This site uses the Rick and Morty API to render a database of characters, locations and episodes. 
              </p>
            </span>
          </span>
          <img
            className="img-fluid"
            src={RickAndMorty}
            alt="rick and morty database"
          />
        </a>
        <a
          className="portfolio-item"
          href="https://jasontoups.github.io/CrushIt"
          target="_blank"
          rel="noreferrer"
        >
          <span className="caption">
            <span className="caption-content">
              <h2>Crush It!!!</h2>
              <p className="mb-0">
                Mobile Block Crushing Game built with JS/JQuery/HTML5, with
                only CSS assets. Styled after Candy Crush.
              </p>
            </span>
          </span>
          <img
            className="img-fluid"
            src={CrushIt}
            alt="crush it game"
          />
        </a>
        <a
          className="portfolio-item"
          href="https://forever-homes-app.herokuapp.com/"
          target="_blank"
          rel="noreferrer"
        >
          <span className="caption">
            <span className="caption-content">
              <h2>Forever Homes</h2>
              <p className="mb-0">
                Adopt pets in an Instagram-style image feed, utilizing the
                Petfinder API, Bootstrap, Django, SQL & Python.
              </p>
            </span>
          </span>
          <img
            className="img-fluid"
            src="./img/projects/foreverhomes-portfolio.png"
            alt="forever homes project"
          />
        </a>
        <a
          className="portfolio-item"
          href="https://geo-task-app.herokuapp.com/"
          target="_blank"
          rel="noreferrer"
        >
          <span className="caption">
            <span className="caption-content">
              <h2>Geotask</h2>
              <p className="mb-0">
                A productivity app with geolocation for todo lists. Built
                with Google OAuth / Maps / Places API, NodeJS & MongoDB.
              </p>
            </span>
          </span>
          <img
            className="img-fluid"
            src="./img/projects/geotask-portfolio.png"
            alt="geotask project"
          />
        </a>
      </div>
		</section>
	);
};

export default Projects;
