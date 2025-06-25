'use client';

import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa';

export default function Navbar({}) {
    return (
        <div className='flex flex-row justify-between items-center w-full px-4 py-4'>
            {/* left side - evenly spaced */}
            <div className="flex items-center space-x-6 p-3">
                {/* social icons */}
                <a className='hover:text-text-secondary transition-colors' href='https://github.com/bycait27' target='_blank' rel='noopener noreferrer'>
                    <FaGithub size={20} />
                </a>
                <a className='hover:text-text-secondary transition-colors' href='https://linkedin.com/in/caitlin-ash' target='_blank' rel='noopener noreferrer'>
                    <FaLinkedin size={20} />
                </a>
                <a className='text-text-secondary rounded-md border border-text-secondary px-3 py-1 hover:bg-text-secondary hover:text-background-primary transition-colors flex items-center gap-2' href='/files/resume.pdf' download>
                    <FaDownload size={14} />
                    Resume
                </a>
                <a className='hover:text-text-secondary transition-colors' href='/blog'>My Blog</a>
            </div>
            
            {/* right side - evenly spaced */}
            <div className="flex items-center space-x-6 p-3">
                <a className='hover:text-text-secondary transition-colors' href='#about'>About</a>
                <a className='hover:text-text-secondary transition-colors' href='#projects'>Projects</a>
                <a className='hover:text-text-secondary transition-colors' href='#skills'>Skills</a>
                <a className='text-text-tertiary hover:text-text-secondary transition-colors' href='#contact-me'>Contact Me</a>
            </div>
        </div>
    );
};