import {
  CrushItSource,
  MarkdownResumeSource,
  ReactTubeSource,
  RickAndMortySource,
} from '../../img/portfolio/projects/index';

class ProjectImage {
  constructor(source, alt, url) {
    this.source = source;
    this.alt = alt;
    this.url = url;
  }
}

export const CrushItImg = new ProjectImage(
  CrushItSource,
  'Crush It',
  'https://jasontoups.github.io/CrushIt'
);

export const MarkdownResumeImg = new ProjectImage(
  MarkdownResumeSource,
  'Markdown Resume',
  'https://github.com/JasonToups/markdown-resume'
);

export const ReactTubeImg = new ProjectImage(
  ReactTubeSource,
  'React Unsplash',
  'https://jasontoups.github.io/ouTube-React-Hooks'
);

export const RickAndMortyImg = new ProjectImage(
  RickAndMortySource,
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
