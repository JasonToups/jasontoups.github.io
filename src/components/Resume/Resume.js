import React from 'react';
import resumeData from './resumeData.js';
import { Education, Header, TechnicalSkills, WorkExperience } from './index';
const Resume = () => {
  const { headerData, technicalSkillsData, workExperienceData, educationData } =
    resumeData;

  return (
    <div className='resume'>
      <Header data={headerData} />
      <TechnicalSkills data={technicalSkillsData} />
      <WorkExperience data={workExperienceData} />
      <Education data={educationData} />
    </div>
  );
};

export default Resume;
