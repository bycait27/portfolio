import { ThemeProvider, createTheme } from "@mui/material/styles";
import {
    Typography,
    Box,
    Tooltip,
    Button,
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
    const categories = [
        {
            name: 'FRONTEND',
            icons: [
                <FaReact/>,
                <FaCss3Alt/>,
                <FaHtml5/>,
                // <FaVuejs/>,
                // <FaAngular/>,
                <FaBootstrap/>,
                <SiHandlebarsdotjs/>,
                <SiTailwindcss/>,
                <SiJquery/>,
                <SiJavascript/>,
                // <SiTypescript/>
            ],
        },
        {
            name: 'BACKEND',
            icons: [
                <FaNode/>,
                <SiMongodb/>,
                <SiMysql/>,
                <SiSequelize/>,
                <SiGraphql/>,
                <SiApollographql/>
            ],
        },
        {
            name: 'DEVOPS',
            icons: [
                <SiInsomnia/>,
                <SiJest/>,
                <SiHeroku/>,
                <SiWebpack/>,
                <FaGitAlt/>,
                <FaGithub/>,
                <FaNpm/>,
                <TbBrandVscode/>
            ],
        },
    ];

    const categoriesRefs = categories.map(() => useRef(null));

    useEffect(() => {
        const tl = gsap.timeline();

        categoriesRefs.forEach((ref) => {
            tl.from(ref.current, {
                duration: 1,
                opacity: 0,
                y: 100,
                ease: "power4.out",
            });
        });
    }, [categoriesRefs]);

    return (
        <ThemeProvider theme={theme}>
            <Box className='skills-container'>
                <p className='tech'>
                    Technologies I have worked with:
                </p> 
                {categories.map((category, index) => (
                    <Box key={index} ref={categoriesRefs[index]}>
                        <Typography variant="h6">
                            {category.name}
                        </Typography>
                        <Box>
                            <Box>
                                <Box className='row' direction="row" spacing={1}>
                                    {category.icons.map((Icon, iconIndex) => (
                                        // fix tooltip to display name of technology
                                        <Tooltip key={iconIndex} title={Icon.name || ''} placement='top'>
                                            <Button>
                                                {Icon}
                                            </Button>
                                        </Tooltip>
                                    ))}
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                ))}
            </Box>
        </ThemeProvider>
    );
};

export default Skills;