'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Home from '../components/sections/Home';
import About from '../components/sections/About';
import Projects from '../components/sections/Projects';
import Skills from '../components/sections/Skills';
import ContactMe from '../components/sections/ContactMe';
import Footer from '../components/Footer';

export default function Page() {
  const [activeSection, setActiveSection] = useState('home');

  const renderSection = () => {
    switch(activeSection) {
      case 'home':
        return (
          <div className="animate-fadeIn">
            <Home />
          </div>
        );
      case 'about':
        return (
          <div className="animate-fadeIn">
            <About />
          </div>
        );
      case 'projects':
        return (
          <div className="animate-fadeIn">
            <Projects />;
          </div>
        );
      case 'skills':
        return (
          <div className="animate-fadeIn">
            <Skills />;
          </div>
        );
      case 'contact-me':
        return (
          <div className="animate-fadeIn">
            <ContactMe />;
          </div>
        );
      default:
        return <Home />;
    }
  };

  return (
    <div className="h-screen overflow-hidden flex flex-col">
      <div className="sticky top-0 bg-background-primary z-50">
        <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      </div>
      
      <div className="flex-1 overflow-y-auto">
        {renderSection()}
      </div>
      
      <Footer />
    </div>
  );
};
