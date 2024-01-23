import {
  CrushItImg,
  MarkdownResumeImg,
  ReactTubeImg,
  RickAndMortyImg,
} from './projectsImageData';

import { Css, Javascript, JQuery, Markdown, React } from '../technologiesData';

class Project {
  constructor(image, title, description, technologies) {
    this.image = image;
    this.title = title;
    this.description = description;
    this.technologies = technologies;
  }
}

export const CrushIt = new Project(
  CrushItImg,
  'Crush It!',
  'Block Crushing Game built with JS/JQuery/HTML5, with only CSS styling.',
  {
    className: 'glass-foreground',
    images: [Javascript, JQuery, Css],
  }
);

export const MarkdownResume = new Project(
  MarkdownResumeImg,
  'Markdown Resume',
  'Write your resume in a Markdown file, style it with CSS, then generate an HTML, PDF or Word file.',
  {
    className: 'glass-foreground',
    images: [Markdown, Css],
  }
);

export const ReactTube = new Project(
  ReactTubeImg,
  'React Unsplash',
  'Using the YouTube API to return a short list of 5 videos, utilizing Primitive & Custom Hooks to fetch data.',
  { className: 'glass-foreground', images: [React, Css] }
);

export const RickAndMorty = new Project(
  RickAndMortyImg,
  'Rick & Morty',
  'This site uses the Rick and Morty API to render a database of characters, locations and episodes.',
  { className: 'glass-foreground', images: [React, Css] }
);

export const projectsData = {
  CrushIt,
  MarkdownResume,
  ReactTube,
  RickAndMorty,
};

export default projectsData;
