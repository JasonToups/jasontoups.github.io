import React from 'react';
import resumeData from '../../data/resumeData.js';
import {
  About,
  Education,
  Header,
  TechnicalSkills,
  WorkExperience,
} from './index';
const Resume = () => {
  const { headerData, technicalSkillsData, workExperienceData, educationData } =
    resumeData;

  return (
    <div className='resume'>
      <Header data={headerData} />
      <TechnicalSkills data={technicalSkillsData} />
      <WorkExperience data={workExperienceData} />
      <Education data={educationData} />
      <About />
    </div>
  );
};

export default Resume;
