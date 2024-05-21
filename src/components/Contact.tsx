import React from 'react';
import { FaEnvelope, FaGithub, FaXTwitter, FaLinkedin } from 'react-icons/fa6';

const Contact: React.FC = ():JSX.Element => {
    const contacts = [
        {
            name: 'Email',
            icon: <FaEnvelope className="text-4xl" />,
            link: 'mailto:anxinizlol@gmail.com',
            color: 'bg-red-500'
        },
        {
            name: 'GitHub',
            icon: <FaGithub className="text-4xl" />,
            link: 'https://github.com/XiniDev',
            color: 'bg-gray-800'
        },
        {
            name: 'Twitter',
            icon: <FaXTwitter className="text-4xl" />,
            link: 'https://x.com/XiniDev',
            color: 'bg-blue-500'
        },
        {
            name: 'LinkedIn',
            icon: <FaLinkedin className="text-4xl" />,
            link: 'https://www.linkedin.com/in/anxini/',
            color: 'bg-blue-700'
        },
    ];

    return (
        <section id="contact" className="py-20 bg-white text-gray-800">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold mb-12 text-center">Contact Me</h2>
                <div className="grid lg:grid-cols-4 gap-8">
                    {contacts.map((contact, index) => (
                    <a key={index} href={contact.link} className={`flex flex-col items-center p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ${contact.color} text-white`} target="_blank" rel="noopener noreferrer">
                        {contact.icon}
                        <h3 className="text-2xl font-bold mt-4">{contact.name}</h3>
                    </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Contact;
