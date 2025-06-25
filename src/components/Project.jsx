'use client';

import {
    Typography,
    Button,
    Card,
    CardContent,
    CardActions
} from '@mui/material';

import { ThemeProvider, createTheme } from '@mui/material/styles';

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

export default function Project({ projectTitle, projectDescription, viewCode, viewApp, tech }) {
    return (
        <ThemeProvider 
            theme={theme}
        >
            <div
        
            >
                <Card
                    
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
                        
                    >
                        {tech.map((tech, index) => (
                            <span
                                key={index}
                                
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