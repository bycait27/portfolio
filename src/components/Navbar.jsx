'use client';

import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa';

export default function Navbar({ activeSection, setActiveSection }) {
    const handleNavClick = (section) => {
        setActiveSection(section);
    };

    return (
        <div className='flex flex-row text-text-primary font-bold justify-between items-center w-full px-4 py-4'>
            {/* left side - evenly spaced */}
            <div className="flex items-center space-x-6 p-3">
                {/* social icons */}
                <a className='hover:text-text-secondary transition-colors' href='https://github.com/bycait27' target='_blank' rel='noopener noreferrer'>
                    <FaGithub size={20} />
                </a>
                <a className='hover:text-text-secondary transition-colors' href='https://linkedin.com/in/caitlin-ash' target='_blank' rel='noopener noreferrer'>
                    <FaLinkedin size={20} />
                </a>
                {/* TODO: add updated resume */}
                <a className='text-text-secondary rounded-md border border-text-secondary px-3 py-1 hover:bg-text-secondary hover:text-background-primary transition-colors flex items-center gap-2' href='/files/resume.pdf' download>
                    <FaDownload size={14} />
                    Resume
                </a>
                <a className='hover:text-text-secondary transition-colors' href='/blog'>My Blog</a>
            </div>
            
            {/* right side - evenly spaced */}
            <div className="flex items-center space-x-6 p-3">
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
        </div>
    );
};