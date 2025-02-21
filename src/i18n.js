import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { projectTranslations } from './projectTranslations';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          "Projects": "Projects",
          "Skills": "Skills",
          "greeting": "Hello, my name is Agustín Orcha",
          "bio": "I specialize in Frontend Web development. I have skills in HTML5, CSS3, TailwindCSS, JavaScript, TypeScript, Vue.js, React.js and Web Accessibility. I'm also passionate about blockchain technology and Web3.",
          "viewCV": "View CV",
          "Visit": "Visit",
          "made": "Made with",
          "and": "and React",
          ...projectTranslations.en
        }
      },
      es: {
        translation: {
          "Projects": "Proyectos",
          "Skills": "Habilidades",
          "greeting": "Hola, me llamo Agustín Orcha",
          "bio": "Estoy especializado en el desarrollo Web Frontend. Tengo habilidades en HTML5, CSS3, TailwindCSS, JavaScript, TypeScript, Vue.js, React.js y Accesibilidad Web. Además soy apasionado de la tecnología blockchain y Web3.",
          "viewCV": "Ver CV",
          "Visit": "Visitar",
          "made": "Hecho con",
          "and": "y React",
          ...projectTranslations.es
        }
      }
    },
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false,
    }
  });

export default i18n;