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
} from '../img/portfolio/technologies/index.js';
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
} from '../img/portfolio/connect/index.js';
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { GitHub, LinkedIn } from '../img/portfolio/social/index.js';

export const headerData = {
  image: PortfolioLogo,
  imageAlt: 'Jason Toups Portfolio Logo',
  title: 'Web Developer',
};

export const aboutData = {
  profilePic: {
    source: ProfilePic,
    alt: 'Jason Toups Profile Pic',
  },
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
      company: {
        name: 'Bill',
        description: 'Financial Operations Platform',
        url: 'http://www.bill.com/',
        image: {
          source: Bill,
          alt: 'Bill.com',
        },
      },
      job: {
        title: 'Sr. Frontend Engineer',
        duration: 'Jul 2022 - Dec 2023',
        description: [
          'Worked with Angular & RxJS on the revenue-generating International Payments Team.',
          'We retrofitted existing Domestic payment flows, and added International Payment functionality to them.',
        ],
        tech: [
          { source: Angular, alt: 'angular' },
          { source: TypeScript, alt: 'typescript' },
          { source: RxJS, alt: 'rxjs' },
          { source: Sass, alt: 'sass' },
          { source: Jest, alt: 'jest' },
        ],
      },
    },
    {
      company: {
        name: 'Williams Sonoma, Inc.',
        description:
          '6 eCommerce sites, including Williams Sonoma, West Elm, & Pottery Barn',
        url: 'http://www.williams-sonomainc.com/',
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
        tech: [
          { source: Vue, alt: 'vue' },
          { source: Javascript, alt: 'javascript' },
          { source: AEM, alt: 'adobe experience manager' },
          { source: Sass, alt: 'sass' },
          { source: Jest, alt: 'jest' },
        ],
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
        tech: [
          { source: React, alt: 'react' },
          { source: Javascript, alt: 'javascript' },
          { source: Ruby, alt: 'ruby' },
          { source: Sass, alt: 'sass' },
        ],
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
        tech: [
          { source: React, alt: 'react' },
          { source: Javascript, alt: 'javascript' },
          { source: Wordpress, alt: 'wordpress' },
          { source: Sass, alt: 'sass' },
        ],
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
        tech: [
          { source: An, alt: 'adobe animate' },
          { source: Javascript, alt: 'javascript' },
          { source: Sketch, alt: 'sketch' },
          { source: Css, alt: 'cascading style sheets' },
        ],
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
        tech: [
          { source: Sketch, alt: 'sketch' },
          { source: Metamarkets, alt: 'meta markets' },
        ],
      },
    },
  ],
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
      technologies: [
        { source: Markdown, alt: 'markdown' },
        { source: Css, alt: 'css' },
      ],
    },
    {
      image: CrushIt,
      imageAlt: 'crush it javascript game',
      imageUrl: 'https://jasontoups.github.io/CrushIt',
      projectNumber: '2',
      title: 'Crush It!!!',
      description:
        'Block Crushing Game built with JS/JQuery/HTML5, with only CSS assets.',
      technologies: [
        { source: Javascript, alt: 'javascript' },
        { source: JQuery, alt: 'jquery' },
        { source: Css, alt: 'css' },
      ],
    },
    {
      image: RickAndMorty,
      imageAlt: 'rick and morty react character database',
      imageUrl: 'https://jasontoups.github.io/rick-and-morty/',
      projectNumber: '3',
      title: 'Rick & Morty',
      description:
        'This site uses the Rick and Morty API to render a database of characters, locations and episodes.',
      technologies: [
        { source: React, alt: 'react' },
        { source: Css, alt: 'css' },
      ],
    },
    {
      image: ReactTube,
      imageAlt: 'React Tube App',
      imageUrl: 'https://jasontoups.github.io/YouTube-React-Hooks/',
      projectNumber: '4',
      title: 'ReactTube',
      description:
        'Using the YouTube API to return a short list of 5 videos, utilizing Primitive & Custom Hooks to fetch data.',
      technologies: [
        { source: React, alt: 'react' },
        { source: Css, alt: 'css' },
      ],
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
