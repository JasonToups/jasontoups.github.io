import React from 'react';
import '../style/app.scss';
import About from './About';
import Contact from './Contact';
import Experience from './Experience';
import Header from './Header';
import Map from './Map';
import Projects from './Projects';
import Tech from './Tech';

const App = () => {

	return (
		<div className='portfolio-site'>
			<Header />
      <About />
      <Tech />
      <Experience />
      <Projects />
      <Map />
			<Contact />
		</div>
	);
};

export default App;
