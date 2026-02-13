import { useState } from "react";
import HeaderComponent from './component/HeaderComponent';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  const [currentSection, setCurrentSection] = useState("home");

  // Map section keys to components
  const sections = {
    home: <Home />,
    about: <About />,
    skills: <Skills />,
    project: <Projects />,
    contact: <Contact />
  };

  return (
    <>
      <HeaderComponent onNavClick={setCurrentSection} />
      <main>
        {sections[currentSection]}
      </main>
    </>
  );
}

export default App;
