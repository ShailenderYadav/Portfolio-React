import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
