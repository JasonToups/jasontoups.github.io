import {
  ConnectGraphicSource,
  ConnectCircleSource,
  ConnectCardBackgroundSource,
  LinkedInSource,
  GitHubSource,
  EmailSource,
} from '../../img/portfolio/connect/index.js';

class ConnectIcon {
  constructor(source, alt, url) {
    this.source = source;
    this.alt = alt;
    this.url = url;
  }
}

class ConnectImage {
  constructor(source, alt) {
    this.source = source;
    this.alt = alt;
  }
}

export const ConnectGraphic = new ConnectImage(
  ConnectGraphicSource,
  'Connect Graphic'
);

export const ConnectCircle = new ConnectImage(
  ConnectCircleSource,
  'Connect Circle Graphic'
);

export const ConnectCardBackground = new ConnectImage(
  ConnectCardBackgroundSource,
  'Connect Card Graphic'
);

export const LinkedIn = new ConnectIcon(
  LinkedInSource,
  'linked in',
  'https://www.linkedin.com/in/jasontoups/'
);

export const GitHub = new ConnectIcon(
  GitHubSource,
  'git hub',
  'https://github.com/JasonToups'
);

export const Email = new ConnectIcon(
  EmailSource,
  'envelope for email',
  'mailto:me@jasontoups.com'
);

const connectData = {
  ConnectGraphic,
  ConnectCircle,
  ConnectCardBackground,
  LinkedIn,
  GitHub,
  Email,
};

export default connectData;
