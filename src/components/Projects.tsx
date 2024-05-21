import React from 'react';

const projects = [
    {
        title: 'Project One',
        description: 'This is a description of project one. It involves design and development work.',
    },
    {
        title: 'Project Two',
        description: 'This is a description of project two. It showcases creativity and problem-solving.',
    },
];

const Projects: React.FC = ():JSX.Element => {
    return (
        <section id="projects" className="py-20 bg-gray-100 text-gray-800">
        <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-6 text-center">Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p>{project.description}</p>
                </div>
            ))}
            </div>
        </div>
        </section>
    );
};

export default Projects;