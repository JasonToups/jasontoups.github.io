import React from 'react';
import ProjectCard from './ProjectCard';
import RickAndMorty from '../img/projects/logo-RickAndMorty.svg';
import CrushIt from '../img/projects/crush-it-logo.svg';
import ReactTube from '../img/projects/reacttube-logo.svg';
import ReactUnsplash from '../img/projects/reactunsplash-logo.svg';

const Projects = () => {

	return (
		<section className='projects' id="projects">
      <header className="header">
        <h2>{"[My Apps]"}</h2>
      </header>
      <div className="projects-container">
        <ProjectCard
          cardImage={ReactTube}
          cardImageAlt={"React Tube App"}
          cardUrl="https://jasontoups.github.io/YouTube-React-Hooks/"
          projectNumber="1"
          >
          <h2>ReactTube</h2>
          <p>
            Search the YouTube API and return a short list of 5 videos, utilizing Primitive Hooks & Custom Hooks to fetch data.
          </p>
        </ProjectCard>
        <ProjectCard
          cardImage={ReactUnsplash}
          cardImageAlt={"React Unsplash App"}
          cardUrl="https://jasontoups.github.io/Unsplash-React-Hooks/"
          projectNumber="2"
          >
          <h2>React Unsplash</h2>
          <p>
            Search the Unsplash API and return a list of images, utilizing Primitive Hooks & Custom Hooks to fetch data.
          </p>
        </ProjectCard>
        <ProjectCard
          cardImage={CrushIt}
          cardImageAlt={"crush it javascript game"}
          cardUrl="https://jasontoups.github.io/CrushIt"
          projectNumber="3"
          >
          <h2>Crush It!!!</h2>
          <p>
            Mobile Block Crushing Game built with JS/JQuery/HTML5, with
            only CSS assets. Styled after Candy Crush.
          </p>
        </ProjectCard>
        <ProjectCard
          cardImage={RickAndMorty}
          cardImageAlt={"rick and morty react character database"}
          cardUrl="https://jasontoups.github.io/rick-and-morty/"
          projectNumber="4"
          >
          <h2>Rick & Morty</h2>
          <h3>Database</h3>
          <p>
            This site uses the Rick and Morty API to render a database of characters, locations and episodes. 
          </p>
        </ProjectCard>
      </div>
		</section>
	);
};

export default Projects;
