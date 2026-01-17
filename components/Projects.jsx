"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FaGithub } from "react-icons/fa6";
import Prayag from '../asset/prayagraj.png'
import Triyugi from '../asset/triyugi-shaadi.png'
import Triyugi1 from '../asset/triyugi-mandap.png'
import image1 from '../asset/image.png'
import Image from "next/image";

const Projects = () => {
  const projects = [
    {
      title: "Food Delhivery",
      description:
        "A modern, interactive resume builder with real-time preview and multiple templates. Built with React.js and Tailwind CSS.",
      image:image1,
      technologies: ["React.js", "Tailwind CSS", "JavaScript", "HTML/CSS"],
      liveLink: "https://food-del-frontend-ecru.vercel.app/",
      githubLink: "https://github.com/Vikrant-Mainwal/food-del-frontend",
    },
    {
      title: "Triyuginarayan Mandap",
      description:
        "Real-time messaging application with user authentication, group chats, and file sharing capabilities.",
      image:Triyugi1,
      technologies: ["React.js", "Node.js", "Socket.io", "MongoDB"],
      liveLink: "https://www.triyuginarayanmandap.com/",
    },
    {
      title: "Triyuginarayan Shaadi",
      description:
        "Comprehensive classroom management system for teachers and students with assignment tracking and grading.",
      image:Triyugi,
      technologies: ["Next.js", "MongoDB", "Express.js", "Tailwind CSS"],
      liveLink: "https://www.triyuginarayanshaadi.com/",
    },
    {
      title: "Prayagraj Tourism",
      description:
        "Professional admin dashboard for internship management with analytics, user management, and reporting.",
      image: Prayag,
      technologies: ["React.js", "Chart.js", "REST APIs", "Bootstrap"],
      liveLink: "https://prayagraj-tourism.vercel.app/",
      githubLink: "https://github.com/Vikrant-Mainwal/prayagraj-tourism",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 px-4 bg-red-10 dark:bg-slate-900/50"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-[fade-in_0.8s_ease-out]">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and technical capabilities
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            // caard
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 animate-[fade-in_0.8s_ease-out] overflow-hidden"
              style={{
                animationDelay: `${index * 0.1}s`,
                animationFillMode: "both",
              }}
            >
              <div className="overflow-hidden rounded-t-lg">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full text-sm transition-all duration-300 hover:scale-105 hover:bg-indigo-200 dark:hover:bg-indigo-800/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    size="sm"
                    // asChild
                    className="transition-all duration-300 hover:scale-105 hover:shadow-md"
                  >
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                  </Button>
                  {project.githubLink ? (
                    <Button
                      variant="outline"
                      size="sm"
                      // asChild
                      className="transition-all duration-300 hover:scale-105 hover:shadow-md"
                    >
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <FaGithub size={16} /> Code
                      </a>
                    </Button>
                  ) : (
                    ""
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
