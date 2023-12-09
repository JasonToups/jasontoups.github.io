import React from 'react';
import SkillList from './SkillList';

const TechnicalSkills = ({ data }) => {
  return (
    <div className='resume-section'>
      <h2 id='technical-skills'>Technical Skills</h2>
      <SkillList data={data} />
    </div>
  );
};

export default TechnicalSkills;
