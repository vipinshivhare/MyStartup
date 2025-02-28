import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Startupathon from './pages/Startupathon';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/startupathon" element={<Startupathon />} />
        <Route path="/" element={<Startupathon />} />
      </Routes>
    </Router>
  );
}

export default App;
