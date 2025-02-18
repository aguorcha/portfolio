import { useCallback } from "react";

export function Header() {
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

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <nav className="bg-black p-4 sticky top-0 z-50">
      <div className="flex justify-between lg:mx-8">
        <p
          onClick={scrollToTop}
          className="text-white font-bold cursor-pointer transition-colors duration-300 hover:text-[rgb(187,237,47)]"
        >
          aguorcha
        </p>
        <ul className="flex justify-end space-x-8 text-white">
          <li>
            <a
              href="#projects"
              onClick={(e) => handleClick(e, "projects")}
              className="transition-colors duration-300 hover:text-[rgb(187,237,47)]"
            >
              Proyectos
            </a>
          </li>
          <li>
            <a
              href="#skills"
              onClick={(e) => handleClick(e, "skills")}
              className="transition-colors duration-300 hover:text-[rgb(187,237,47)]"
            >
              Habilidades
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
