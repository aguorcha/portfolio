import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="w-8 h-8">
      {i18n.language === "es" ? (
        <button
          className="w-full h-full rounded flex items-center justify-center text-sm font-medium transition-colors duration-200 text-white hover:text-[rgb(187,237,47)]"
          onClick={() => changeLanguage("en")}
        >
          EN
        </button>
      ) : (
        <button
          className="w-full h-full rounded flex items-center justify-center text-sm font-medium transition-colors duration-200 text-white hover:text-[rgb(187,237,47)]"
          onClick={() => changeLanguage("es")}
        >
          ES
        </button>
      )}
    </div>
  );
};

export default LanguageSelector;
