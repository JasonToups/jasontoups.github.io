// Imports for the Technologies
import technologies from './technologiesData.js';
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
} from '../img/portfolio/experience/index.js';
import { LightCircle, LightOval } from '../img/svg/lights/index.js';
// Technologies Imports
import {
  AEM,
  An,
  Angular,
  Css,
  Javascript,
  Jest,
  JQuery,
  Markdown,
  Metamarkets,
  RxJS,
  React,
  Ruby,
  Sass,
  Sketch,
  TypeScript,
  Vue,
  Wordpress,
} from './technologiesData.js';
// Imports for the Projects Section
import {
  RickAndMorty,
  CrushIt,
  ReactTube,
  MarkdownResume,
} from '../img/portfolio/projects/index.js';
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
    {
      company: {
        name: 'Bill',
        description: 'Financial Operations Platform',
        url: 'http://www.bill.com/',
        image: {
          source: Bill,
          alt: 'Bill.com',
          url: 'http://www.bill.com/',
        },
      },
      job: {
        title: 'Sr. Frontend Engineer',
        duration: 'Jul 2022 - Dec 2023',
        description: [
          'Worked with Angular & RxJS on the revenue-generating International Payments Team.',
          'We retrofitted existing Domestic payment flows, and added International Payment functionality to them.',
        ],
        tech: [Angular, TypeScript, RxJS, Sass, Jest],
      },
    },
    {
      company: {
        name: 'Williams Sonoma, Inc.',
        description:
          '6 eCommerce sites, including Williams Sonoma, West Elm, & Pottery Barn',
        url: 'https://www.williams-sonoma.com/products/staub-deep-oven/',
        image: {
          source: WilliamsSonoma,
          alt: 'Williams Sonoma Incorporated',
        },
      },
      job: {
        title: 'Frontend Engineer',
        duration: 'Apr 2021 - June 2022',
        description: [
          'Worked with the Micro Front End team, transitioning Production pages from 6 brands, into a unified Vue project.',
          'Updated Vue Components including; Product Information pages for the Purchasing Component & Product Flags, Shop & Content pages.',
        ],
        tech: [Vue, Javascript, AEM, Sass, Jest],
      },
    },
    {
      company: {
        name: 'NewlyWords',
        description: 'Collaborative Memory Book creation & publishing',
        url: 'https://www.newlywords.com/',
        image: {
          source: NewlyWords,
          alt: 'Newly Words',
        },
      },
      job: {
        title: 'Frontend Engineer',
        duration: 'Oct 2020 - Apr 2021',
        description: [
          'Engineered the Memory Book Project Dashboard in React with custom Hooks.',
          'Built the Questionnaire as a new memory book content type.',
          'Developed a design guide.',
          'Mentored a junior ui/ux designer.',
        ],
        tech: [React, Javascript, Ruby, Sass],
      },
    },
    {
      company: {
        name: 'Hawaii United Okinawa Association',
        description: 'Cultural exchange between Hawaii & Japan',
        url: 'https://github.com/Hawaian-United-Okinawa-Association/huoa-react',
        image: {
          source: Huoa,
          alt: 'Hawaii United Okinawa Association',
        },
      },
      job: {
        title: 'Frontend Engineer',
        duration: 'Apr 2020 - Oct 2020',
        description: [
          'Refactored existing static HUOA site to a dynamic React site, using Wordpress on the backend.',
          'Built reusable components that were used across the site.',
          'Engineered custom Hooks to handle State between multiple components.',
        ],
        tech: [React, Javascript, Wordpress, Sass],
      },
    },
    {
      company: {
        name: 'LifeStreet',
        description: 'Programmatic Mobile Marketing Platform',
        url: 'https://lifestreet.com/',
        image: {
          source: LifeStreet,
          alt: 'life street',
        },
      },
      job: {
        title: 'Sr. Product Designer',
        duration: ' Sept 2017 - Oct 2019',
        description: [
          'Engineered & Designed mobile marketing materials.',
          'Built HTML playable ads in Javascript, with Adobe Animate for clients.',
          'Designed UI/UX storyboards for playable ads in Sketch.',
        ],
        tech: [An, Javascript, Sketch, Css],
      },
    },
    {
      company: {
        name: 'Chartboost',
        description: 'Programmatic Mobile Advertising Network',
        url: 'https://www.chartboost.com/',
        image: {
          source: Chartboost,
          alt: 'chart boost',
        },
      },
      job: {
        title: 'Product Designer',
        duration: 'Feb 2017 - Aug 2017',
        description: [
          'Designed UI/UX storyboards for playable ads in Sketch.',
          'Scaled the production of playables 170% in the first 2 months.',
          'Iterated existing ads with A/B testing, and reported results from Metamarkets data to all stakeholders.',
        ],
        tech: [Sketch, Metamarkets],
      },
    },
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
  projects: [
    {
      image: MarkdownResume,
      imageAlt: 'Markdown Resume App',
      imageUrl: 'https://github.com/JasonToups/markdown-resume',
      projectNumber: '1',
      title: 'Markdown Resume',
      description:
        'Write your resume in a Markdown file, style it with CSS, then generate an HTML, PDF or Word file.',
      technologies: [Markdown, Css],
    },
    {
      image: CrushIt,
      imageAlt: 'crush it javascript game',
      imageUrl: 'https://jasontoups.github.io/CrushIt',
      projectNumber: '2',
      title: 'Crush It!!!',
      description:
        'Block Crushing Game built with JS/JQuery/HTML5, with only CSS assets.',
      technologies: [Javascript, JQuery, Css],
    },
    {
      image: RickAndMorty,
      imageAlt: 'rick and morty react character database',
      imageUrl: 'https://jasontoups.github.io/rick-and-morty/',
      projectNumber: '3',
      title: 'Rick & Morty',
      description:
        'This site uses the Rick and Morty API to render a database of characters, locations and episodes.',
      technologies: [React, Css],
    },
    {
      image: ReactTube,
      imageAlt: 'React Tube App',
      imageUrl: 'https://jasontoups.github.io/YouTube-React-Hooks/',
      projectNumber: '4',
      title: 'ReactTube',
      description:
        'Using the YouTube API to return a short list of 5 videos, utilizing Primitive & Custom Hooks to fetch data.',
      technologies: [React, Css],
    },
  ],
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
