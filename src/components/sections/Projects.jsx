import Project from '../Project'

import styles from '../../styles/projects.module.css';

const projectData = [
    {
        projectTitle: 'The Tech Blog',
        projectDescription: 'A CMS-Style tech blog site for developers following the MVC paradigm.',
        viewCode: 'https://github.com/bycait27/tech-blog',
        viewApp: 'https://the-tech-blog7-f8ee982770ad.herokuapp.com/',
        tech: ['javascript', 'handlebars.js', 'sequelize', 'mysql', 'express']
    },
    {
        projectTitle: 'Book Search Engine',
        projectDescription: 'A Google Books GraphQL API built using the MERN stack.',
        viewCode: 'https://github.com/bycait27/book-search-engine',
        viewApp: 'https://book-search-engine-caitlins-projects-dc84348c.vercel.app/',
        tech: ['javascript', 'react', 'mongodb', 'graphql', 'apollo', 'express']
    },
    {
        projectTitle: 'Text Editor',
        projectDescription: 'A simple text editor that meets the PWA criteria.',
        viewCode: 'https://github.com/bycait27/pwa-text-editor',
        viewApp: 'https://bloodcurdling-beast-50523-57a8116f0051.herokuapp.com/',
        tech: ['javascript', 'html', 'css', 'webpack']
    },
    {
        projectTitle: 'Weather Dashboard',
        projectDescription: 'A web app that allows users to view the current and 5-day weather forecast.',
        viewCode: 'https://github.com/bycait27/weather-dashboard',
        viewApp: 'https://weather-dashboard7.netlify.app/',
        tech: ['javascript', 'html', 'css']
    },
    {
        projectTitle: 'Work Day Scheduler',
        projectDescription: 'A simple work day scheduler app powered by jQuery to track events.',
        viewCode: 'https://github.com/bycait27/work-day-scheduler',
        viewApp: 'https://bycait27.github.io/work-day-scheduler/',
        tech: ['javascript', 'html', 'css', 'jquery', 'dayjs']
    },
];

export default function Projects() {
    return (
        <div
            className={styles.projects}
        >
            <h1
                className={styles.header}
            >
                Projects
            </h1>
            <div
                className={styles.divider}
            >
            </div>
            <div>
                {projectData.map(( project, index) => (
                    <Project 
                    key={index} 
                    {...project} 
                    />
                ))}
            </div>
        </div>
    );
};
