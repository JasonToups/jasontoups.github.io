// Imports for the Hero Section
import PortfolioLogo from '../img/portfolio/hero/hero-logo.svg';
// Imports for the About Section
import ProfilePic from '../img/portfolio/about/profile-pic-jason-toups-masked.png';
// Imports for the Experience Section
import {
  Bill,
  Chartboost,
  Huoa,
  LifeStreet,
  NewlyWords,
  WilliamsSonoma,
} from './experience/experienceData.js';
import { LightCircle, LightOval } from '../img/svg/lights/index.js';
// Imports for the Projects Section
import {
  CrushIt,
  MarkdownResume,
  ReactTube,
  RickAndMorty,
} from './projects/projectsData.js';
// Imports for the Connect Section
import {
  ConnectGraphic,
  ConnectCircle,
  ConnectCardBackground,
  LinkedIn,
  GitHub,
  Email,
} from '../img/portfolio/connect/index.js';

export const headerData = {
  image: PortfolioLogo,
  imageAlt: 'Jason Toups Portfolio Logo',
  title: 'Web Developer',
};

export const aboutData = {
  profilePic: {
    source: ProfilePic,
    alt: 'Jason Toups Profile Pic',
    className: 'profile-pic',
  },
  header: 'About Me',
  introduction:
    "Thanks for visiting. I'm an engineer & designer, with over 15 years of software production experience; 7 years in Javascript, 12 years in QA and 3 years in UI/UX Design.",
  summary: 'I can engineer, design, & test new applications.',
  closer: [
    'I’ve been working in Agile software production environments for over a decade. When working in a team environment, my task-tracking, written communication & documentation are unmatched.',
    'If you are looking for a unicorn that can do just about anything in the digital realm, you’ve found your engineer. 🦄👨‍💻✨',
  ],
};

export const experienceData = {
  header: 'Experience',
  workExperience: [
    Bill,
    WilliamsSonoma,
    NewlyWords,
    Huoa,
    LifeStreet,
    Chartboost,
  ],
  background: {
    images: [
      {
        className: 'experience-background-svg',
        source: LightCircle,
        alt: 'Light Circle',
      },
      {
        className: 'experience-background-svg',
        source: LightOval,
        alt: 'Light Oval',
      },
    ],
  },
};

export const projectsData = {
  header: 'Projects',
  projects: [MarkdownResume, CrushIt, RickAndMorty, ReactTube],
};

export const connectData = {
  background: {
    circle: {
      source: ConnectCircle,
      alt: 'Connect Circle Graphic',
    },
    card: {
      source: ConnectCardBackground,
      alt: 'Connect Card Graphic',
    },
  },
  header: {
    source: ConnectGraphic,
    alt: 'Connect',
  },
  subheader: 'Reach out',
  aside: 'let me help you',
  profilePic: {
    source: ProfilePic,
    alt: 'Jason Toups Profile Pic',
  },
  icons: [
    {
      source: LinkedIn,
      class: 'linkedin',
      alt: 'linked in',
      url: 'https://www.linkedin.com/in/jasontoups/',
    },
    {
      source: GitHub,
      class: 'github',
      alt: 'git hub',
      url: 'https://github.com/JasonToups',
    },
    {
      source: Email,
      class: 'email',
      alt: 'envelope for email',
      url: 'mailto:me@jasontoups.com',
    },
  ],
  button: {
    text: 'view resume',
    type: 'button',
    onClick: 'handleResumeClick',
  },
};

const portfolioData = {
  headerData,
  aboutData,
  experienceData,
  projectsData,
  connectData,
};

export default portfolioData;
