import { ThemeProvider, createTheme } from "@mui/material/styles";
import {
    Typography,
    Box,
    Stack,
} from "@mui/material";
import {
    FaReact ,
    FaCss3Alt,
    FaHtml5,
    FaVuejs,
    FaAngular,
    FaBootstrap,
    FaNode,
    FaGitAlt,
    FaGithub,
    FaNpm,
} from "react-icons/fa";

import {
    SiHandlebarsdotjs,
    SiTailwindcss,
    SiMongodb,
    SiJquery,
    SiJavascript,
    SiTypescript,
    SiInsomnia,
    SiJest,
    SiHeroku,
    SiWebpack,
    SiGraphql,
    SiApollographql,
    SiSequelize,
    SiMysql,
} from "react-icons/si";

import { TbBrandVscode } from "react-icons/tb";

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
                    padding: 5,
                    lineHeight: 2,
                    textAlign: 'center',
                    backgroundColor: '#b9b3af',
                    borderRadius: 10
                },
            },
        },
        MuiStack: {
            styleOverrides: {
                root: {
                    marginLeft: 10,
                    marginTop: 5,
                    marginRight: 10,
                    padding: 15,
                    lineHeight: 2,
                },
            },
        },
    }
});

function Skills() {
    const frontEnd = useRef(null);
    const backEnd = useRef(null);
    const devOps = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline();

        tl.from(frontEnd.current, {
            duration: 1,
            opacity: 0,
            y: 100,
            ease: "power4.out",
        
        })

        .from(backEnd.current, {
            duration: 1,
            opacity: 0,
            y: 100,
            ease: "power4.out",
        })
            .from(devOps.current, {
                duration: 1,
                opacity: 0,
                y: 100,
                ease: "power4.out",
        })
    });

    return (
        <ThemeProvider theme={theme}>
            <Box className='skills-container'>
                <p className='tech'>
                    Technologies I have worked with:
                </p>
                <Box ref={frontEnd}>
                    <Typography>
                        FRONTEND
                    </Typography>
                    <Box>
                        <Stack sx={{ fontSize: 35 }} direction="row" spacing={1}>
                            <FaReact />
                            <FaCss3Alt />
                            <FaHtml5 />
                            <FaVuejs />
                            <FaAngular />
                            <FaBootstrap />
                            <SiHandlebarsdotjs />
                            <SiTailwindcss />
                            <SiJquery />
                            <SiJavascript />
                            <SiTypescript />
                        </Stack>
                    </Box>   
                </Box>
                <Box ref={backEnd}>
                    <Typography>
                        BACKEND
                    </Typography>
                    <Box>
                        <Stack sx={{ fontSize: 40 }} direction="row" spacing={1}>
                            <FaNode />
                            <SiMongodb />
                            <SiMysql />
                            <SiSequelize />
                            <SiGraphql />
                            <SiApollographql />
                        </Stack>
                    </Box>   
                </Box>
                <Box ref={devOps}>
                    <Typography>
                        DEVOPS
                    </Typography>
                    <Box>
                        <Stack sx={{ fontSize: 34 }} direction="row" spacing={1}>
                            <SiInsomnia />
                            <SiJest />
                            <SiHeroku />
                            <SiWebpack />
                            <FaGitAlt />
                            <FaGithub />
                            <FaNpm />
                            <TbBrandVscode />
                        </Stack>
                    </Box>   
                </Box>
            </Box>
        </ThemeProvider>
    );
};

export default Skills;