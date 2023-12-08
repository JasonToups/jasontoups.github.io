import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Portfolio from './Portfolio'; // Assuming you have a Portfolio component
import Resume from './Resume'; // Assuming you have a Resume component

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Portfolio />} />
          <Route path='/resume' element={<Resume />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
