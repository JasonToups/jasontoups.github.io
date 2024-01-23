import {
  CrushItSvg,
  MarkdownResumeSvg,
  ReactTubeSvg,
  RickAndMortySvg,
} from '../img/portfolio/projects/index.js';

class ProjectImage {
  constructor(source, alt, url) {
    this.source = source;
    this.alt = alt;
    this.url = url;
  }
}

export const CrushItImg = new ProjectImage(
  CrushItSvg,
  'Crush It',
  'https://jasontoups.github.io/CrushIt'
);

export const MarkdownResumeImg = new ProjectImage(
  MarkdownResumeSvg,
  'Markdown Resume',
  'https://github.com/JasonToups/markdown-resume'
);

export const ReactTubeImg = new ProjectImage(
  ReactTubeSvg,
  'React Unsplash',
  'https://jasontoups.github.io/ouTube-React-Hooks'
);

export const RickAndMortyImg = new ProjectImage(
  RickAndMortySvg,
  'rick and morty react character database',
  'https://jasontoups.ithub.io/rick-and-morty'
);

const projectsImageData = {
  CrushItImg,
  MarkdownResumeImg,
  ReactTubeImg,
  RickAndMortyImg,
};

export default projectsImageData;
