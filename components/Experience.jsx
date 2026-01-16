
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Experience = () => {
  const experiences = [
    {
      company: "Digital 360",
      role: "Web Development Intern",
      duration: "Jun, 2025 - Aug, 2025",
      description: "Developed and maintained admin dashboard interfaces, implemented responsive designs, and worked with REST APIs to create seamless user experiences.",
      technologies: ["React.js", "JavaScript", "REST APIs", "HTML/CSS"],
      logo: "💼"
    }
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-[fade-in_0.8s_ease-out]">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional experience and internships that shaped my development journey
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-[fade-in_0.8s_ease-out] border-l-4 border-l-indigo-500 hover:border-l-purple-500"
              style={{ animationDelay: `${index * 0.2}s`, animationFillMode: 'both' }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start gap-4">
                  <div className="text-4xl animate-pulse">{exp.logo}</div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl font-semibold text-indigo-600 dark:text-indigo-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300">
                      {exp.role}
                    </CardTitle>
                    <p className="text-xl font-medium text-foreground mt-1">{exp.company}</p>
                    <p className="text-muted-foreground">{exp.duration}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm transition-all duration-300 hover:scale-105 hover:bg-purple-200 dark:hover:bg-purple-800/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
