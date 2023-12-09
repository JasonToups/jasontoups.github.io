import React from 'react';

const Resume = () => (
  <div className='resume'>
    <div className='resume-section'>
      <header id='title-block-header'>
        <h1 className='title'>Jason Toups</h1>
        <p className='author'>Jason Toups</p>
      </header>
      <h5 id='mejasontoups.com-.-linkedin-.-portfolio-.-github-.-404.625.6530'>
        me@jasontoups.com .{' '}
        <a href='https://www.linkedin.com/in/jasontoups/'>LinkedIn</a> .{' '}
        <a href='https://jasontoups.github.io/'>Portfolio</a> .{' '}
        <a href='https://github.com/JasonToups'>Github</a> . 404.625.6530
      </h5>
      <h5 id='frontend-engineer-with-over-15-years-of-software-production-experience-including-engineering-testing-uiux-design'>
        Frontend Engineer, with over 15 years of Software Production experience,
        including Engineering, Testing &amp; UI/UX Design
      </h5>
    </div>
    <div className='resume-section'>
      <h2 id='technical-skills'>Technical Skills</h2>
      <div className='technical-skills-grid'>
        <p className='col-1'>
          <strong>Programming</strong>:
        </p>
        <p className='col-2'>
          Javascript · Typescript · Angular · RxJS · Markdown · React ·
          React-Redux · React-Thunk · Vue · Shell · HTML · CSS · Sass · JQuery ·
          Docker
        </p>
        <p className='col-1'>
          <strong>Production</strong>:
        </p>
        <p className='col-2'>
          Agile Development/Scrum Master · JIRA · Git · Software Releases ·
          Affinity Designer · Figma · Adobe Creative Suite · Technical
          Documentation · UI/UX Design · A/B Testing
        </p>
      </div>
    </div>
    <div className='resume-section'>
      <h2 id='work-experience'>Work Experience</h2>
      <div className='work-experience-section'>
        <h3 id='bill-front-end-engineer-jul-2022---dec-2023-san-jose-remote'>
          Bill : Front End Engineer / Jul 2022 - Dec 2023 / San Jose / Remote
        </h3>
        <p>
          Worked with Angular &amp; RxJS on the revenue-generating International
          Payments Team.
        </p>
        <ul>
          <li>
            <strong>Retrofitted</strong> existing Domestic payment flows with
            International options, to enable users to make International
            Payments with current exchange rates.
          </li>
          <li>
            <strong>Operated</strong> across several teams to enable these
            features by working with the code owners to develop features and fix
            bugs.
          </li>
          <li>
            <strong>Wrote</strong> package.json scripts to streamline repetitive
            engineering tasks.
          </li>
          <li>
            <strong>Created</strong> training documentation in Markdown, on
            Confluence to onboard new engineers and standardize processes.
          </li>
        </ul>
        <p>
          <strong>Technologies used:</strong> TypeScript · Angular · RxJS ·
          Technical Documentation · Training · JavaScript
        </p>
      </div>
      <div className='work-experience-section'>
        <h3 id='williams-sonoma-inc-front-end-engineer-april-2021---june-2022-san-francisco-remote'>
          Williams Sonoma Inc : Front End Engineer / April 2021 - June 2022 /
          San Francisco / Remote
        </h3>
        <p>
          Worked on the Micro Front End team, transitioning Production pages
          from 6 brands, into a unified Vue project.
        </p>
        <ul>
          <li>
            <strong>Engineered</strong> styling &amp; architectural updates to
            Vue components to all 6 supported brands, including; the Product
            Information pages for the Purchasing Component &amp; Product Flags
            Component, Shop pages, &amp; Content pages.
          </li>
          <li>
            <strong>Solved</strong> Local Environment Stability Issues with a
            self-directed NodeJS project that automated engineering tasks,
            including; cloning 11 repos pointing to multiple remotes per brand,
            running 4-5 server commands, creating multiple feature branches,
            updating local branches to the latest release code,
          </li>
          <li>
            <strong>Managed</strong> &amp; Migrated pull requests from
            team-specific repos, to Bedrock &amp; Release Management repos,
            including batch cherry-picked commits from my team to the upstream
            repos.
          </li>
          <li>
            <strong>Mentored</strong> junior engineers on my team with paired
            programming sessions and sharing my documentation.
          </li>
        </ul>
        <p>
          <strong>Technologies used:</strong> Javascript · Vue · SASS · NodeJS ·
          Shell · Markdown · Adobe Experience Manager
        </p>
      </div>
      <div className='work-experience-section'>
        <h3 id='newlywords-front-end-engineer-san-francisco-oct-2020---april-2021-remote'>
          NewlyWords : Front End Engineer / San Francisco / Oct 2020 - April
          2021 / Remote
        </h3>
        <p>
          NewlyWords is a React &amp; Ruby memory book platform where hundreds
          of users per day can invite their friends &amp; family to collaborate
          on a commemorative digital or physical book.
        </p>
        <ul>
          <li>
            <strong>Engineered</strong> the Memory Book Project Dashboard in
            React with custom Hooks, where project owners view and edit pages
            submitted from their contributors, and view information about their
            book.
          </li>
          <li>
            <strong>Built</strong> the Questionnaire as a new memory book
            content type, providing project owners a place to ask their
            contributors questions to answer for their collaborative memory book
            content.
          </li>
          <li>
            <strong>Developed</strong> a design guide with classNameNames and
            partials, from the product design system, to build stylesheets which
            implemented reusable classNames and styles.
          </li>
          <li>
            <strong>Mentored</strong> a junior ui/ux designer by providing
            design advice to help him utilize Figma features more robustly, and
            to think about user experience from our user’s perspective,
            following a contextual flow of page elements.
          </li>
        </ul>
        <p>
          <strong>Technologies used:</strong> Javascript · React · Ruby · Shell
          · Markdown · Adobe Experience Manager
        </p>
      </div>
    </div>
    <div className='resume-section'>
      <blockquote>
        <p>
          Additional Work Experience Provided Upon Request &amp; Linked In
          Profile
        </p>
      </blockquote>
    </div>
    <div className='resume-section'>
      <h2 id='education'>Education</h2>
      <p>
        <em>University of New Orleans / BA Philosophy</em>
      </p>
    </div>
  </div>
);

export default Resume;
