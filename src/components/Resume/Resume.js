import React from 'react';
import resumeData from './resumeData.js';
import { Education, Header, TechnicalSkills, WorkExperience } from './index';
const Resume = () => {
  const { headerData, technicalSkillsData, workExperienceData } = resumeData;

  return (
    <div className='resume'>
      <Header data={headerData} />
      <TechnicalSkills data={technicalSkillsData} />
      <WorkExperience data={workExperienceData} />
      <div className='resume-section'>
        <blockquote>
          <p>
            Additional Work Experience Provided Upon Request &amp; Linked In
            Profile
          </p>
        </blockquote>
      </div>
      <div className='resume-section'>
        <h2 id='education'>Education</h2>
        <p>
          <em>University of New Orleans / BA Philosophy</em>
        </p>
      </div>
    </div>
  );
};

export default Resume;
