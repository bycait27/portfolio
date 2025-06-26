'use client';

import { useState } from 'react';
import { FaGithub, FaLinkedin, FaDownload, FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar({ activeSection, setActiveSection }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleNavClick = (section) => {
        setActiveSection(section);
        setIsMenuOpen(false); // close menu when item is clicked
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className='relative'>
            <div className='flex flex-row text-text-primary font-bold justify-between items-center w-full px-4 py-4'>
                {/* left side - always visible */}
                <div className="flex items-center space-x-4">
                    <a className='hover:text-text-secondary transition-colors' href='https://github.com/bycait27' target='_blank' rel='noopener noreferrer'>
                        <FaGithub size={20} />
                    </a>
                    <a className='hover:text-text-secondary transition-colors' href='https://linkedin.com/in/caitlin-ash' target='_blank' rel='noopener noreferrer'>
                        <FaLinkedin size={20} />
                    </a>
                    <a className='text-text-secondary rounded-md border border-text-secondary px-3 py-1 hover:bg-text-secondary hover:text-background-primary transition-colors flex items-center gap-2' href='/files/resume.pdf' download>
                        <FaDownload size={14} />
                        <span className="hidden sm:inline">Resume</span>
                    </a>
                </div>
                
                {/* desktop navigation - hidden on mobile */}
                <div className="hidden md:flex items-center space-x-6">
                    <button 
                        className={`hover:text-text-secondary transition-colors ${activeSection === 'home' ? 'text-text-secondary' : ''}`}
                        onClick={() => handleNavClick('home')}
                    >
                        Home
                    </button>
                    <button 
                        className={`hover:text-text-secondary transition-colors ${activeSection === 'about' ? 'text-text-secondary' : ''}`}
                        onClick={() => handleNavClick('about')}
                    >
                        About
                    </button>
                    <button 
                        className={`hover:text-text-secondary transition-colors ${activeSection === 'projects' ? 'text-text-secondary' : ''}`}
                        onClick={() => handleNavClick('projects')}
                    >
                        Projects
                    </button>
                    <button 
                        className={`hover:text-text-secondary transition-colors ${activeSection === 'skills' ? 'text-text-secondary' : ''}`}
                        onClick={() => handleNavClick('skills')}
                    >
                        Skills
                    </button>
                    <button
                        className={`hover:text-text-secondary transition-colors ${activeSection === 'contact-me' ? 'text-text-secondary' : ''}`}
                        onClick={() => handleNavClick('contact-me')}
                    >
                        Contact Me
                    </button>
                </div>

                {/* mobile hamburger button */}
                <button 
                    className="md:hidden hover:text-text-secondary transition-colors"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
                </button>
            </div>

            {/* mobile dropdown menu */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-background-primary border-t border-text-primary/20 shadow-lg z-50">
                    <div className="flex flex-col space-y-2 p-4">
                        <button 
                            className={`text-left py-2 px-4 rounded hover:bg-text-highlight/10 transition-colors ${activeSection === 'home' ? 'text-text-secondary bg-text-highlight/5' : 'text-text-primary'}`}
                            onClick={() => handleNavClick('home')}
                        >
                            Home
                        </button>
                        <button 
                            className={`text-left py-2 px-4 rounded hover:bg-text-highlight/10 transition-colors ${activeSection === 'about' ? 'text-text-secondary bg-text-highlight/5' : 'text-text-primary'}`}
                            onClick={() => handleNavClick('about')}
                        >
                            About
                        </button>
                        <button 
                            className={`text-left py-2 px-4 rounded hover:bg-text-highlight/10 transition-colors ${activeSection === 'projects' ? 'text-text-secondary bg-text-highlight/5' : 'text-text-primary'}`}
                            onClick={() => handleNavClick('projects')}
                        >
                            Projects
                        </button>
                        <button 
                            className={`text-left py-2 px-4 rounded hover:bg-text-highlight/10 transition-colors ${activeSection === 'skills' ? 'text-text-secondary bg-text-highlight/5' : 'text-text-primary'}`}
                            onClick={() => handleNavClick('skills')}
                        >
                            Skills
                        </button>
                        <button
                            className={`text-left py-2 px-4 rounded hover:bg-text-highlight/10 transition-colors ${activeSection === 'contact-me' ? 'text-text-secondary bg-text-highlight/5' : 'text-text-primary'}`}
                            onClick={() => handleNavClick('contact-me')}
                        >
                            Contact Me
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};