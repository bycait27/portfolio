'use client';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/sections/About';
import Projects from '../components/sections/Projects';
// import skills
// import chat

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
    {/* add skills component */}
    {/* add footer component */}
    {/* add chat component */}
  </div>
  );
};
