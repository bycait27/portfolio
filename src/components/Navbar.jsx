'use client';

import React, { useState } from 'react';
import { cn } from '../utils/cn';

export default function Navbar({ setActiveSection }) {
    const [active, setActive] = useState(null);

    const handleSetActive = (item) => {
        if (active === item) {
            setActive(null);
            setActiveSection(null);
            } else {
                setActive(item);
                setActiveSection(item);
        };
    };

    return (
        <div
            className='relative w-full flex items-center justify-center'
        >
            <Nav
                className='pt-6 top-2'
                setActive={handleSetActive}
                active={active}
            />
        </div>
    );
};

function Nav({ className, setActive, active }) {
    return (
        <div
            className={cn('fixed text-lg top-10 max-w-2xl flex', className)}
        >
                <a
                    className='pr-3'
                    href='#home'
                >
                    
                </a>
                <a
                    className='pr-3'
                    href='#about'
                >
                    
                </a>
                <a
                    className='pr-3'
                    href='#projects'
                >
                    
                </a>
                <a
                    className='pr-3'
                    href='#skills'
                >
                    
                </a>
                <a
                    className='pr-3'
                    href='#chat'
                >
                    
                </a>
        </div>
    );
};