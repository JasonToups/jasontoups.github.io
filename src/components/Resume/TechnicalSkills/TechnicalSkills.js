import React from 'react';
import SkillList from './SkillList';

const TechnicalSkills = () => {
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

  return (
    <div className='resume-section'>
      <h2 id='technical-skills'>Technical Skills</h2>
      <SkillList skills={skillsData} />
    </div>
  );
};

export default TechnicalSkills;
