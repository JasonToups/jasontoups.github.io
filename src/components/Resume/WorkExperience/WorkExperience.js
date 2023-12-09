import React from 'react';
import Job from './Job';

const WorkExperience = ({ data }) => {
  return (
    <>
      <div className='resume-section'>
        <h2 id='work-experience'>Work Experience</h2>
        {data.map((job, index) => (
          <Job key={index} data={job} />
        ))}
      </div>
      <div className='resume-section'>
        <blockquote>
          <p>
            Additional Work Experience Provided Upon Request &amp; Linked In
            Profile
          </p>
        </blockquote>
      </div>
    </>
  );
};

export default WorkExperience;
