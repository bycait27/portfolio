import { 
    Box,
    Typography
 } from '@mui/material';

import projectImageOne from "../assets/Screenshot 2023-11-18 at 3.25.23 PM.png";
import projectImageTwo from "../assets/Screenshot 2024-01-03 at 10.49.47 PM.png";
import projectImageThree from "../assets/Screenshot 2023-11-29 at 6.30.27 PM.png";
import projectImageFour from "../assets/Screenshot 2023-11-18 at 3.47.16 PM.png";

import Project from '../components/Project';

import { gsap } from "gsap";
import { useEffect, useRef } from "react";

const projectData = [
    {
        imageUrl: projectImageOne,
        projectTitle: 'Book Search Engine',
        projectDescription: 'A Google Books GraphQL API built using the MERN stack.',
        viewCode: 'https://github.com/bycait27/book-search-engine',
        viewApp: 'https://guarded-citadel-13114-d18206c34db8.herokuapp.com/',
    },
    {
        imageUrl: projectImageTwo,
        projectTitle: 'Text Editor',
        projectDescription: 'A simple text editor that meets the PWA criteria.',
        viewCode: 'https://github.com/bycait27/pwa-text-editor',
        viewApp: 'https://bloodcurdling-beast-50523-57a8116f0051.herokuapp.com/',
    },
    {
        imageUrl: projectImageThree,
        projectTitle: 'Weather Dashboard',
        projectDescription: 'A web app that allows users to view the current and 5-day weather forecast.',
        viewCode: 'https://github.com/bycait27/weather-dashboard',
        viewApp: 'https://willowy-medovik-414add.netlify.app/',
    },
    {
        imageUrl: projectImageFour,
        projectTitle: 'Work Day Scheduler',
        projectDescription: 'A simple work day scheduler app powered by jQuery to track events.',
        viewCode: 'https://github.com/bycait27/work-day-scheduler',
        viewApp: 'https://bycait27.github.io/work-day-scheduler/',
    },
];

// const projectIdeas = [
//     {
//         projectTitle: '',
//         projectDescription: '',
//     },
//     {
//         projectTitle: '',
//         projectDescription: '',
//     },
//     {
//         projectTitle: '',
//         projectDescription: '',
//     },
//     {
//         projectTitle: '',
//         projectDescription: '',
//     },
// ];

function Projects() {
    const projects = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline();

        tl.from(projects.current, {
            duration: 1,
            opacity: 0,
            y: 100,
            ease: "power4.out",
        })
    })
    return (
        <Box>
            <Box ref={projects} className='projects'>
                {projectData.map(( project, index) => (
                    <Project key={index} {...project} />
                ))};
            </Box>
        </Box>
    );
};

export default Projects;