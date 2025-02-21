import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import LanguageSelector from "./LanguageSelector";

export function Header() {
  const { t } = useTranslation();

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
    <nav className="bg-black px-4 sticky top-0 z-50">
      <div className="flex justify-between items-center lg:mx-8">
        <img
          onClick={scrollToTop}
          className="w-20 cursor-pointer rounded-full"
          src="/logo.png"
          alt="Logo"
        />
        <ul className="flex justify-end space-x-8 text-white items-center">
          <li>
            <a
              href="#projects"
              onClick={(e) => handleClick(e, "projects")}
              className="transition-colors duration-300 hover:text-[rgb(187,237,47)]"
            >
              {t("Projects")}
            </a>
          </li>
          <li>
            <a
              href="#skills"
              onClick={(e) => handleClick(e, "skills")}
              className="transition-colors duration-300 hover:text-[rgb(187,237,47)]"
            >
              {t("Skills")}
            </a>
          </li>
          <li>
            <LanguageSelector />
          </li>
        </ul>
      </div>
    </nav>
  );
}
