'use client';

import {
    Typography,
    Button,
    Card,
    CardContent,
    CardActions
} from '@mui/material';

import { ThemeProvider, createTheme } from '@mui/material/styles';

import styles from '../styles/project.module.css';

const theme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    color: '#222',
                    backgroundColor: '#ccd0cf',
                    "&:hover": { color: '#ccd0cf', backgroundColor: '#1e1f22ac' },
                    padding: 4,
                    border: 'white solid 1px'
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    // maxWidth: 600,
                    minHeight: 200,
                    backgroundColor: '#1e1f22ac',
                    borderRadius: 5,
                    padding: 15,
                    border: '#ccd0cf solid 1px',
                    color: '#ccd0cf'
                },
            },
        },
    },
});

interface ProjectProps {
    projectTitle: string;
    projectDescription: string;
    viewCode: string;
    viewApp: string;
    tech: string[];
};

export default function Project({ projectTitle, projectDescription, viewCode, viewApp, tech }: ProjectProps) {
    return (
        <ThemeProvider 
            theme={theme}
        >
            <div
                className={styles.container}
            >
                <Card
                    className={styles.card}
                >
                    <CardContent>
                        <Typography>
                            {projectTitle}
                        </Typography>
                        <Typography>
                            {projectDescription}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <a
                            href={viewCode}
                            target='_blank'
                        >
                            <Button>
                                View code
                            </Button>
                        </a>
                        <a
                            href={viewApp}
                            target='_blank'
                        >
                            <Button>
                                View app
                            </Button>
                        </a>
                    </CardActions>
                    <div
                        className={styles.techList}
                    >
                        {tech.map((tech, index) => (
                            <span
                                key={index}
                                className={styles.techItem}
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </Card>
            </div>
        </ThemeProvider>
    );
};