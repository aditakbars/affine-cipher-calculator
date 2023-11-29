import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';

import './App.css';

function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/about" element={<About />} />
          </Routes>
      </Router>
    </div>
  );
}
export default App;
