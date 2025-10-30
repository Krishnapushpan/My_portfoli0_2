import React from 'react';

const education = [
  {
    degree: 'PG Diploma in Blockchain',
    institution: 'Digital University Kerala, Trivandrum',
    duration: '2024 – 2025',
    type: 'completed',
    description: 'Advanced studies in blockchain architecture and development',
    icon: (
      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M12 14l9-5-9-5-9 5 9 5z"/>
        <path d="M12 14l6.16-3.422A12.083 12.083 0 0112 21.5a12.083 12.083 0 01-6.16-10.922L12 14z"/>
      </svg>
    )
  },
  {
    degree: 'Bachelor of Science in Cyber Forensic',
    institution: 'School of Technology and Applied Science, Edappally, Ernakulam',
    duration: '2020 – 2023',
    type: 'completed',
    description: 'Comprehensive study of cybersecurity and digital forensics',
    icon: (
      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M12 14l9-5-9-5-9 5 9 5z"/>
        <path d="M12 14l6.16-3.422A12.083 12.083 0 0112 21.5a12.083 12.083 0 01-6.16-10.922L12 14z"/>
      </svg>
    )
  },
];

const courses = [
  {
    title: 'Software Developer Course',
    org: 'KKM Soft Pvt. Ltd, Under Deen Dayal Upadhyaya Grameen Kaushalya Yojana (DDU GKY)',
    duration: '6 Months Duration',
    description: 'Full-stack development training with modern technologies',
    icon: (
      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
      </svg>
    )
  },
  {
    title: 'Cyber Security Analyst Course',
    org: 'ICT Academy of Kerala, Training centre in Thiruvananthapuram, Kerala',
    duration: '6 Months Duration',
    description: 'Specialized training in cybersecurity analysis and threat detection',
    icon: (
      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
      </svg>
    )
  },
];

const experience = [
  {
    title: 'Mern Stack Developer Trainee',
    org: ' Adam Finastra Pvt.Ltd, Incubation Centre, MCET Thrissur',
    type: 'current',
    duration: '4 Months ',
    description: 'Hands-on experience in Mern stack  development and API design',
    icon: (
      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6"></path>
      </svg>
    )
  },
];

const professional = [
  {
    title: 'Developer Essentials for Blockchain',
    org: 'Kerala Blockchain Academy',
    description: 'Comprehensive blockchain development fundamentals',
    icon: (
      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
      </svg>
    )
  },
  {
    title: 'Blockchain Foundation Course',
    org: 'Kerala Blockchain Academy',
    description: 'Core blockchain concepts and implementation',
    icon: (
      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
      </svg>
    )
  },
  {
    title: 'Certified Blockchain Associate (CBA)',
    org: 'Kerala Blockchain Academy',
    description: 'Professional blockchain certification and expertise',
    icon: (
      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
      </svg>
    )
  },
];

