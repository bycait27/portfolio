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
                    I am a passionate full-stack web developer who recently embarked on an exciting journey through a rigorous coding boot camp.
                    My interest in technology and programming has now been armed with my newfound knowledge and programming skills, transforming ideas into engaging web experiences.
                    My journey into the field of web development is unique, with my academic background in Psychology. This background has equipped me with the knowledge of human behavior.
                </p>
                <br></br>
                <p>
                    My knowledge and fascination of Pyschology has allowed me to understand user behavior and preferences, which has guided me through my approach to web development and design.
                    I believe it is important to craft intuitive user interfaces while building robust backend systems. My goal is to create web applications that meet these technical standards and resonate with users on a psychological level.
                    Beyond this, I am a life-long learner committed to staying on top of industry trends and navigate through the ever changing world of web development one line of code at a time.
                </p>
            </div>
        </div>
    );
};