"use client";
import React from 'react';
import { Button } from '@/components/ui/button';
// import { useTheme } from './ThemeProvider';
import { FaGithub, FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
// import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  // const { theme, toggleTheme } = useTheme();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border/40">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
          VM
        </div>
        
        <nav className="hidden md:flex space-x-8">
          <button onClick={() => scrollToSection('home')} className="hover:text-indigo-500 transition-colors">Home</button>
          <button onClick={() => scrollToSection('about')} className="hover:text-indigo-500 transition-colors">About</button>
          <button onClick={() => scrollToSection('projects')} className="hover:text-indigo-500 transition-colors">Projects</button>
          <button onClick={() => scrollToSection('experience')} className="hover:text-indigo-500 transition-colors">Experience</button>
          <button onClick={() => scrollToSection('skills')} className="hover:text-indigo-500 transition-colors">Skills</button>
          <button onClick={() => scrollToSection('contact')} className="hover:text-indigo-500 transition-colors">Contact</button>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="hidden sm:flex space-x-2">
            <a href="https://github.com/Vikrant-Mainwal" target="_blank" rel="noopener noreferrer" className="p-2 hover:text-indigo-500 transition-colors">
              <FaGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/vikrant-mainwal/" target="_blank" rel="noopener noreferrer" className="p-2 hover:text-indigo-500 transition-colors">
              <FaLinkedin size={20} />
            </a>
            <a href="https://www.instagram.com/vikrantmainwal/" target="_blank" rel="noopener noreferrer" className="p-2 hover:text-indigo-500 transition-colors">
              <FaInstagram size={20} />
            </a>
          </div>
          {/* <Button
            variant="outline"
            size="sm"
            // onClick={toggleTheme}
            className="ml-2"
          > */}
            {/* <ThemeToggle /> */}
            {/* {theme === 'light' ? '🌙' : '☀️'} */}
          {/* </Button> */}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
