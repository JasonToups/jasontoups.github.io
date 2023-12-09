export const headerData = {
  title: 'Jason Toups',
  author: 'Jason Toups',
  contact: [
    {
      display: 'me@jasontoups.com',
      link: 'mailto:me@jasontoups.com',
    },
    {
      display: 'LinkedIn',
      link: 'https://www.linkedin.com/in/jasontoups/',
    },
    {
      display: 'Portfolio',
      link: 'https://jasontoups.github.io/',
    },
    {
      display: 'Github',
      link: 'https://github.com/JasonToups',
    },
    {
      display: '404.625.6530',
      link: 'tel:4046256530',
    },
  ],
  experience:
    'Frontend Engineer, with over 15 years of Software Production experience, including Engineering, Testing & UI/UX Design',
};

export const technicalSkillsData = [
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

export const workExperienceData = [
  {
    title: 'Bill : Front End Engineer',
    duration: 'Jul 2022 - Dec 2023',
    location: 'San Jose',
    remote: true,
    description:
      'Worked with Angular & RxJS on the revenue-generating International Payments Team.',
    jobTasks: [
      'Retrofitted existing Domestic payment flows with International options, to enable users to make International Payments with current exchange rates.',
      'Operated across several teams to enable these features by working with the code owners to develop features and fix bugs.',
      'Wrote package.json scripts to streamline repetitive engineering tasks.',
      'Created training documentation in Markdown, on Confluence to onboard new engineers and standardize processes.',
    ],
    technologies: [
      'TypeScript',
      'Angular',
      'RxJS',
      'Technical Documentation',
      'Training',
      'JavaScript',
    ],
  },
  {
    title: 'Williams Sonoma Inc : Front End Engineer',
    duration: 'April 2021 - June 2022',
    location: 'San Francisco',
    remote: true,
    description:
      'Worked on the Micro Front End team, transitioning Production pages from 6 brands, into a unified Vue project.',
    jobTasks: [
      'Engineered styling & architectural updates to Vue components to all 6 supported brands, including; the Product Information pages for the Purchasing Component & Product Flags Component, Shop pages, & Content pages.',
      'Solved Local Environment Stability Issues with a self-directed NodeJS project that automated engineering tasks, including; cloning 11 repos pointing to multiple remotes per brand, running 4-5 server commands, creating multiple feature branches, updating local branches to the latest release code.',
      'Managed & Migrated pull requests from team-specific repos, to Bedrock & Release Management repos, including batch cherry-picked commits from my team to the upstream repos.',
      'Mentored junior engineers on my team with paired programming sessions and sharing my documentation.',
    ],
    technologies: [
      'Javascript',
      'Vue',
      'SASS',
      'NodeJS',
      'Shell',
      'Markdown',
      'Adobe Experience Manager',
    ],
  },
  {
    title: 'NewlyWords : Front End Engineer',
    duration: 'Oct 2020 - April 2021',
    location: 'San Francisco',
    remote: true,
    description:
      'NewlyWords is a React & Ruby memory book platform where hundreds of users per day can invite their friends & family to collaborate on a commemorative digital or physical book.',
    jobTasks: [
      'Engineered the Memory Book Project Dashboard in React with custom Hooks, where project owners view and edit pages submitted from their contributors, and view information about their book.',
      'Built the Questionnaire as a new memory book content type, providing project owners a place to ask their contributors questions to answer for their collaborative memory book content.',
      'Developed a design guide with classNameNames and partials, from the product design system, to build stylesheets which implemented reusable classNames and styles.',
      'Mentored a junior ui/ux designer by providing design advice to help him utilize Figma features more robustly, and to think about user experience from our user’s perspective, following a contextual flow of page elements.',
    ],
    technologies: [
      'Javascript',
      'React',
      'Ruby',
      'Shell',
      'Markdown',
      'Adobe Experience Manager',
    ],
  },
];

export const educationData = {
  school: 'University of New Orleans',
  degreeType: 'BA',
  department: 'Philosophy',
};

const resumeData = {
  headerData,
  workExperienceData,
  technicalSkillsData,
  educationData,
};

export default resumeData;
