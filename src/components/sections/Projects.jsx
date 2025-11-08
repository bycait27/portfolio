import Project from '../Project'
import SectionHeader from '../ui/SectionHeader';

const projectData = [
    {
        projectTitle: 'Distributed File Retrieval System',
        projectDescription: 'High-performance distributed system achieving ~54 MB/s throughput with concurrent architecture and performance optimization',
        viewCode: 'https://github.com/bycait27/dist-file-retrieval-engine',
        viewApp: '',
        tech: ['Java', 'Distributed Systems', 'Performance Optimization', 'System Administration', 'Networking']
    },
    {
        projectTitle: 'The Tech Blog',
        projectDescription: 'Automated CI/CD pipeline with GitHub Actions, Docker containerization, multi-container orchestration, and 86% test coverage',
        viewCode: 'https://github.com/bycait27/tech-blog',
        viewApp: 'https://the-tech-blog7-f8ee982770ad.herokuapp.com/',
        tech: ['JavaScript', 'Docker', 'GitHub Actions (CI/CD)', 'Automation', 'DevOps', 'Continuous Deployment']
    },
    // {
    //     projectTitle: 'Text Editor',
    //     projectDescription: 'A simple text editor that meets the PWA criteria.',
    //     viewCode: 'https://github.com/bycait27/pwa-text-editor',
    //     viewApp: 'https://bloodcurdling-beast-50523-57a8116f0051.herokuapp.com/',
    //     tech: ['JavaScript', 'HTML', 'CSS', 'Webpack']
    // },
    // {
    //     projectTitle: 'Weather Dashboard',
    //     projectDescription: 'A web app that allows users to view the current and 5-day weather forecast.',
    //     viewCode: 'https://github.com/bycait27/weather-dashboard',
    //     viewApp: 'https://weather-dashboard7.netlify.app/',
    //     tech: ['JavaScript', 'HTML', 'CSS']
    // },
    // {
    //     projectTitle: 'Work Day Scheduler',
    //     projectDescription: 'A simple work day scheduler app powered by jQuery to track events.',
    //     viewCode: 'https://github.com/bycait27/work-day-scheduler',
    //     viewApp: 'https://bycait27.github.io/work-day-scheduler/',
    //     tech: ['JavaScript', 'HTML', 'CSS', 'jQuery', 'Day.js']
    // },
];

export default function Projects() {
    return (
        <div className="min-h-screen p-8">
            <div className="max-w-6xl mx-auto">
                {/* section header */}
                <SectionHeader 
                    title="Projects"
                    subtitle=""
                    emoji="📓"
                />
                {/* projects grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {projectData.map((project, index) => (
                        <Project 
                            key={index} 
                            {...project} 
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
