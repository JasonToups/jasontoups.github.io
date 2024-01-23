import {
  CrushItSvg,
  MarkdownResumeSvg,
  ReactTubeSvg,
  RickAndMortySvg,
} from '../img/portfolio/projects/index.js';

class Project {
  constructor(source, alt, url) {
    this.source = source;
    this.alt = alt;
    this.url = url;
  }
}

export const CrushIt = new Project(
  CrushItSvg,
  'Crush It',
  'https://jasontoups.github.io/CrushIt'
);

export const MarkdownResume = new Project(
  MarkdownResumeSvg,
  'Markdown Resume',
  'https://github.com/JasonToups/markdown-resume'
);
export const ReactTube = new Project(
  ReactTubeSvg,
  'React Unsplash',
  'https://jasontoups.github.io/ouTube-React-Hooks'
);
export const RickAndMorty = new Project(
  RickAndMortySvg,
  'rick and morty react character database',
  'https://jasontoups.ithub.io/rick-and-morty'
);
const projectsData = {
  CrushIt,
  MarkdownResume,
  ReactTube,
  RickAndMorty,
};

export default projectsData;
