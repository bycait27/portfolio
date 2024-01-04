import { ThemeProvider, createTheme } from "@mui/material/styles";
import {
    Typography,
    Box,
    Stack,
    Tooltip,
    Button
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
        MuiButton: {
            styleOverrides: {
                root: {
                    color: '#222',
                    fontSize: 35
                }
            }
        }
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
                            <Tooltip title='React.js' placement='top'>
                                <Button>
                                    <FaReact/>
                                </Button>
                            </Tooltip>
                            <Tooltip title='CSS' placement='top'>
                                <Button>
                                    <FaCss3Alt/>
                                </Button>
                            </Tooltip>
                            <Tooltip title='HTML5' placement='top'>
                                <Button>
                                    <FaHtml5/>
                                </Button>
                            </Tooltip>
                            <Tooltip title='Vue.js' placement='top'>
                                <Button>
                                    <FaVuejs/>
                                </Button>
                            </Tooltip>
                            <Tooltip title='Angular.js' placement='top'>
                                <Button>
                                    <FaAngular/>
                                </Button>
                            </Tooltip>
                            <Tooltip title='Bootstrap' placement='top'>
                                <Button>
                                    <FaBootstrap/>
                                </Button>
                            </Tooltip>
                            <Tooltip title='Handlebars.js' placement='top'>
                                <Button>
                                    <SiHandlebarsdotjs/>
                                </Button>
                            </Tooltip>
                            <Tooltip title='Tailwind CSS' placement='top'>
                                <Button>
                                    <SiTailwindcss/>
                                </Button>
                            </Tooltip>
                            <Tooltip title='jQuery' placement='top'>
                                <Button>
                                    <SiJquery/>
                                </Button>
                            </Tooltip>
                            <Tooltip title='JavaScript' placement='top'>
                                <Button>
                                    <SiJavascript/>
                                </Button>
                            </Tooltip>
                            <Tooltip title='TypeScript' placement='top'>
                                <Button>
                                    <SiTypescript/>
                                </Button>
                            </Tooltip>
                        </Stack>
                    </Box>   
                </Box>
                <Box ref={backEnd}>
                    <Typography>
                        BACKEND
                    </Typography>
                    <Box>
                        <Stack sx={{ fontSize: 40 }} direction="row" spacing={1}>
                            <Tooltip title='Node.js' placement='top'>
                                <Button>
                                    <FaNode/>
                                </Button>
                            </Tooltip>
                            <Tooltip title='MongoDB' placement='top'>
                                <Button>
                                    <SiMongodb/>
                                </Button>
                            </Tooltip>
                            <Tooltip title='MySQL' placement='top'>
                                <Button>
                                    <SiMysql/>
                                </Button>
                            </Tooltip>
                            <Tooltip title='Sequelize' placement='top'>
                                <Button>
                                    <SiSequelize/>
                                </Button>
                            </Tooltip>
                            <Tooltip title='GraphQL' placement='top'>
                                <Button>
                                    <SiGraphql/>
                                </Button>
                            </Tooltip>
                            <Tooltip title='Apollo' placement='top'>
                                <Button>
                                    <SiApollographql/>
                                </Button>
                            </Tooltip>
                        </Stack>
                    </Box>   
                </Box>
                <Box ref={devOps}>
                    <Typography>
                        DEVOPS
                    </Typography>
                    <Box>
                        <Stack sx={{ fontSize: 34 }} direction="row" spacing={1}>
                            <Tooltip title='Insomnia' placement='top'>
                                <Button>
                                    <SiInsomnia/>
                                </Button>
                            </Tooltip>
                            <Tooltip title='Jest' placement='top'>
                                <Button>
                                    <SiJest/>
                                </Button>
                            </Tooltip>
                            <Tooltip title='Heroku' placement='top'>
                                <Button>
                                    <SiHeroku/>
                                </Button>
                            </Tooltip>
                            <Tooltip title='Webpack' placement='top'>
                                <Button>
                                    <SiWebpack/>
                                </Button>
                            </Tooltip>
                            <Tooltip title='Git' placement='top'>
                                <Button>
                                    <FaGitAlt/>
                                </Button>
                            </Tooltip>
                            <Tooltip title='GitHub' placement='top'>
                                <Button>
                                    <FaGithub/>
                                </Button>
                            </Tooltip>
                            <Tooltip title='npm' placement='top'>
                                <Button>
                                    <FaNpm/>
                                </Button>
                            </Tooltip>
                            <Tooltip title='VSCode' placement='top'>
                                <Button>
                                    <TbBrandVscode/>
                                </Button>
                            </Tooltip>
                        </Stack>
                    </Box>   
                </Box>
            </Box>
        </ThemeProvider>
    );
};

export default Skills;