import * as React from 'react';
import { 
    Card, 
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
    Box
 } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import { ThemeProvider, createTheme } from "@mui/material/styles";

import notesImage from '../assets/notes.jpeg';

const theme = createTheme({
    palette: {
      primary: {
        main: "#f5f5f5"
      }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    color: 'white',
                    backgroundColor: '#222',
                    "&:hover": { color: '#222', backgroundColor: 'white' },
                    padding: 4,
                    border: '#222 solid 1px'
                }
            }
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    maxWidth: 300,
                    backgroundImage: `url(${notesImage})`,
                    // backgroundColor: '#b9b3af',
                    borderRadius: 5,
                    padding: 15,
                    border: '#222 solid 1px'
                }
            }
        },
        MuiCardMedia: {
            styleOverrides: {
                root: {
                    height: 200,
                    borderRadius: 2,
                    padding: 2,
                    border: '#222 solid 1px'
                }
            }
        }
    }
  });

function Project({ imageUrl, projectTitle, projectDescription, viewCode, viewApp }) {
    return (
        <ThemeProvider theme={theme}>
            <Box className='project-card'>
                <Card>
                    {/* <CardMedia image={imageUrl}>
                    </CardMedia> */}
                    <CardContent>
                        <Typography sx={{ 
                            fontSize: 'large', 
                            fontWeight: 800,
                            textAlign: 'center' 
                            }}>
                            {projectTitle}
                        </Typography>
                        <Typography sx={{
                            textAlign: 'center'
                        }}>
                            {projectDescription}
                        </Typography>
                    </CardContent>
                    <CardActions sx={{ 
                        display: 'flex', 
                        justifyContent: 'center' 
                        }}>
                        <a href={viewCode} target="_blank">
                            <Button endIcon={<GitHubIcon />} 
                                size="small">
                                View Code
                            </Button>
                        </a>
                        <a href={viewApp} target="_blank">
                            <Button endIcon={<LaunchIcon />} 
                                size='small'>
                                View app
                            </Button>
                        </a>
                    </CardActions>
                </Card>
            </Box>
        </ThemeProvider>
    );
}

export default Project;