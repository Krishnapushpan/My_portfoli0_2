import React from 'react';
import girlImg from '../assets/girl2.jpg';

const About = () => (
  <section className="max-w-7xl mx-auto px-2 py-20 flex flex-col md:flex-row items-center gap-6">
    {/* Text Content */}
    <div className="flex-1">
      <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
      <p className="text-xl text-gray-700 mb-4">Hi, I'm Krishna Pushpan. I'm a passionate MERN stack developer with a strong foundation in web development and blockchain. I love building dynamic web apps and learning new technologies. My goal is to create user-friendly solutions that make a difference.</p>
      <p className="text-gray-500 mb-6">Currently, I'm working as a MERN Stack Developer at the Incubation Center, Malabar College of Engineering and Technology, Thrissur. I enjoy working with React, Node.js, Mongodb and exploring new tech trends.</p>
      <a href="/src/assets/KRISHNA_PUSHPAN.pdf" download className="bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-800 transition inline-block">Download CV</a>
    </div>
    {/* Image */}
    <div className="flex-1 flex justify-center">
      <img src={girlImg} alt="Krishna Pushpan" className="rounded-2xl w-full max-w-sm md:max-w-md lg:max-w-xl object-cover shadow-lg" />
    </div>
  </section>
);

export default About;
