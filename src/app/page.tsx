'use client';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
// import about
// import projects
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
    {/* add about component */}
    {/* add projects component */}
    {/* add skills component */}
    {/* add footer component */}
    {/* add chat component */}
  </div>
  );
};
