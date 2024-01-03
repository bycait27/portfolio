import { ThemeProvider, createTheme } from "@mui/material/styles";
import {
    Typography,
    Box
} from "@mui/material";

import image from "../assets/IMG-9567.jpeg";

const theme = createTheme({
    palette: {
        primary: {
            main: "#f5f5f5",
        },
    },
    components: {
        MuiTypography: {
            styleOverrides: {
                root: {
                    marginLeft: 10,
                    marginTop: 2,
                    marginRight: 10,
                    padding: 2,
                    lineHeight: 2,
                },
            },
        },
    }
});

function About() {
    return (
        <ThemeProvider theme={theme}>
            {/* <Box>
                <Typography>
                    About
                </Typography>
            </Box> */}
            <Box className='about-container'>
                <Box className='about-image-container'>
                    <img className='about-image' src={image} />
                </Box>
                <Box className='about-text-container'>
                    <Typography className='about-text'>
                        I am a passionate full-stack web developer who recently embarked on an exciting journey through a rigorous coding boot camp.
                        My interest in technology and programming has now been armed with my newfound knowledge and programming skills, transforming ideas into engaging web experiences.
                        My journey into the field of web development is unique, with my academic background in Psychology. This background has equipped me with the knowledge of human behavior.
                    </Typography>
                    <Typography className='about-text'>
                        My knowledge and fascination of Pyschology has allowed me to understand user behavior and preferences, which has guided me through my approach to web development and design.
                        I believe it is important to craft intuitive user interfaces while building robust backend systems. My goal is to create web applications that meet these technical standards and resonate with users on a psychological level.
                        Beyond this, I am a life-long learner committed to staying on top of industry trends and navigate through the ever changing world of web development one line of code at a time.
                    </Typography>
                </Box>
            </Box>
        </ThemeProvider>
    );
};

export default About;