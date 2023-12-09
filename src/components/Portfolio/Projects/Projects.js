import React from 'react';
import ProjectCard from './ProjectCard';
import RickAndMorty from './projects/logo-RickAndMorty.svg';
import CrushIt from './projects/crush-it-logo.svg';
import ReactTube from './projects/reacttube-logo.svg';
import ReactUnsplash from './projects/reactunsplash-logo.svg';

const Projects = () => {
  return (
    <section className='projects' id='projects'>
      <header className='header'>
        <h2>{'[My Apps]'}</h2>
      </header>
      <div className='projects-container'>
        <ProjectCard
          image={ReactTube}
          imageAlt={'React Tube App'}
          imageUrl='https://jasontoups.github.io/YouTube-React-Hooks/'
          projectNumber='1'
        >
          <h3>ReactTube</h3>
          <p>
            Search the YouTube API and return a short list of 5 videos,
            utilizing Primitive Hooks & Custom Hooks to fetch data.
          </p>
        </ProjectCard>
        <ProjectCard
          image={ReactUnsplash}
          imageAlt={'React Unsplash App'}
          imageUrl='https://jasontoups.github.io/Unsplash-React-Hooks/'
          projectNumber='2'
        >
          <h3>React Unsplash</h3>
          <p>
            Search the Unsplash API and return a list of images, utilizing
            Primitive Hooks & Custom Hooks to fetch data.
          </p>
        </ProjectCard>
        <ProjectCard
          image={CrushIt}
          imageAlt={'crush it javascript game'}
          imageUrl='https://jasontoups.github.io/CrushIt'
          projectNumber='3'
        >
          <h3>Crush It!!!</h3>
          <p>
            Mobile Block Crushing Game built with JS/JQuery/HTML5, with only CSS
            assets. Styled after Candy Crush.
          </p>
        </ProjectCard>
        <ProjectCard
          image={RickAndMorty}
          imageAlt={'rick and morty react character database'}
          imageUrl='https://jasontoups.github.io/rick-and-morty/'
          projectNumber='4'
        >
          <h3>
            Rick & Morty <br /> Database
          </h3>
          <p>
            This site uses the Rick and Morty API to render a database of
            characters, locations and episodes.
          </p>
        </ProjectCard>
      </div>
    </section>
  );
};

export default Projects;
