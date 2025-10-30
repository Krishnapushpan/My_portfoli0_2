import React, { useState } from 'react';
 import video from '../assets/video.mp4'
const projects = [
  {
    title: "Taskify - Task Management System",
    description: "A comprehensive web-based platform for managing projects, assigning work, and tracking progress within a team. The system supports multiple user roles (Admin, Team Lead, Team Member, Student, Client) and provides role-based dashboards for efficient collaboration and accountability.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Axios"],
    category: "Web App",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop",
    features: ["Role-based authentication", "Project management", "Team assignment", "Work tracking", "Status updates", "Role-based dashboards"],
    github: "https://github.com/Krishnapushpan/Taskify",
    live: "https://taskify-one-mocha.vercel.app"
  },
  {
    title: "NFTTicket - NFT-Based Ticket Booking",
    description: "A ticket booking web application that allows only verified NFT holders to view and book tickets for exclusive exhibitions. The platform leverages Ethereum blockchain technology to ensure that only authenticated NFT holders can access and participate in events.",
    technologies: ["React.js", "Ethereum", "Solidity", "MetaMask", "Hardhat", "Tailwind CSS", "Framer Motion"],
    category: "Blockchain",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=300&fit=crop",
    features: ["NFT access control", "MetaMask integration", "Event listings", "Ticket booking", "Booked tickets view"],
    github: "https://github.com/Krishnapushpan/NFTTICKET"
  },
  {
    title: "Student Management System",
    description: "This is a mobile application built using React Native, Nest.JS, and MongoDB. It provides role-based access, allowing administrators to manage students and attendance, while regular users can view student details and records.",
    technologies: ["React Native", "Nest.JS", "MongoDB"],
    category: "Mobile App",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop",
    features: ["Role-based access", "Student management", "Attendance tracking", "Viewing student details and records"]
  },
  {
    title: "Car Rental Web Application",
    description: "This is a web application developed using React, Express.js, and MongoDB. Its purpose is to enable seamless management of car bookings, user interactions, and inventory.",
    technologies: ["React", "Express.js", "MongoDB"],
    category: "Web App",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop",
    features: ["Management of car bookings", "User interactions", "Inventory management"]
  },
  {
    title: "Decentralized Voting System",
    description: "This is a decentralized voting application built with Ethereum and React. It is described as a blockchain-based platform designed to ensure secure, transparent, and tamper-proof voting, with features like anonymity, verifiability, and a dynamic user interface.",
    technologies: ["Ethereum", "React"],
    category: "Blockchain",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
    features: ["Secure voting", "Transparent voting", "Tamper-proof voting", "Anonymity", "Verifiability", "Dynamic user interface"]
  }
];

const Project = () => {
  const [expandedCards, setExpandedCards] = useState({});

  const toggleCard = (index) => {
    setExpandedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover -z-10"
        src={video}
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/50 -z-10" />
      
      <div className="max-7xl  px-4 relative m-16 z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">My Projects</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills in full-stack development, mobile apps, and blockchain technology.
          </p>
        </div>
        
        <div className="grid grid-cols-1 grid-cols-3 gap-20">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-[450px] flex flex-col"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                  {project.category}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3 flex-shrink-0">{project.description}</p>
                
                {/* Expanded Content */}
                {expandedCards[index] && (
                  <div className="space-y-4 animate-fadeIn flex-1">
                    {/* Technologies */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Features */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Features:</h4>
                      <ul className="text-xs text-gray-600 space-y-1">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center">
                            <span className="w-1 h-1 bg-blue-500 rounded-full mr-2"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Links */}
                    <div className="flex gap-3 mt-auto">
                    </div>
                  </div>
                )}

                {/* View More/Less Button */}
                <button 
                  onClick={() => toggleCard(index)}
                  className="mt-4 text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-300 flex-shrink-0"
                >
                  {expandedCards[index] ? 'View Less' : 'View More'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Project;
