import React from 'react';

const Hero: React.FC = (): JSX.Element => {
    return (
        <section className="h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-hero-pattern bg-cover bg-center opacity-30"></div>
            <div className="relative z-10 text-center">
                <h1 className="text-6xl font-bold mb-4">XINI</h1>
                <p className="text-2xl">Designer • Developer • Creator</p>
                <a href="#contact" className="mt-8 inline-block bg-white text-gray-800 py-2 px-4 rounded-full font-semibold hover:bg-gray-200 transition duration-300">Get in Touch</a>
            </div>
        </section>
    );
};

export default Hero;