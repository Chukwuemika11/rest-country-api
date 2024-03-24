import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Africa from './components/Africa';
import America from './components/America';
import Asia from './components/Asia';
import Europe from './components/Europe';
import Oceania from './components/Oceania';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/africa" element={<Africa />} />
        <Route path="/america" element={<America />} />
        <Route path="/asia" element={<Asia />} />
        <Route path="/europe" element={<Europe />} />
        <Route path="/oceania" element={<Oceania />} />
      </Routes>
    </Router>
  );
}

export default App;
