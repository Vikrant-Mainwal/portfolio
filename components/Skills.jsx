"use client";
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Progress } from '@/components/ui/progress';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React.js", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "Tailwind CSS", level: 95 },
        { name: "JavaScript", level: 88 },
        { name: "HTML/CSS", level: 92 }
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Express.js", level: 82 },
        { name: "MongoDB", level: 78 },
        { name: "REST APIs", level: 85 },
        { name: "Database Design", level: 75 }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git & GitHub", level: 88 },
        { name: "VS Code", level: 95 },
        { name: "Pine Script", level: 70 },
        { name: "Responsive Design", level: 90 },
        { name: "UI/UX Design", level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-[fade-in_0.8s_ease-out]">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technical skills and proficiency levels across different technologies
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-[fade-in_0.8s_ease-out]"
              style={{ animationDelay: `${index * 0.2}s`, animationFillMode: 'both' }}
            >
              <div>
                <div className="text-xl font-semibold text-center text-indigo-600 dark:text-indigo-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300">
                  {category.title}
                </div>
              </div>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2 group">
                    <div className="flex justify-between items-center">
                      <span className="font-medium group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <h2
                      value={skill.level} 
                      className="h-2 transition-all duration-500 hover:h-3" 
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center animate-[fade-in_0.8s_ease-out_0.6s_both]">
          <h3 className="text-2xl font-semibold mb-8 text-purple-600 dark:text-purple-400">
            Additional Interests
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Data Structure And Algorithm", "User Experience", "System Design", 
              , "Performance Optimization", "Code Architecture"
            ].map((interest, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 text-indigo-700 dark:text-indigo-300 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg animate-[fade-in_0.5s_ease-out] cursor-default"
                style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'both' }}
              >
                {interest}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
