import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export default function Project({ projectTitle, projectDescription, viewCode, viewApp, tech }) {
    return (
        <div className="bg-background-secondary rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            {/* project header and description */}
            <div className="mb-4">
                <h3 className="text-xl font-bold text-text-primary mb-2">
                    {projectTitle}
                </h3>
                <p className="text-text-primary/80 leading-relaxed">
                    {projectDescription}
                </p>
            </div>

            {/* tech stack */}
            <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                    {tech.map((techItem, index) => (
                        <span
                            key={index}
                            className="bg-background-primary text-text-primary px-3 py-1 rounded-full text-sm font-medium"
                        >
                            {techItem}
                        </span>
                    ))}
                </div>
            </div>

            {/* card actions */}
            <div className="flex gap-4">
                <a
                    href={viewCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-text-secondary text-white px-4 py-2 rounded-md hover:bg-text-highlight transition-colors duration-200 font-medium"
                >
                    <FaGithub size={16} />
                    View Code
                </a>
                {viewApp && (
                    <a
                        href={viewApp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 border border-text-secondary text-text-secondary px-4 py-2 rounded-md hover:bg-text-secondary hover:text-white transition-colors duration-200 font-medium"
                    >
                        <FaExternalLinkAlt size={14} />
                        Live Demo
                    </a>
                )}
            </div>
        </div>
    );
};