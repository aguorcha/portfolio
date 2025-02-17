import { useCallback } from "react";

export function Navbar() {
  const scrollToSection = useCallback((elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, []);

  const handleClick = (e, sectionId) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };

  return (
    <nav className="bg-gray-400 p-4 sticky top-0 z-50">
      <ul className="flex justify-center space-x-8">
        <li>
          <a
            href="#projects"
            onClick={(e) => handleClick(e, "projects")}
            className="text-black hover:text-white transition-colors duration-300"
          >
            Proyectos
          </a>
        </li>
        <li>
          <a
            href="#skills"
            onClick={(e) => handleClick(e, "skills")}
            className="text-black hover:text-white transition-colors duration-300"
          >
            Habilidades
          </a>
        </li>
      </ul>
    </nav>
  );
}
