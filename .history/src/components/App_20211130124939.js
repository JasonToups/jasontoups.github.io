import React from 'react';
import '../style/app.scss';
import About from './About';
import Contact from './Contact';
import Experience from './Experience';
import Hero from './Hero';
import Production from './Production';
import Projects from './Projects';

const App = () => {

	return (
		<div className='portfolio-site'>
			<Hero />
      <About />
			<Contact />
      <Experience />
      <Production />
      <Projects />
		</div>
	);
};

export default App;