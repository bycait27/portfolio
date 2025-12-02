import Project from '../Project'
import SectionHeader from '../ui/SectionHeader';

const projectData = [
    {
        projectTitle: 'Concurrent File Retrieval System',
        projectDescription: 'Multi-threaded client-server system for concurrent document indexing and search. Achieved ~54 MB/s throughput through systematic optimization.',
        viewCode: 'https://github.com/bycait27/file-retrieval-engine',
        viewApp: '',
        tech: ['Java', 'Multi-threading', 'Socket Programming', 'Concurrent Programming', 'Client-Server Model']
    },
    {
        projectTitle: 'The Tech Blog - Full-Stack Application',
        projectDescription: 'Full-stack blogging platform with user authentication, post creation, and commenting. Deployed with Docker and automated CI/CD pipeline.',
        viewCode: 'https://github.com/bycait27/tech-blog',
        viewApp: 'https://the-tech-blog7-f8ee982770ad.herokuapp.com/',
        tech: ['JavaScript', 'Node.js', 'Express.js', 'MySQL', 'Docker', 'GitHub Actions']
    },
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
