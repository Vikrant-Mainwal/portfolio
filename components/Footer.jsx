"use client";
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 dark:bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="text-3xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Vikrant Mainwal
          </div>
          <p className="text-slate-400 mb-6 max-w-md mx-auto">
            Full-Stack Developer passionate about creating exceptional web experiences
          </p>
          <div className="border-t border-slate-700 pt-6 mt-6">
            <p className="text-slate-500 text-sm">
              © 2026 Vikrant Mainwal. Built with React.js and Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
