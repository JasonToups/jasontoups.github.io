import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import Portfolio from './Portfolio/Portfolio';
import Resume from './Resume/Resume';
import { NavigationProvider } from '../contexts/NavigationContext';

function App() {
  return (
    <Router>
      <NavigationProvider>
        <Navigation />
        <Routes>
          <Route path='/' element={<Portfolio />} />
          <Route path='/resume' element={<Resume />} />
        </Routes>
      </NavigationProvider>
    </Router>
  );
}

export default App;
