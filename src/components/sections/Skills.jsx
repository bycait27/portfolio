export default function Skills() {
    const technologies = [
        {
            tech: [
                'javascript',
                'java',
                'python',
                'c',
                'handlebars.js',
                'react.js',
                'next.js',
                'springboot',
                'jquery',
                'html5',
                'css3',
                'tailwindcss',
                'materialui',
                'bootstrap',
            ],
        },
        {
            tech: [
                'node.js',
                'mongodb',
                'express',
                'mysql',
                'sequelize',
                'graphql',
                'apollo',
            ],
        },
        {
            tech: [
                'git',
                'github',
                'gitlab',
                'insomnia',
                'npm',
                'vscode',
                'jest',
                'webpack',
                'heroku',
                'netlify',
                'vercel',
            ],
        },
        // {
        //     tech: [
        //         'firebase'
        //     ]
        // }
    ]

    return (
        <div>
            <div>
                <h1>Skills</h1>
            </div>
            <div></div>
                    <div>
                        <div>
                            <div>
                            {technologies.flatMap((category) =>
                            category.tech.map((tech, techIndex) => (
                                <div key={techIndex}>
                                    {tech}
                                </div>
                            ))
                        )}
                            </div>
                        </div>
                    </div>
        </div>
    );
};