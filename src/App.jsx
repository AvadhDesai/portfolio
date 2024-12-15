import React, { useState, useEffect } from 'react';
import Nav from './components/Nav.jsx'
import './App.css'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Experience from './components/Experience.jsx';
import Contact from './components/Contact.jsx';

function App() {
  return (
    <div className="bg-slate-950 w-full">
      <Nav></Nav>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <Experience></Experience>
      <Contact></Contact>
    </div>
  );
}

export default App;