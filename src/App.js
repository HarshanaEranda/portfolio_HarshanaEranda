import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import ContactMe from './components/pages/ContactMe';
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import Education from './components/pages/Education'
// import Skills from './components/pages/Skills';
// import Contact from './components/pages/Contact';

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Login />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/projects" element={<Projects />} />
        {/* <Route path="/skills" element={<Skills />} /> */}
        <Route path="/contact" element={<ContactMe />} />
      </Routes>
    </Router>
  );
}

export default App;