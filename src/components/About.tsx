import React from 'react';

const About: React.FC = (): JSX.Element => {
    return (
        <section id="about" className="py-20 bg-white text-gray-800">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold mb-6 text-center">About Me</h2>
                <p className="text-lg leading-relaxed text-center">
                    Hi, I'm Xini. I am passionate about designing beautiful and functional user experiences. With a background in both design and development, I bridge the gap between idea and implementation.
                </p>
            </div>
        </section>
    );
};

export default About;