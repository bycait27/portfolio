import styles from '../../styles/skills.module.css';

export default function Skills() {
    const technologies = [
        {
            tech: [
                'javascript',
                'java',
                'C',
                'handlebars.js',
                'react',
                'next.js',
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
            ],
        },
        {
            tech: [
                'firebase'
            ]
        }
    ]

    return (
        <div className={styles.container}>
            <div>
                <h1 className={styles.header}>Skills</h1>
            </div>
            <div className={styles.divider}></div>
                    <div>
                        <div>
                            <div className={styles.skills}>
                            {technologies.flatMap((category) =>
                            category.tech.map((tech, techIndex) => (
                                <div key={techIndex} className={styles.skill}>
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