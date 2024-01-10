import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = ({ data }) => {
  const { header, projects } = data;

  return (
    <section className='projects' id='projects'>
      <header className='header'>
        <h2>{header}</h2>
      </header>
      <section className='projects-container'>
        {projects.map((project) => (
          <ProjectCard key={project.projectNumber} data={project}></ProjectCard>
        ))}
      </section>
    </section>
  );
};

export default Projects;
