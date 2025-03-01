import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Startupathon from './pages/Startupathon';
import AdminPanel from './components/AdminPanel';

function App() {
  const [cards, setCards] = useState([]);

  return (
    <Router>
      <Routes>
        <Route path="/startupathon" element={<Startupathon cards={cards} />} />
        <Route path="/" element={<Startupathon cards={cards} />} />
        <Route path="/admin" element={<AdminPanel cards={cards} setCards={setCards} />} />
      </Routes>
    </Router>
  );
}

export default App;
