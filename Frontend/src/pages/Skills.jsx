import React, { useEffect, useState } from 'react';

const skillData = [
  // MERN Stack (highlighted)
  { name: 'MongoDB', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', group: 'mern' },
  { name: 'Express', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', group: 'mern' },
  { name: 'React', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', group: 'mern' },
  { name: 'Node.js', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', group: 'mern' },
  // Other icons
  { name: 'JavaScript', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'TypeScript', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'HTML', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'C++', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
  { name: 'React Native', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Figma', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
  { name: 'Nest.js', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg' },
  { name: 'Go', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg' },
  { name: 'Tailwind CSS', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' },
  { name: 'MySQL', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  // Text fallback
  { name: 'Solidity', text: true },
  { name: 'Ethereum', text: true },
  { name: 'Smart Contract', text: true },
  { name: 'Hyperledger Fabric', text: true },
  { name: 'Hardhat', text: true },
  { name: 'Cursor AI', text: true },
  { name: 'GitHub Copilot', text: true },
];

const illustration = 'https://cdn.pixabay.com/photo/2017/01/31/13/14/avatar-2026510_1280.png';

const Skills = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const section = document.getElementById('skills-section');
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) setVisible(true);
      }
    };
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section id="skills-section" className="w-full relative overflow-hidden py-20">
      {/* Video Background from public folder */}
      <video
        className="absolute inset-0 w-full h-full object-cover -z-10"
        src="/skillvideo.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/40 -z-10" />
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-5xl font-bold text-center text-white mb-6 drop-shadow-lg">Skills</h2>
        <p className="text-center text-xl text-white/80 mb-16 max-w-3xl mx-auto drop-shadow">
          Here are some of the technologies and tools I work with:
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skillData.map((skill, i) => (
            <div
              key={skill.name}
              className={`flex flex-col items-center justify-center p-3 rounded-xl shadow bg-white border transition-all duration-300
                ${skill.group === 'mern' ? 'border-blue-500 bg-blue-50' : 'border-gray-100'}
                ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                hover:shadow-lg hover:border-blue-400
              `}
              style={{ transitionDelay: visible ? `${i * 60}ms` : '0ms' }}
            >
              {skill.img ? (
                <img src={skill.img} alt={skill.name} className="w-10 h-10 mb-1 bg-white rounded p-1 shadow-sm" />
              ) : (
                <span className="w-10 h-10 mb-1 flex items-center justify-center bg-blue-100 text-blue-700 rounded text-base font-bold shadow-sm">
                  {skill.name[0]}
                </span>
              )}
              <span className={`text-xs font-semibold mt-1 text-center ${skill.group === 'mern' ? 'text-blue-600' : 'text-gray-700'}`}>{skill.name}</span>
            </div>
          ))}
        </div>
        <style>{`
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(40px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in {
            animation: fade-in 1s cubic-bezier(.4,0,.2,1) both;
          }
        `}</style>
      </div>
    </section>
  );
};

export default Skills;
