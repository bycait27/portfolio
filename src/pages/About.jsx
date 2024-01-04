import { ThemeProvider, createTheme } from "@mui/material/styles";
import {
    Typography,
    Box
} from "@mui/material";

import image from "../assets/IMG-9567.jpeg";

import { gsap } from "gsap";
import { useEffect, useRef } from "react";

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
    const paragraphOne = useRef(null);
    const paragraphTwo = useRef(null);
    const img = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline();

        tl.from(img.current, {
            duration: 1,
            opacity: 0,
            y: 100,
            ease: "power4.out",
        
        })

        .from(paragraphOne.current, {
            duration: 1,
            opacity: 0,
            y: 100,
            ease: "power4.out",
        })
            .from(paragraphTwo.current, {
                duration: 1,
                opacity: 0,
                y: 100,
                ease: "power4.out",
        })
    })
    return (
        <ThemeProvider theme={theme}>
            {/* <Box>
                <Typography>
                    About
                </Typography>
            </Box> */}
            <Box className='about-container'>
                <Box className='about-image-container'>
                    <img className='about-image' ref={img} src={image} />
                </Box>
                <Box className='about-text-container'>
                    <Typography ref={paragraphOne} className='about-text'>
                        I am a passionate full-stack web developer who recently embarked on an exciting journey through a rigorous coding boot camp.
                        My interest in technology and programming has now been armed with my newfound knowledge and programming skills, transforming ideas into engaging web experiences.
                        My journey into the field of web development is unique, with my academic background in Psychology. This background has equipped me with the knowledge of human behavior.
                    </Typography>
                    <br></br>
                    <Typography ref={paragraphTwo} className='about-text'>
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