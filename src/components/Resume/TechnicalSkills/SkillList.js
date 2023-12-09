import React from 'react';

const SkillList = ({ skills }) => {
  return (
    <div className='technical-skills-grid'>
      {skills.map((skill, index) => (
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

// TODO - pass this data into the SkillList component from the TechnicalSkills component
// Data to use in SkillList component
const skillsData = [
  {
    skillType: 'Programming',
    skillList: [
      'Javascript',
      'Typescript',
      'Angular',
      'RxJS',
      'Markdown',
      'React',
      'React-Redux',
      'React-Thunk',
      'Vue',
      'Shell',
      'HTML',
      'CSS',
      'Sass',
      'JQuery',
      'Docker',
    ],
  },
  {
    skillType: 'Production',
    skillList: [
      'Agile Development/Scrum Master',
      'JIRA',
      'Git',
      'Software Releases',
      'Affinity Designer',
      'Figma',
      'Adobe Creative Suite',
      'Technical Documentation',
      'UI/UX Design',
      'A/B Testing',
    ],
  },
];

// Usage of SkillList component
<SkillList skills={skillsData} />;
