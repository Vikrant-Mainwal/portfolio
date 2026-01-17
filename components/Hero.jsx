"use client";
import React from 'react';
import { Button } from '@/components/ui/button';
// import { ArrowDown } from 'react-icons';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container mx-auto text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 bg-clip-text text-transparent animate-[fade-in_1s_ease-out]">
            Vikrant Mainwal
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-[fade-in_1s_ease-out_0.2s_both]">
            Full-Stack Web Developer & UI/UX Enthusiast from Dehradun
          </p>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto animate-[fade-in_1s_ease-out_0.4s_both]">
            B.Tech student at MNNIT Allahabad with 1+ years of experience crafting modern web applications 
            using React.js, Next.js, and cutting-edge technologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-[fade-in_1s_ease-out_0.6s_both]">
            <Button 
              size="lg" 
              onClick={scrollToProjects}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-3 text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => document.getElementById('contact').scrollIntoView({behavior :'smooth'})}
              className="px-8 py-3 text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg border-2 hover:border-indigo-500 hover:bg-indigo-700"
            >
              Get In Touch
            </Button>
          </div>
        </div>
        {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown size={24} className="text-muted-foreground animate-pulse" />
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
