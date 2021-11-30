import React from 'react';
import '../style/app.scss';
import About from './About';
import Contact from './Contact';
import Experience from './Experience';
import Hero from './Hero';

const App = () => {

	return (
		<div className='portfolio-site'>
			<About />
			<Contact />
      <Experience />
		</div>
	);
};

export default App;
