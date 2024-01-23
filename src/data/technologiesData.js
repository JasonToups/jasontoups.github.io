import {
  AEMSvg,
  AnSvg,
  CssSvg,
  AngularSvg,
  JavascriptSvg,
  JestSvg,
  JQuerySvg,
  MarkdownSvg,
  MetamarketsSvg,
  RxJSSvg,
  ReactSvg,
  RubySvg,
  SassSvg,
  SketchSvg,
  TypeScriptSvg,
  VueSvg,
  WordpressSvg,
} from '../img/portfolio/technologies';

class Technology {
  constructor(source, alt, url) {
    this.source = source;
    this.alt = alt;
    this.url = url;
  }
}

export const AEM = new Technology(
  AEMSvg,
  'Adobe Experience Manager',
  'https://www.adobe.com/marketing/experience-manager.html'
);

export const An = new Technology(
  AnSvg,
  'Adobe Animate',
  'https://www.adobe.com/products/animate.html'
);

export const Angular = new Technology(
  AngularSvg,
  'Angular',
  'https://angular.io/'
);

export const Css = new Technology(
  CssSvg,
  'CSS',
  'https://developer.mozilla.org/en-US/docs/Web/CSS'
);

export const Javascript = new Technology(
  JavascriptSvg,
  'Javascript',
  'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
);

export const Jest = new Technology(JestSvg, 'Jest', 'https://jestjs.io/');

export const JQuery = new Technology(
  JQuerySvg,
  'jQuery',
  'https://jquery.com/'
);

export const Markdown = new Technology(
  MarkdownSvg,
  'Markdown',
  'https://www.markdownguide.org/'
);

export const Metamarkets = new Technology(
  MetamarketsSvg,
  'Metamarkets',
  'https://metamarkets.com/'
);

export const RxJS = new Technology(RxJSSvg, 'RxJS', 'https://rxjs.dev/');

export const React = new Technology(ReactSvg, 'React', 'https://reactjs.org/');

export const Ruby = new Technology(
  RubySvg,
  'Ruby',
  'https://www.ruby-lang.org/en/'
);

export const Sass = new Technology(SassSvg, 'Sass', 'https://sass-lang.com/');

export const Sketch = new Technology(
  SketchSvg,
  'Sketch',
  'https://www.sketch.com/'
);

export const TypeScript = new Technology(
  TypeScriptSvg,
  'TypeScript',
  'https://www.typescriptlang.org/'
);

export const Vue = new Technology(VueSvg, 'Vue', 'https://vuejs.org/');

export const Wordpress = new Technology(
  WordpressSvg,
  'Wordpress',
  'https://wordpress.com/'
);

const technologiesData = [
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
];

export default technologiesData;
