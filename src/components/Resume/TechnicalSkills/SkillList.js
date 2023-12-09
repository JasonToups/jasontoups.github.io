import React from 'react';

const SkillList = ({ data }) => {
  return (
    <div className='technical-skills-grid'>
      {data.map((skill, index) => (
        <React.Fragment key={index}>
          <p className='col-1'>
            <strong>{skill.skillType}:</strong>
          </p>
          <p className='col-2'>{skill.skillList.join(' · ')}</p>
        </React.Fragment>
      ))}
    </div>
  );
};

export default SkillList;
