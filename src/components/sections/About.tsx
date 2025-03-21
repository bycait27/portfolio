import React, { useState } from 'react';

import styles from '../../styles/about.module.css';

export default function About() {
    return (
        <div
            className={styles.container}
        >
            <h1
                className={styles.header}
            >
                About
            </h1>
            <div
                className={styles.divider}
            >
            </div>
            <div
                className={styles.paragraph}
            >
                <p>
                    I am a full-stack web developer and graduate student in computer science. My passion for technology and problem-solving, shaped by a rigorous coding bootcamp and a background in 
                    Psychology, drives me to build user-friendly and engaging web applications. My understanding of human behavior and preferences guides my approach to creating intuitive user interfaces and 
                    robust backend systems.
                </p>
                <br></br>
                <p>
                I am committed to developing web applications that not only meet technical standards but also resonate with users on a psychological level. As a lifelong learner, I 
                stay current with industry trends and embrace the evolving world of web development, one line of code at a time.
                </p>
            </div>
        </div>
    );
};