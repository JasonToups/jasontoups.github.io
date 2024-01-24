import {
  BillImg,
  ChartboostImg,
  HuoaImg,
  LifeStreetImg,
  NewlyWordsImg,
  WilliamsSonomaImg,
} from './experienceImageData.js';

import {
  AEM,
  An,
  Angular,
  Css,
  Javascript,
  Jest,
  Metamarkets,
  RxJS,
  React,
  Ruby,
  Sass,
  Sketch,
  TypeScript,
  Vue,
  Wordpress,
} from '../technologiesData.js';

class Experience {
  constructor(company, job) {
    this.company = company;
    this.job = job;
  }
}

export const Bill = new Experience(
  {
    name: 'Bill',
    description: 'Financial Operations Platform',
    image: BillImg,
  },
  {
    title: 'Sr. Frontend Engineer',
    duration: 'Jul 2022 - Dec 2023',
    description: [
      'Worked with Angular & RxJS on the revenue-generating International Payments Team.',
      'We retrofitted existing Domestic payment flows, and added International Payment functionality to them.',
    ],
    tech: {
      className: `glass-background`,
      images: [Angular, TypeScript, RxJS, Sass, Jest],
    },
  }
);

export const WilliamsSonoma = new Experience(
  {
    name: 'Williams Sonoma, Inc.',
    description:
      '6 eCommerce sites, including Williams Sonoma, West Elm, & Pottery Barn',
    image: WilliamsSonomaImg,
  },
  {
    title: 'Frontend Engineer',
    duration: 'Apr 2021 - June 2022',
    description: [
      'Worked with the Micro Front End team, transitioning Production pages from 6 brands, into a unified Vue project.',
      'Updated Vue Components including; Product Information pages for the Purchasing Component & Product Flags, Shop & Content pages.',
    ],
    tech: {
      className: `glass-background`,
      images: [Vue, Javascript, AEM, Sass, Jest],
    },
  }
);

export const NewlyWords = new Experience(
  {
    name: 'NewlyWords',
    description: 'Collaborative Memory Book creation & publishing',
    image: NewlyWordsImg,
  },
  {
    title: 'Frontend Engineer',
    duration: 'Oct 2020 - Apr 2021',
    description: [
      'Engineered the Memory Book Project Dashboard in React with custom Hooks.',
      'Built the Questionnaire as a new memory book content type.',
      'Developed a design guide.',
      'Mentored a junior ui/ux designer.',
    ],
    tech: {
      className: `glass-background`,
      images: [React, Javascript, Ruby, Sass],
    },
  }
);

export const Huoa = new Experience(
  {
    name: 'Hawaii United Okinawa Association',
    description: 'Cultural exchange between Hawaii & Japan',
    image: HuoaImg,
  },
  {
    title: 'Frontend Engineer',
    duration: 'Apr 2020 - Oct 2020',
    description: [
      'Refactored existing static HUOA site to a dynamic React site, using Wordpress on the backend.',
      'Built reusable components that were used across the site.',
      'Engineered custom Hooks to handle State between multiple components.',
    ],
    tech: {
      className: `glass-background`,
      images: [React, Javascript, Wordpress, Sass],
    },
  }
);

export const LifeStreet = new Experience(
  {
    name: 'LifeStreet',
    description: 'Programmatic Mobile Marketing Platform',
    image: LifeStreetImg,
  },
  {
    title: 'Sr. Product Designer',
    duration: ' Sept 2017 - Oct 2019',
    description: [
      'Engineered & Designed mobile marketing materials.',
      'Built HTML playable ads in Javascript, with Adobe Animate for clients.',
      'Designed UI/UX storyboards for playable ads in Sketch.',
    ],
    tech: {
      className: `glass-background`,
      images: [An, Javascript, Sketch, Css],
    },
  }
);

export const Chartboost = new Experience(
  {
    name: 'Chartboost',
    description: 'Programmatic Mobile Advertising Network',
    image: ChartboostImg,
  },
  {
    title: 'Product Designer',
    duration: 'Feb 2017 - Aug 2017',
    description: [
      'Designed UI/UX storyboards for playable ads in Sketch.',
      'Scaled the production of playables 170% in the first 2 months.',
      'Iterated existing ads with A/B testing, and reported results from Metamarkets data to all stakeholders.',
    ],
    tech: {
      className: `glass-background`,
      images: [Sketch, Metamarkets],
    },
  }
);

const experienceData = [
  Bill,
  WilliamsSonoma,
  NewlyWords,
  Huoa,
  LifeStreet,
  Chartboost,
];

export default experienceData;
