import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = ({ data }) => {
  const { header, projects } = data;

  return (
    <section className='projects' id='projects'>
      <header className='header'>
        <h2>{header}</h2>
      </header>
      <div className='projects-container'>
        {projects.map((project) => (
          <ProjectCard
            key={project.projectNumber}
            image={project.image}
            imageAlt={project.imageAlt}
            imageUrl={project.imageUrl}
            projectNumber={project.projectNumber}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </ProjectCard>
        ))}
      </div>
    </section>
  );
};

export default Projects;
