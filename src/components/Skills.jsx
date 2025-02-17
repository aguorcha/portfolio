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
  FaUbuntu,
  FaDocker,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiWebpack,
  SiVite,
  SiC,
  SiManjaro,
  SiEthereum,
  SiSolidity,
  SiChainlink,
  SiKubernetes,
} from "react-icons/si";

const SkillCard = ({ icon, name }) => (
  <div className="flex flex-col items-center p-4 bg-gray-800/80 backdrop-blur-sm rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:bg-gray-700">
    {icon}
    <span className="mt-2 text-sm font-medium text-gray-300">{name}</span>
  </div>
);

const SkillSection = ({ title, skills }) => (
  <div className="mb-8">
    <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {skills.map((skill, index) => (
        <SkillCard key={index} icon={skill.icon} name={skill.name} />
      ))}
    </div>
  </div>
);

const Skills = () => {
  const skillSections = [
    {
      title: "Desarrollo Web – Frontend",
      skills: [
        {
          icon: <FaHtml5 className="text-4xl text-orange-500" />,
          name: "HTML5",
        },
        {
          icon: <FaCss3Alt className="text-4xl text-blue-500" />,
          name: "CSS3",
        },
        { icon: <FaSass className="text-4xl text-pink-500" />, name: "Sass" },
        {
          icon: <SiTailwindcss className="text-4xl text-cyan-400" />,
          name: "TailwindCSS",
        },
        {
          icon: <FaJs className="text-4xl text-yellow-400" />,
          name: "JavaScript",
        },
        {
          icon: <SiTypescript className="text-4xl text-blue-600" />,
          name: "TypeScript",
        },
        {
          icon: <FaVuejs className="text-4xl text-green-500" />,
          name: "Vue.js",
        },
        { icon: <FaReact className="text-4xl text-blue-400" />, name: "React" },
        { icon: <FaNpm className="text-4xl text-red-500" />, name: "npm" },
        {
          icon: <SiWebpack className="text-4xl text-blue-500" />,
          name: "Webpack",
        },
        {
          icon: <SiVite className="text-4xl text-purple-500" />,
          name: "Vite.js",
        },
        {
          icon: <FaAccessibleIcon className="text-4xl text-green-600" />,
          name: "Accesibilidad",
        },
      ],
    },
    {
      title: "Backend",
      skills: [
        {
          icon: <FaNodeJs className="text-4xl text-green-500" />,
          name: "Node.js",
        },
        { icon: <SiC className="text-4xl text-blue-500" />, name: "C" },
      ],
    },
    {
      title: "Control de versiones",
      skills: [
        {
          icon: <FaGitAlt className="text-4xl text-orange-500" />,
          name: "Git",
        },
        {
          icon: <FaGithub className="text-4xl text-gray-400" />,
          name: "GitHub",
        },
      ],
    },
    {
      title: "Sistemas operativos",
      skills: [
        {
          icon: <FaUbuntu className="text-4xl text-orange-500" />,
          name: "Ubuntu",
        },
        {
          icon: <SiManjaro className="text-4xl text-green-500" />,
          name: "Manjaro",
        },
      ],
    },
    {
      title: "Web3",
      skills: [
        {
          icon: <SiEthereum className="text-4xl text-purple-400" />,
          name: "Ethereum",
        },
        {
          icon: <SiSolidity className="text-4xl text-gray-500" />,
          name: "Solidity",
        },
        {
          icon: <SiChainlink className="text-4xl text-blue-400" />,
          name: "Chainlink",
        },
      ],
    },
    {
      title: "Contenedorización y Orquestación",
      skills: [
        {
          icon: <FaDocker className="text-4xl text-blue-500" />,
          name: "Docker",
        },
        {
          icon: <SiKubernetes className="text-4xl text-blue-600" />,
          name: "Kubernetes",
        },
      ],
    },
  ];

  return (
    <section id="skills" className="relative py-12 min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-t from-[#bbde2f] via-black to-black" />
      <div className="container relative mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-8">Mis Habilidades</h2>
        {skillSections.map((section, index) => (
          <SkillSection
            key={index}
            title={section.title}
            skills={section.skills}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;
