import React, { useState, useEffect } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import projectsData from "../data.json";

const ProjectCard = ({ project }) => {
  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-[rgb(187,237,47)] transition-all duration-300 hover:shadow-2xl hover:scale-105">
      <img
        className="w-full h-48 object-fit"
        src={project.image || "/placeholder.svg"}
        alt={project.title}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{project.title}</div>
        <p className="text-black text-base">{project.description}</p>
      </div>
      <div className="px-6 pt-4 pb-2 flex justify-end">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-gray-300"
          >
            <FaGithub className="inline mr-1" /> GitHub
          </a>
        )}
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-black rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 hover:bg-slate-500"
        >
          <FaExternalLinkAlt className="inline mr-1" /> Visitar
        </a>
      </div>
    </div>
  );
};

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectsData);
  }, []);

  return (
    <section id="projects" className="py-12 bg-black">
      <div className="container px-10">
        <h2 className="text-white text-3xl font-bold mb-8">Mis Proyectos</h2>
        <h3 className="text-white text-2xl font-bold mb-6">Web</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <h3 className="text-white text-2xl font-bold my-6">
          42Málaga Fundación Telefónica
        </h3>
        <div></div>
        <h3 className="text-white text-2xl font-bold my-6">
          Ingeniero Blockchain CodeCrypto
        </h3>
        <div></div>
      </div>
    </section>
  );
};

export default Projects;
