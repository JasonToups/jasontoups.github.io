import React from 'react';
import RickAndMorty from '../img/projects/logo-RickAndMorty.svg';
import CrushIt from '../img/projects/crush-it-logo.svg';
import ForeverHomes from '../img/projects/foreverhomes-logo.svg';
import GeoTask from '../img/projects/geotask-logo.svg';

const Projects = () => {

	return (
		<section className='projects' id="projects">
      <div className="heading">
        <h2>My Apps</h2>
      </div>
      <div className="projects-container flex-container flex-direction-row">
        <a
          className="project project-1"
          href="https://jasontoups.github.io/rick-and-morty/"
          target="_blank"
          rel="noreferrer"
        > 
          <div className="project-image-container">
            <img
            className="project-image"
            src={RickAndMorty}
            alt="rick and morty database"
            />
          </div>
          <span className="project-description">
            <h2>Rick & Morty</h2>
            <h3>Database</h3>
            <p>
              This site uses the Rick and Morty API to render a database of characters, locations and episodes. 
            </p>
          </span>
        </a>
        <a
          className="project project-2"
          href="https://jasontoups.github.io/CrushIt"
          target="_blank"
          rel="noreferrer"
        > 
          <div className="project-image-container">
            <img
              className="project-image"
              src={CrushIt}
              alt="crush it game"
            />
          </div>
          <span className="project-description">
            <span className="caption-content">
              <h2>Crush It!!!</h2>
              <p>
                Mobile Block Crushing Game built with JS/JQuery/HTML5, with
                only CSS assets. Styled after Candy Crush.
              </p>
            </span>
          </span>
        </a>
        <a
          className="project project-3"
          href="https://forever-homes-app.herokuapp.com/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="project-image-container"> 
            <img
              className="project-image"
              src={ForeverHomes}
              alt="forever homes project"
            />
          </div>
          <span className="project-description">
            <span className="caption-content">
              <h2>Forever Homes</h2>
              <p>
                Adopt pets in an Instagram-style image feed, utilizing the
                Petfinder API, Bootstrap, Django, SQL & Python.
              </p>
            </span>
          </span>
        </a>
        <a
          className="project project-4"
          href="https://geo-task-app.herokuapp.com/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="project-image-container">
            <img
              className="project-image"
              src={GeoTask}
              alt="geotask project"
            />   
          </div>
          <span className="project-description">
            <span className="caption-content">
              <h2>Geotask</h2>
              <p>
                A productivity app with geolocation for todo lists. Built
                with Google OAuth / Maps / Places API, NodeJS & MongoDB.
              </p>
            </span>
          </span>
        </a>
      </div>
		</section>
	);
};

export default Projects;
