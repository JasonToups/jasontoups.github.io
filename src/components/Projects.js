import React from 'react';
import RickAndMorty from '../img/projects/logo-RickAndMorty.svg';
import CrushIt from '../img/projects/crush-it-logo.svg';
import ForeverHomes from '../img/projects/foreverhomes-logo.svg';
import ReactTube from '../img/projects/reacttube-logo.svg';
import ReactUnsplash from '../img/projects/reactunsplash-logo.svg';

const Projects = () => {

	return (
		<section className='projects' id="projects">
      <header className="header">
        <h2>{"[My Apps]"}</h2>
      </header>
      <div className="projects-container">
        <a
          className="project project-1"
          href="https://jasontoups.github.io/YouTube-React-Hooks/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="project-image-container">
            <img
              className="project-image"
              src={ReactTube}
              alt="React Tube App"
            />   
          </div>
          <span className="project-description">
            <span className="caption-content">
              <h2>ReactTube</h2>
              <p>
              Search the YouTube API and return a short list of 5 videos, utilizing Primitive Hooks & Custom Hooks to fetch data.
              </p>
            </span>
          </span>
        </a>
        <a
          className="project project-2"
          href="https://jasontoups.github.io/Unsplash-React-Hooks/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="project-image-container"> 
            <img
              className="project-image"
              src={ReactUnsplash}
              alt="React Unsplash App"
            />
          </div>
          <span className="project-description">
            <span className="caption-content">
              <h2>React Unsplash</h2>
              <p>
              Search the Unsplash API and return a list of images, utilizing Primitive Hooks & Custom Hooks to fetch data.
              </p>
            </span>
          </span>
        </a>
        <a
          className="project project-3"
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
          className="project project-4"
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
      </div>
		</section>
	);
};

export default Projects;
