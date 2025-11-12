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
    //     projectTitle: 'System Monitoring & Observability CLI (In Progress)',
    //     projectDescription: 'Infrastructure monitoring tool built in Go, integrating with Docker Engine API for real-time container and system metrics collection',
    //     viewCode: '', // empty for now
    //     viewApp: '',
    //     tech: ['Go', 'Docker API', 'System Monitoring', 'Observability', 'CLI Development']
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
