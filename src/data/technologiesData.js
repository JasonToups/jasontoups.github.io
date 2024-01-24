import {
  AEMSource,
  AnSource,
  CssSource,
  AngularSource,
  JavascriptSource,
  JestSource,
  JQuerySource,
  MarkdownSource,
  MetamarketsSource,
  RxJSSource,
  ReactSource,
  RubySource,
  SassSource,
  SketchSource,
  TypeScriptSource,
  VueSource,
  WordpressSource,
} from '../img/portfolio/technologies';

class Technology {
  constructor(source, alt, url) {
    this.source = source;
    this.alt = alt;
    this.url = url;
  }
}

export const AEM = new Technology(
  AEMSource,
  'Adobe Experience Manager',
  'https://www.adobe.com/marketing/experience-manager.html'
);

export const An = new Technology(
  AnSource,
  'Adobe Animate',
  'https://www.adobe.com/products/animate.html'
);

export const Angular = new Technology(
  AngularSource,
  'Angular',
  'https://angular.io/'
);

export const Css = new Technology(
  CssSource,
  'CSS',
  'https://developer.mozilla.org/en-US/docs/Web/CSS'
);

export const Javascript = new Technology(
  JavascriptSource,
  'Javascript',
  'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
);

export const Jest = new Technology(JestSource, 'Jest', 'https://jestjs.io/');

export const JQuery = new Technology(
  JQuerySource,
  'jQuery',
  'https://jquery.com/'
);

export const Markdown = new Technology(
  MarkdownSource,
  'Markdown',
  'https://www.markdownguide.org/'
);

export const Metamarkets = new Technology(
  MetamarketsSource,
  'Metamarkets',
  'https://metamarkets.com/'
);

export const RxJS = new Technology(RxJSSource, 'RxJS', 'https://rxjs.dev/');

export const React = new Technology(
  ReactSource,
  'React',
  'https://reactjs.org/'
);

export const Ruby = new Technology(
  RubySource,
  'Ruby',
  'https://www.ruby-lang.org/en/'
);

export const Sass = new Technology(
  SassSource,
  'Sass',
  'https://sass-lang.com/'
);

export const Sketch = new Technology(
  SketchSource,
  'Sketch',
  'https://www.sketch.com/'
);

export const TypeScript = new Technology(
  TypeScriptSource,
  'TypeScript',
  'https://www.typescriptlang.org/'
);

export const Vue = new Technology(VueSource, 'Vue', 'https://vuejs.org/');

export const Wordpress = new Technology(
  WordpressSource,
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
