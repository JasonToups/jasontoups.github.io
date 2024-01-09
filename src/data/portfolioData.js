// Imports for the Hero Section
import PortfolioLogo from '../img/portfolio/hero/hero-logo.svg';
// Imports for the About Section
import ProfilePic from '../img/portfolio/about/profile-pic-jason-toups-masked.png';
// Imports for the Experience Section
import {
  Huoa,
  NewlyWords,
  WilliamsSonoma,
  Bill,
} from '../img/portfolio/experience/index.js';
// Technologies Imports
import {
  AEM,
  Angular,
  Jest,
  JQuery,
  RxJS,
  React,
  Sass,
  TypeScript,
} from '../img/portfolio/technologies/index.js';
// Imports for the Projects Section
import { RickAndMorty, CrushIt, ReactTube } from '../img/portfolio/index.js';
// Imports for the Contact Section
import {
  faLinkedinIn,
  faGithubAlt,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { MarkdownResume } from '../img/portfolio/projects/index.js';

export const headerData = {
  image: PortfolioLogo,
  imageAlt: 'Jason Toups Portfolio Logo',
  title: 'Web Developer',
};

export const aboutData = {
  profilePic: ProfilePic,
  header: 'About Me',
  introduction:
    "Thanks for stopping by. I'm an engineer & designer, with over 15 years of software production experience; 7 years in Javascript, 12 years in QA and 3 years in UI/UX Design.",
  summary: 'I can engineer, design, & test new applications.',
  closer: [
    'I’ve been working in Agile software production environments for over a decade. When working in a team environment, my task-tracking, written communication & documentation are unmatched.',
    'If you are looking for a unicorn that can do just about anything in the digital realm, you’ve found your engineer. 🦄👨‍💻✨',
  ],
};

export const experienceData = {
  header: 'Experience',
  workExperience: [
    {
      title: 'Bill',
      image: Bill,
      imageAlt: 'Bill.com',
      imageUrl: 'http://www.bill.com/',
      imageTemp: {
        source: Bill,
        alt: 'Bill.com',
      },
      company: {
        name: 'Bill',
        description: 'Financial Operations Platform',
        url: 'http://www.bill.com/',
      },
      job: {
        title: 'Sr. Software Engineer',
        Duration: 'Jul 2022 - Dec 2023',
      },
      description: [
        'Worked with Angular & RxJS on the revenue-generating International Payments Team. We retrofitted existing Domestic payment flows, and added International Payment functionality to them.',
        'Upgraded Domestic payment flows to include International options, enabling users to make International Payments with real-time exchange rates.',
        'Worked seamlessly across teams, collaborating with code owners to implement new features and address bugs during the integration of International Payment functionality.',
        'Developed custom package.json scripts to streamline repetitive engineering tasks, optimizing team productivity and reducing manual effort.',
        'Created Markdown-based training documentation on Confluence, facilitating smooth onboarding for new engineers and standardizing processes, including creating the Merge Request templates for Releases & Feature/Bug tickets.',
        'This Bill.com experience showcases my ability to deliver impactful solutions, contribute collaboratively, and optimize development processes in a dynamic environment.',
      ],
      tech: [Angular, TypeScript, RxJS, Sass, Jest],
    },
    {
      image: WilliamsSonoma,
      imageAlt: 'Williams Sonoma, Inc.',
      imageUrl: 'http://www.williams-sonomainc.com/',
      title: 'Williams Sonoma, Inc.',
      description: [
        'Worked on the Micro Front End team, transitioning Production pages from 6 brands, into a unified Vue project, with 6 brand configs.',
        'Engineered architectural & styling updates to Vue components for all 6 supported brands, including; the Product Information pages for the Purchasing Component & Product Flags Component, Shop pages, & Content pages.',
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
        'Engineered the Memory Book Project Dashboard in React with custom Hooks, where project owners view and edit pages submitted from their contributors, and view information about their book.',
        'Built the Questionnaire as a the new memory book content type, providing project owners a place to ask their contributors questions to answer for their collaborative memory book content.',
        'Developed a design guide with classNames and partials, from the product design system, to build stylesheets which implemented reusable classnames and styles.',
        'Mentored a junior ui/ux designer by providing design advice to help him utilize Figma features more robustly, and to think about user experience from our user’s perspective, following a contextual flow of page elements.',
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

export const projectsData = {
  header: '[My Apps]',
  projects: [
    {
      image: MarkdownResume,
      imageAlt: 'Markdown Resume App',
      imageUrl: 'https://github.com/JasonToups/markdown-resume',
      projectNumber: '1',
      title: 'MarkdownResume',
      description:
        'Write your resume in a Markdown file, style it with CSS, then generate an HTML, PDF or Word file.',
    },
    {
      image: ReactTube,
      imageAlt: 'React Tube App',
      imageUrl: 'https://jasontoups.github.io/YouTube-React-Hooks/',
      projectNumber: '2',
      title: 'ReactTube',
      description:
        'Search the YouTube API and return a short list of 5 videos, utilizing Primitive & Custom Hooks to fetch data.',
    },
    {
      image: CrushIt,
      imageAlt: 'crush it javascript game',
      imageUrl: 'https://jasontoups.github.io/CrushIt',
      projectNumber: '3',
      title: 'Crush It!!!',
      description:
        'Mobile Block Crushing Game built with JS/JQuery/HTML5, with only CSS assets. Styled after Candy Crush.',
    },
    {
      image: RickAndMorty,
      imageAlt: 'rick and morty react character database',
      imageUrl: 'https://jasontoups.github.io/rick-and-morty/',
      projectNumber: '4',
      title: 'Rick & Morty Database',
      description:
        'This site uses the Rick and Morty API to render a database of characters, locations and episodes.',
    },
  ],
};

export const contactData = [
  {
    icon: faLinkedinIn,
    link: 'https://www.linkedin.com/in/jasontoups/',
  },
  {
    icon: faGithubAlt,
    link: 'https://github.com/JasonToups',
  },
  {
    icon: faEnvelope,
    link: 'mailto:me@jasontoups.com',
  },
  {
    icon: faTwitter,
    link: 'https://twitter.com/jsontoups',
  },
];

const portfolioData = {
  headerData,
  aboutData,
  experienceData,
  projectsData,
  contactData,
};

export default portfolioData;
