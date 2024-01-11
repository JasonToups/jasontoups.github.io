import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = ({ data }) => {
  const { header, projects } = data;

  return (
    <section className='projects' id='projects'>
      <div className='projects-content'>
        <header className='header'>
          <h2>{header}</h2>
        </header>
        <section className='projects-container'>
          {projects.map((project) => (
            <ProjectCard
              key={project.projectNumber}
              data={project}
            ></ProjectCard>
          ))}
        </section>
      </div>
    </section>
  );
};

export default Projects;
