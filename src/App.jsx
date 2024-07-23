import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

const App = () => (
  <div className="App">
    <Header />
    <About />
    <Projects />
    <Contact />
  </div>
);

export default App;
