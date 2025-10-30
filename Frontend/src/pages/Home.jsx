import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import About from './About';
import Skills from './Skills';
import Education from './Education';
import Project from './Project';
import Contact from './Contact';

const bgImage = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80'; // Example ocean image

const roles = [
  'Mern stack developer',
  'Full stack developer'
];

const TYPING_SPEED = 80;
const PAUSE_TIME = 1200;

const Home = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let timeout;
    if (typing) {
      if (displayed.length < roles[roleIndex].length) {
        timeout = setTimeout(() => {
          setDisplayed(roles[roleIndex].slice(0, displayed.length + 1));
        }, TYPING_SPEED);
      } else {
        timeout = setTimeout(() => setTyping(false), PAUSE_TIME);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => {
          setDisplayed(roles[roleIndex].slice(0, displayed.length - 1));
        }, 40);
      } else {
        setTyping(true);
        setRoleIndex((roleIndex + 1) % roles.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  const services = [
    {
      icon: "🎨",
      title: "UI/UX Design",
      description: "Creating intuitive and beautiful user experiences that delight users and drive engagement."
    },
    {
      icon: "🏷️",
      title: "Brand Identity",
      description: "Building memorable brand identities that resonate with your target audience and stand out in the market."
    },
    {
      icon: "💻",
      title: "Web Design",
      description: "Designing modern, responsive websites that look great on all devices and drive conversions."
    },
    {
      icon: "📱",
      title: "Mobile Apps",
      description: "Developing native and cross-platform mobile applications that provide seamless user experiences."
    },
    {
      icon: "📊",
      title: "Analytics",
      description: "Implementing data-driven solutions to track performance and optimize user experiences."
    },
    {
      icon: "📸",
      title: "Photography",
      description: "Capturing stunning visuals that tell your story and enhance your brand presence."
    }
  ];

  

  const blogs = [
    {
      title: "By spite about do of do allow blush",
      excerpt: "Quick six blind smart out burst. Perfectly on furniture dejection determine my depending an to. Add short water court fat.",
      author: "Larry Stark",
      date: "7 September 2016"
    },
    {
      title: "Two Before Arrow Not Relied",
      excerpt: "Quick six blind smart out burst. Perfectly on furniture dejection determine my depending an to. Add short water court fat.",
      author: "Larry Stark",
      date: "7 September 2016"
    },
    {
      title: "By spite about do of do allow blush",
      excerpt: "Quick six blind smart out burst. Perfectly on furniture dejection determine my depending an to. Add short water court fat.",
      author: "Larry Stark",
      date: "7 September 2016"
    }
  ];

  return (
    <div className="relative min-h-screen w-full">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative flex items-center justify-center min-h-screen w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/20 z-10" />
        {/* Centered Content */}
        <div className="relative z-20 flex flex-col items-center justify-center w-full h-full pt-32">
          <h1 className="text-white text-7xl md:text-9xl font-extrabold tracking-wide text-center mb-6 drop-shadow-lg">
            KRISHNA PUSHPAN
          </h1>
          <h2 className="text-white text-2xl md:text-3xl font-light text-center mb-2 drop-shadow-lg min-h-[2.5rem]">
            {displayed}
            <span className="animate-pulse">|</span>
          </h2>
        </div>
      </section>

      {/* About Section */}
      <div id="about">
        <About />
      </div>

      {/* What I do Section (Extra Wide Cards) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-2">
          <h2 className="text-5xl font-bold text-center text-gray-800 mb-6">What I do</h2>
          <p className="text-center text-xl text-gray-400 mb-16 max-w-3xl mx-auto">
            I'm not just a developer; I'm a digital dreamweaver. Crafting immersive online experiences is not just a job but my calling.<br />
            Discover below how I can help you.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Frontend Web Development */}
            <div className="bg-white rounded-2xl shadow-lg px-12 py-14 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl w-full cursor-pointer group border border-gray-100 hover:border-blue-200">
              <div className="bg-gray-900 rounded-full w-20 h-20 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-all duration-300 group-hover:scale-110">
                {/* Monitor/Code SVG */}
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform duration-300">
                  <rect x="2" y="3" width="20" height="14" rx="2"/>
                  <path d="M8 21h8M12 17v4"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">Frontend Web Development:</h3>
              <p className="text-gray-400 text-lg group-hover:text-gray-600 transition-colors duration-300">
                Creating beautiful and functional web experiences is my forte. Using the latest technologies and best practices, I design and build websites that captivate and engage users.
              </p>
            </div>
            {/* Backend Development */}
            <div className="bg-white rounded-2xl shadow-lg px-12 py-14 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl w-full cursor-pointer group border border-gray-100 hover:border-blue-200">
              <div className="bg-gray-900 rounded-full w-20 h-20 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-all duration-300 group-hover:scale-110">
                {/* Server/Database SVG */}
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform duration-300">
                  <rect x="3" y="4" width="18" height="4" rx="2"/>
                  <rect x="3" y="10" width="18" height="4" rx="2"/>
                  <rect x="3" y="16" width="18" height="4" rx="2"/>
                  <path d="M7 8v.01M7 14v.01M7 20v.01"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">Backend Development</h3>
              <p className="text-gray-400 text-lg group-hover:text-gray-600 transition-colors duration-300">
                I design and build robust, scalable backend systems and RESTful APIs using Node.js, Express, and MongoDB. My focus is on performance, security, and seamless integration with frontend and mobile apps.
              </p>
            </div>
            {/* Technology Stack */}
            <div className="bg-white rounded-2xl shadow-lg px-12 py-14 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl w-full cursor-pointer group border border-gray-100 hover:border-blue-200">
              <div className="bg-gray-900 rounded-full w-20 h-20 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-all duration-300 group-hover:scale-110">
                {/* Tools/Wrench SVG */}
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform duration-300">
                  <path d="M14.7 6.3a5 5 0 0 0-6.6 6.6l7 7a2 2 0 0 0 2.8-2.8l-7-7"/>
                  <path d="M16 2v6h6"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">Technology Stack</h3>
              <p className="text-gray-400 text-lg group-hover:text-gray-600 transition-colors duration-300">
                I'm well-versed in the industry's most popular frontend technologies, including HTML5, CSS3, JavaScript, and frameworks like React and React Native.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <div id="skills">
        <Skills />
      </div>

      {/* Education Section */}
      <Education />

      {/* Projects Section */}
      <div id="projects">
        <Project />
      </div>

      {/* Contact Section */}
      <Contact />

 
    </div>
  );
};

export default Home;

