import React, { useEffect, useState } from 'react';

const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#about' },
  { name: 'Skill', href: '#skills' },
  { name: 'Education & Experience', href: '#education' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-30 transition-all duration-300
        ${scrolled ? 'bg-white shadow-lg py-4' : 'bg-transparent py-8'}
      `}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-10">
        {/* Logo */}
        <div
          className={`text-3xl font-script font-bold tracking-wider select-none transition-colors duration-300 ${scrolled ? 'text-gray-800' : 'text-white'}`}
          style={{ fontFamily: 'cursive' }}
        >
          Krishna
        </div>
        {/* Nav Links */}
        <div className="flex space-x-8">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              className={`text-lg font-medium transition-colors duration-200 ${scrolled ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-blue-200'} opacity-70 hover:opacity-100`}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

