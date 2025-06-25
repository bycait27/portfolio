'use client';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/sections/About';
import Projects from '../components/sections/Projects';
import Skills from '../components/sections/Skills';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <div id="home">
        <Navbar />
      </div>
      <div>
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <Footer />
    </div>
  );
};
