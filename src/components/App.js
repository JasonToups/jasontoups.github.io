import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationComponent from './Navigation/NavigationComponent';
import Portfolio from './Portfolio/Portfolio';
import Resume from './Resume/Resume';

function App() {
  return (
    <Router>
      <div>
        <NavigationComponent />
        <Routes>
          <Route path='/' element={<Portfolio />} />
          <Route path='/resume' element={<Resume />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
