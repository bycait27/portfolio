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
                    color: '#222',
                    "&:hover": { color: 'grey' },
                    padding: 1,
                }
            }
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    maxWidth: 300,
                    backgroundColor: '#b9b3af',
                    borderRadius: 5,
                    padding: 15
                }
            }
        },
        MuiCardMedia: {
            styleOverrides: {
                root: {
                    height: 200,
                    borderRadius: 2,
                    padding: 2
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
                    <CardMedia image={imageUrl}>
                    </CardMedia>
                    <CardContent>
                        <Typography sx={{ 
                            fontSize: 'large', 
                            fontWeight: 800 
                            }}>
                            {projectTitle}
                        </Typography>
                        <Typography>
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