const Education = () => (
  <section id="education" className="w-full py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
    {/* Background decorative elements */}
    <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
    <div className="absolute top-0 right-0 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
    <div className="absolute -bottom-8 left-20 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
    
    <div className="max-w-7xl mx-auto px-4 relative z-10">
      {/* Header */}
      <div className="text-center mb-16 animate-fadeInUp">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 via-blue-800 to-indigo-800 bg-clip-text text-transparent mb-6">
          Experience & Education
        </h2>
        <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full shadow-lg mb-8"></div>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          My academic journey and professional development in technology and blockchain
        </p>
      </div>

 {/* Professional Experience Cards */}
 <div className="mb-16">
        <h3 className="text-3xl font-bold text-center text-gray-800 mb-12 animate-fadeInUp">Professional Experience</h3>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
          {experience.map((item, index) => (
            <div 
              key={index} 
              className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg px-8 py-10 flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl border border-gray-100 hover:border-blue-200 group animate-slideInLeft"
              style={{ animationDelay: `${index * 300}ms` }}
            >
              <div className="bg-gradient-to-br from-gray-900 to-blue-900 rounded-full w-20 h-20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <div className="group-hover:rotate-12 transition-transform duration-300">
                  {item.icon}
                </div>
              </div>
              <div className="flex items-center gap-2 mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold transition-all duration-300 ${
                  item.type === 'current' 
                    ? 'bg-green-100 text-green-700 group-hover:bg-green-200' 
                    : 'bg-blue-100 text-blue-700 group-hover:bg-blue-200'
                }`}>
                  {item.type === 'current' ? 'Current' : 'Completed'}
                </span>
                <span className="text-gray-500 text-sm group-hover:text-gray-700 transition-colors duration-300">{item.duration}</span>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">{item.title}</h4>
              <p className="text-gray-600 mb-4 text-sm group-hover:text-gray-800 transition-colors duration-300">{item.org}</p>
              <p className="text-gray-500 text-sm group-hover:text-gray-600 transition-colors duration-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Education Cards */}
      <div className="mb-16">
        <h3 className="text-3xl font-bold text-center text-gray-800 mb-12 animate-fadeInUp">Academic Journey</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((item, index) => (
            <div 
              key={index} 
              className={`bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg px-8 py-10 flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl border border-gray-100 hover:border-blue-200 group ${
                index % 2 === 0 ? 'animate-slideInLeft' : 'animate-slideInRight'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="bg-gradient-to-br from-gray-900 to-blue-900 rounded-full w-20 h-20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <div className="group-hover:rotate-12 transition-transform duration-300">
                  {item.icon}
                </div>
              </div>
              <div className="flex items-center gap-2 mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold transition-all duration-300 ${
                  item.type === 'current' 
                    ? 'bg-green-100 text-green-700 group-hover:bg-green-200' 
                    : 'bg-blue-100 text-blue-700 group-hover:bg-blue-200'
                }`}>
                  {item.type === 'current' ? 'Current' : 'Completed'}
                </span>
                <span className="text-gray-500 text-sm group-hover:text-gray-700 transition-colors duration-300">{item.duration}</span>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">{item.degree}</h4>
              <p className="text-gray-600 mb-4 group-hover:text-gray-800 transition-colors duration-300">{item.institution}</p>
              <p className="text-gray-500 text-sm group-hover:text-gray-600 transition-colors duration-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Training & Courses Cards */}
      <div className="mb-16">
        <h3 className="text-3xl font-bold text-center text-gray-800 mb-12 animate-fadeInUp">Training & Courses</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map((item, index) => (
            <div 
              key={index} 
              className={`bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg px-8 py-10 flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl border border-gray-100 hover:border-blue-200 group ${
                index % 2 === 0 ? 'animate-slideInRight' : 'animate-slideInLeft'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="bg-gradient-to-br from-gray-900 to-blue-900 rounded-full w-20 h-20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <div className="group-hover:rotate-12 transition-transform duration-300">
                  {item.icon}
                </div>
              </div>
              <span className="text-gray-500 text-sm mb-4 group-hover:text-gray-700 transition-colors duration-300">{item.duration}</span>
              <h4 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">{item.title}</h4>
              <p className="text-gray-600 mb-4 text-sm group-hover:text-gray-800 transition-colors duration-300">{item.org}</p>
              <p className="text-gray-500 text-sm group-hover:text-gray-600 transition-colors duration-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Professional Certifications Cards */}
      <div>
        <h3 className="text-3xl font-bold text-center text-gray-800 mb-12 animate-fadeInUp">Professional Certifications</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {professional.map((item, index) => (
            <div 
              key={index} 
              className={`bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg px-8 py-10 flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl border border-gray-100 hover:border-blue-200 group ${
                index === 0 ? 'animate-slideInLeft' : 
                index === 1 ? 'animate-slideInBottom' : 
                'animate-slideInRight'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="bg-gradient-to-br from-gray-900 to-blue-900 rounded-full w-20 h-20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <div className="group-hover:rotate-12 transition-transform duration-300">
                  {item.icon}
                </div>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">{item.title}</h4>
              <p className="text-gray-600 mb-4 text-sm group-hover:text-gray-800 transition-colors duration-300">{item.org}</p>
              <p className="text-gray-500 text-sm group-hover:text-gray-600 transition-colors duration-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

    <style jsx>{`
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      @keyframes slideInLeft {
        from {
          opacity: 0;
          transform: translateX(-100px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }
      @keyframes slideInRight {
        from {
          opacity: 0;
          transform: translateX(100px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }
      @keyframes slideInBottom {
        from {
          opacity: 0;
          transform: translateY(100px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      @keyframes blob {
        0% { transform: translate(0px, 0px) scale(1); }
        33% { transform: translate(30px, -50px) scale(1.1); }
        66% { transform: translate(-20px, 20px) scale(0.9); }
        100% { transform: translate(0px, 0px) scale(1); }
      }
      .animate-fadeInUp {
        animation: fadeInUp 0.8s ease-out forwards;
      }
      .animate-slideInLeft {
        animation: slideInLeft 0.8s ease-out forwards;
      }
      .animate-slideInRight {
        animation: slideInRight 0.8s ease-out forwards;
      }
      .animate-slideInBottom {
        animation: slideInBottom 0.8s ease-out forwards;
      }
      .animate-blob {
        animation: blob 7s infinite;
      }
      .animation-delay-2000 {
        animation-delay: 2s;
      }
      .animation-delay-4000 {
        animation-delay: 4s;
      }
    `}</style>
  </section>
);

export default Education;
