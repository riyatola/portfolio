import React from 'react';
import { ParticlesBackground } from './components/ParticlesBackground';
import { Header } from './components/Header';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Projects } from './components/Projects';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-dark text-gray-900 dark:text-white">
      <ParticlesBackground />
      <Header />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;