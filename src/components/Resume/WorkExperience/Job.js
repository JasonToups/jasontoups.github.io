import React from 'react';

const Job = ({ data }) => {
  const {
    title,
    duration,
    location,
    remote,
    description,
    technologies,
    jobTasks,
  } = data;

  return (
    <div className='work-experience-section'>
      <h3
        id={`${title}-${duration}-${location}-${
          remote ? 'remote' : 'in-office'
        }`}
      >
        {title} / {duration} / {location} / {remote ? 'Remote' : 'In Office'}
      </h3>
      <p>{description}</p>
      <ul>
        {jobTasks.map((task, index) => (
          <li key={index}>
            <strong>{task.split(' ')[0]}</strong>{' '}
            {task.substring(task.indexOf(' ') + 1)}
          </li>
        ))}
      </ul>
      <p>
        <strong>Technologies used:</strong> {technologies.join(' · ')}
      </p>
    </div>
  );
};

export default Job;
