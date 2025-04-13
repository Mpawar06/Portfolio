import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Akatsuki-Project-Hub',
    description: 'Akatsuki Project Hub is a dynamic web platform designed to facilitate the storage, listing, buying, and selling of a wide range of academic and personal projects. ',
    tech: ['React.js','Typescript'],
    github: 'https://github.com/Mpawar06/Akatsuki-Projects.git',
    demo: 'https://madhavi-project-hub.vercel.app/',
  },
  
];

const Projects = () => {
  return (
    <section className="py-20" id="projects">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
        <div className="flex items-center justify-center">
          {projects.map((project) => (
            <div key={project.title} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6">
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span key={tech} className="bg-indigo-100 text-indigo-800 text-sm px-3 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a href={project.github} className="flex items-center gap-2 text-gray-600 hover:text-indigo-600">
                  <Github size={20} />
                  GitHub
                </a>
                <a href={project.demo} className="flex items-center gap-2 text-gray-600 hover:text-indigo-600">
                  <ExternalLink size={20} />
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;