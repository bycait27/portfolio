import {
    Button
} from '@mui/material';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DownloadIcon from '@mui/icons-material/Download';

import React, { useState } from 'react';

import styles from '../styles/footer.module.css';

export default function Footer() {
    return (
        <div className={styles.container}>
            <div>
                <a href='https://github.com/bycait27' 
                target="_blank" className={styles.link}>
                    <GitHubIcon sx={{ fontSize: 30 }} />
                </a>
                <a href='https://www.linkedin.com/in/caitlin-ash-14409423b/' 
                target="_blank" className={styles.link}>
                    <LinkedInIcon sx={{ fontSize: 30 }} />
                </a>
                <a
                    href='/files/resumeThree.pdf' 
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <Button
                    variant='contained'
                    endIcon={<DownloadIcon />}
                    sx={{
                        color: '#222',
                        backgroundColor: '#ccd0cf',
                        "&:hover": { color: '#ccd0cf', backgroundColor: '#1e1f22ac' },
                        padding: 0.5,
                        margin: 1,
                        border: 'white solid 1px',
                        fontSize: 12
                    }}
                    >
                        My Resume
                    </Button>
                </a>
            </div>
            <div className={styles.copyright}>
                © 2024 Caitlin Ash
            </div>
        </div>
    );
};