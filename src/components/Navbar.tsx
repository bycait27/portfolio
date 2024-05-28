'use client';

import React, { useState } from 'react';
import { Menu, MenuItem } from './ui/NavbarMenu';

import { cn } from '../utils/cn';

interface NavbarProps {
    setActiveSection: (section: string | null) => void;
};

export default function Navbar({ setActiveSection }: NavbarProps) {
    const [active, setActive] = useState<string | null>(null);

    const handleSetActive = (item: string) => {
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

interface NavProps {
    className?: string;
    setActive: (item: string) => void;
    active: string | null;
};

function Nav({ className, setActive, active }: NavProps) {
    return (
        <div
            className={cn('fixed text-lg top-10 max-w-2xl flex', className)}
        >
            <Menu 
                setActive={setActive}
            >
                <a
                    className='pr-3'
                    href='#home'
                >
                    <MenuItem
                        setActive={setActive} 
                        active={active}
                        item='Home'
                    />
                </a>
                <a
                    className='pr-3'
                    href='#about'
                >
                    <MenuItem
                        setActive={setActive} 
                        active={active}
                        item='About'
                    />
                </a>
                <a
                    className='pr-3'
                    href='#projects'
                >
                    <MenuItem
                        setActive={setActive} 
                        active={active}
                        item='Projects'
                    />
                </a>
                <a
                    className='pr-3'
                    href='#skills'
                >
                    <MenuItem
                        setActive={setActive} 
                        active={active}
                        item='Skills'
                    />
                </a>
                <a
                    className='pr-3'
                    href='#chat'
                >
                    <MenuItem
                        setActive={setActive} 
                        active={active}
                        item='Chat'
                    />
                </a>
            </Menu>
        </div>
    );
};