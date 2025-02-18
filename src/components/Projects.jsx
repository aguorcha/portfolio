import React, { useState, useEffect } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import projectsData from "../data.json";

const ProjectCard = ({ project, showLiveUrl = true }) => {
  return (
    <div className="sm:max-w-sm text-white flex flex-col justify-between card overflow-hidden transform transition duration-300 hover:scale-105">
      <img
        className="w-full h-48 object-cover"
        src={project.image || "/placeholder.svg"}
        alt={project.title}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{project.title}</div>
        <p className="text-base">{project.description}</p>
      </div>
      <div className="px-6 pt-4 pb-2 flex justify-end mt-auto">
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
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#BBED2F] rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2 hover:bg-[rgb(158,203,34)]"
          >
            <FaExternalLinkAlt className="inline mr-1" /> Visitar
          </a>
        )}
      </div>
    </div>
  );
};

const Projects = () => {
  const [webProjects, setWebProjects] = useState([]);
  const [malaga42Projects, setMalaga42Projects] = useState([]);
  const [codeCryptoProjects, setCodeCryptoProjects] = useState([]);

  useEffect(() => {
    setWebProjects(projectsData.webProjects);
    setMalaga42Projects(projectsData.malaga42Projects);
    setCodeCryptoProjects(projectsData.codeCryptoProjects);
  }, []);

  return (
    <section id="projects" className="pb-44 py-12 bg-projects-gradient">
      <div className="container px-10 flex flex-col items-center">
        <h2 className="text-white text-3xl font-bold my-8">Mis Proyectos</h2>

        <h3 className="text-white text-2xl font-bold mb-10">Web</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
          {webProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <h3 className="text-white text-2xl font-bold mt-20 mb-10">
          42Málaga Fundación Telefónica
        </h3>
        <div
          className={`grid grid-cols-1 gap-20 ${
            malaga42Projects.length === 1
              ? "flex justify-center items-center"
              : "md:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {malaga42Projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              showLiveUrl={false}
            />
          ))}
        </div>

        <h3 className="text-white text-2xl font-bold mt-20 mb-10">
          Master Ingeniero Blockchain
        </h3>
        <div
          className={`grid grid-cols-1 gap-20 ${
            codeCryptoProjects.length === 1
              ? "flex justify-center items-center"
              : "md:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {codeCryptoProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              showLiveUrl={false}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
