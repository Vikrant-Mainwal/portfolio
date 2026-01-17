"use client";
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-[fade-in_0.8s_ease-out]">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating exceptional digital experiences through code and design
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card className="p-6 hover:shadow-xl h-60 transition-all duration-500 hover:-translate-y-2 animate-[fade-in_0.8s_ease-out_0.2s_both]">
              <CardContent className="p-0">
                <h3 className="text-2xl font-semibold mb-4 text-indigo-600 dark:text-indigo-400">Background</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm a B.Tech student in Production and Industrial Engineering at MNNIT Allahabad, 
                  but my heart lies in web development. Over the past year, I've immersed myself in 
                  creating modern, responsive web applications that solve real-world problems.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 h-60 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-[fade-in_0.8s_ease-out_0.4s_both]">
              <CardContent className="p-0">
                <h3 className="text-2xl font-semibold mb-4 text-purple-600 dark:text-purple-400">Interests</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Beyond coding, I'm fascinated by product design, user experience, and financial markets. 
                  I experiment with Pine Script for trading algorithms and love exploring the intersection 
                  of technology and design to create meaningful user experiences.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="p-6 h-60 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-[fade-in_0.8s_ease-out_0.6s_both]">
              <CardContent className="p-0">
                <h3 className="text-2xl font-semibold mb-4 text-rose-600 dark:text-rose-400">Goals</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I aim to become a full-stack developer who bridges the gap between technical excellence 
                  and exceptional user experience. My goal is to work on products that make a positive 
                  impact on people's lives while continuously learning and growing in the tech industry.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 h-60 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-[fade-in_0.8s_ease-out_0.8s_both]">
              <CardContent className="p-0">
                <h3 className="text-2xl font-semibold mb-4 text-emerald-600 dark:text-emerald-400">Philosophy</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I believe in writing clean, maintainable code and creating intuitive user interfaces. 
                  Every project is an opportunity to learn something new and push the boundaries of 
                  what's possible on the web.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
