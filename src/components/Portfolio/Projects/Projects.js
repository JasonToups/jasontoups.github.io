import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = ({ data }) => {
  const { header, projects } = data;

  return (
    <section className='projects' id='projects'>
      <header className='header'>
        <h2>{header}</h2>
      </header>
      <div className='projects-content section-container'>
        <div className='section-background'></div>
        <div className='section-foreground'>
          <section className='projects-container'>
            {projects.map((project, index) => (
              <ProjectCard data={project} key={index}></ProjectCard>
            ))}
          </section>
        </div>
      </div>
    </section>
  );
};

export default Projects;
