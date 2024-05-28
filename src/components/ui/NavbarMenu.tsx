'use client';

import React from 'react';
import { motion } from 'framer-motion';

import styles from '../../styles/navbar.module.css';

export const MenuItem = ({
    setActive,
    active,
    item,
}: {
    setActive: (item: string) => void;
    active: string | null;
    item: string;
}) => {
    const isActive = active === item;

    return (
        <div
            onClick={() => setActive(item)}
            className='relative cursor-pointer p2'
        >
            <motion.p
                transition={{ duration: 0.3 }}
                className={`hover:text-[#f5f5f5] hover:drop-shadow-lg ${isActive ? 'text-white' : 'text-[#ccd0cf]'}`}
            >
                {item}
            </motion.p>
            {isActive && (
                <motion.div
                    layoutId='underline'
                    className='rounded-sm absolute left-0 right-0 bottom-0 h-1 bg-[#ccd0cf]'
                />
            )}
        </div>
    );
};

export const Menu = ({
    setActive,
    children,
}: {
    setActive: (item: string | null) => void;
    children: React.ReactNode;
}) => {
    return (
        <nav
            className={`${styles.container} text-lg`}
        >
            {children}
        </nav>
    )
};