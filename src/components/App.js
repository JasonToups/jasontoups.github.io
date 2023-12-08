import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import Portfolio from './Portfolio/Portfolio';
import Resume from './Resume/Resume';

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path='/' element={<Portfolio />} />
          <Route path='/resume' element={<Resume />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
