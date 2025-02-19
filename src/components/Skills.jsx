import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaJs,
  FaVuejs,
  FaReact,
  FaNodeJs,
  FaNpm,
  FaAccessibleIcon,
  FaGitAlt,
  FaGithub,
  FaDocker,
} from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiWebpack, SiVite } from "react-icons/si";

const SkillIcon = ({ icon: Icon, name, color }) => (
  <div className="flex flex-col items-center group">
    <Icon
      className={`text-5xl ${color} group-hover:text-[rgb(187,237,47)] transition-colors duration-200`}
    />
    <span className="mt-2 text-sm text-gray-400 group-hover:text-[rgb(187,237,47)] transition-colors duration-200">
      {name}
    </span>
  </div>
);

const Skills = () => {
  const skills = [
    { icon: FaHtml5, name: "HTML5", color: "text-orange-500" },
    { icon: FaCss3Alt, name: "CSS3", color: "text-blue-500" },
    { icon: FaSass, name: "Sass", color: "text-pink-500" },
    { icon: SiTailwindcss, name: "Tailwind", color: "text-cyan-400" },
    { icon: FaJs, name: "JavaScript", color: "text-yellow-400" },
    { icon: SiTypescript, name: "TypeScript", color: "text-blue-600" },
    { icon: FaVuejs, name: "Vue.js", color: "text-green-500" },
    { icon: FaReact, name: "React", color: "text-blue-400" },
    { icon: FaNodeJs, name: "Node.js", color: "text-green-500" },
    { icon: FaNpm, name: "npm", color: "text-red-500" },
    { icon: SiWebpack, name: "Webpack", color: "text-blue-500" },
    { icon: SiVite, name: "Vite.js", color: "text-purple-500" },
    { icon: FaAccessibleIcon, name: "A11y", color: "text-green-600" },
    { icon: FaGitAlt, name: "Git", color: "text-orange-500" },
    { icon: FaGithub, name: "GitHub", color: "text-gray-400" },
    { icon: FaDocker, name: "Docker", color: "text-blue-500" },
  ];

  return (
    <section id="skills" className="relative p-16 pb-44">
      <div className="absolute inset-0 bg-skills-gradient" />
      <div className="container relative mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-12 flex justify-center">
          Habilidades
        </h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6 mb-10">
          {skills.map((skill, index) => (
            <SkillIcon
              key={index}
              icon={skill.icon}
              name={skill.name}
              color={skill.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
