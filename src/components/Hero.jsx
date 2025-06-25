import React, { useState } from 'react';
import styles from '../styles/hero.module.css';

export default function Hero() {
    return (
        <div
            className={styles.intro}
        >
            <p>
                Hello, my name is Caitlin Ash
            </p>
            <p>
                and I&apos;m a <span className={styles.highlight}>full-stack web developer</span>
            </p>
        </div>
    );
};