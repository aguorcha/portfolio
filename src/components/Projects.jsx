import React, { useState, useEffect } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import projectsData from "../data.json";
import { useTranslation } from "react-i18next";

const ProjectCard = ({ project }) => {
  const { t } = useTranslation();

  return (
    <div className="sm:max-w-sm text-white flex flex-col justify-between card overflow-hidden transform transition duration-300 hover:scale-105">
      <img
        className="w-full h-48 object-cover"
        src={project.image || "/placeholder.svg"}
        alt={t(project.titleKey)}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{t(project.titleKey)}</div>
        <p className="text-base">{t(project.descriptionKey)}</p>
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
            <FaExternalLinkAlt className="inline mr-1" /> {t("Visit")}
          </a>
        )}
      </div>
    </div>
  );
};

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    setProjects(projectsData.projects);
  }, []);

  return (
    <section id="projects" className="pb-44 py-16 bg-projects-gradient">
      <div className="container px-10 flex flex-col items-center">
        <h2 className="text-white text-3xl font-bold my-8">{t("Projects")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
