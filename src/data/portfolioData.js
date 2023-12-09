import Huoa from '../img/experience/experience-huoa.jpg';
import NewlyWords from '../img/experience/experience-newlywords.jpg';
import WilliamsSonoma from '../img/experience/experience-ws.jpg';

export const experienceData = {
  header: '{Engineering Experience}',
  workExperience: [
    {
      image: WilliamsSonoma,
      imageAlt: 'Williams Sonoma, Inc.',
      imageUrl: 'http://www.williams-sonomainc.com/',
      title: 'Williams Sonoma, Inc.',
      description: [
        'Working on the Micro Front End team, transitioning Production pages from 6 brands, into a unified Vue project, with 6 brand configs.',
        'Engineering architectural & styling updates to Vue components for all 6 supported brands, including; the Product Information pages for the Purchasing Component & Product Flags Component, Shop pages, & Content pages.',
        'Solved Local Environment Stability Issues across several teams with a self-directed Node & Shell project that automated repetitive engineering tasks, including; cloning 11 repos pointing to multiple remotes per brand, running 4-5 server commands, creating multiple feature branches across each brand with an interactive Shell script, updating local branches to the latest release code, and pruning the Docker container.',
        'Managing & Migrating pull requests from team-specific repos, to Bedrock & Release Management repos, including batch cherry-picked commits from my team to the upstream repos.',
        'Mentoring junior engineers on my team with paired-programming sessions and sharing helpful resources.',
      ],
    },
    {
      image: NewlyWords,
      imageAlt: 'NewlyWords',
      imageUrl: 'https://www.newlywords.com/',
      title: 'Newlywords',
      description: [
        'NewlyWords is a React & Ruby memory book platform where hundreds of users per day can invite their friends & family to collaborate on a commemorative digital or physical book.',
        'I engineered the Memory Book Project Dashboard in React with custom Hooks, where project owners view and edit pages submitted from their contributors, and view information about their book.',
        'I built the Questionnaire as a the new memory book content type, providing project owners a place to ask their contributors questions to answer for their collaborative memory book content.',
        'I developed a design guide with classNames and partials, from the product design system, to build stylesheets which implemented reusable classnames and styles.',
        'I mentored a junior ui/ux designer by providing design advice to help him utilize Figma features more robustly, and to think about user experience from our user’s perspective, following a contextual flow of page elements.',
      ],
    },
    {
      image: Huoa,
      imageAlt: 'Hawaii United Okinawa Association',
      imageUrl:
        'https://github.com/Hawaian-United-Okinawa-Association/huoa-react',
      title: 'Hawaii United Okinawa Association',
      description: [
        "Rebuilt original static site to be in the JAMstack, improving speed, page weight, and security of the older version of the client's website. Built with: React, React-Redux, Hooks, with a Wordpress backend and mobile support.",
        'Contributed to component library, creating dynamic components rendering images and content served up by the WordPress API.',
        'Engineered the reusable React Container components to control all layouts (Web, Tablet, Mobile) in CSS Grid and Sass, along with reusable Card components that are used site-wide.',
        'Added Docker to the project to keep all of our dev environments in sync with the latest dependencies.',
        'Onboarded new engineers by writing onboarding documentation in markdown & included it in the repo.',
      ],
    },
  ],
};

const portfolioData = {
  experienceData,
};

export default portfolioData;
