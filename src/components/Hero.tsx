import React from 'react';

const Hero: React.FC = (): JSX.Element => {
    return (
        <section className="h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white">
            <div className="text-center">
                <h1 className="text-6xl font-bold mb-4">XINI</h1>
                <p className="text-2xl">Designer • Developer • Creator</p>
            </div>
        </section>
    );
};

export default Hero;