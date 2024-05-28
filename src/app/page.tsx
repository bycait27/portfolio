'use client';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/sections/About';
import Projects from '../components/sections/Projects';
import Skills from '../components/sections/Skills';
import Chat from '../components/sections/Chat';
// import footer

import { useState } from 'react';

export default function Home() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  return (
  <div>
    <div
      id='home'
    >
      <Navbar setActiveSection={setActiveSection} />
    </div>
    <div>
      <Hero />
    </div>
    <div
      id='#about'
    >
      <About />
    </div>
    <div
      id='#projects'
    >
      <Projects />
    </div>
    <div
      id='#skills'
    >
      <Skills />
    </div>
    {/* add footer component */}
    {activeSection === 'Chat' && <Chat />}
  </div>
  );
};
