import { Button } from "@/components/ui/button";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import "animate.css";

export function Bio() {
  return (
    <section
      id="bio"
      className="bg-bio-gradient text-white p-8 pb-20 lg:h-screen"
    >
      <div className="container mt-10 px-0 lg:px-44">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="md:w-1/2 md:pr-8">
            <h2 className="text-4xl xl:text-5xl mb-4 animate__animated animate__fadeInUpBig">
              Hola, me llamo Agustín Orcha
            </h2>
            <p className="mb-4">
              Estoy especializado en el desarrollo Web Frontend. Tengo
              habilidades en HTML5, CSS3, TailwindCSS, JavaScript, TypeScript,
              Vue.js y React.js. Además soy apasionado de la tecnología
              blockchain y Web3.
            </p>
            <div className="flex space-x-4 mb-4">
              <a
                href="https://www.linkedin.com/in/agustin-orcha-web3/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[rgb(187,237,47)] transition-colors"
              >
                <FaLinkedin className="text-3xl" />
              </a>
              <a
                href="https://github.com/aguorcha?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[rgb(187,237,47)] transition-colors"
              >
                <FaGithub className="text-3xl" />
              </a>
            </div>
            <Button className="bg-[rgb(187,237,47)] text-black hover:bg-[rgb(158,203,34)] rounded-2xl">
              Contáctame
            </Button>
          </div>
          <div className="flex justify-center md:justify-end w-full md:w-1/2 mt-8 md:mt-0">
            <div className="relative w-full max-w-[400px] aspect-square">
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  maskImage:
                    "radial-gradient(circle at center, black 0%, transparent 100%)",
                  WebkitMaskImage:
                    "radial-gradient(circle at center, black 0%, transparent 100%)",
                }}
              >
                <img
                  src="https://i.postimg.cc/QNc43vJ8/DSCF3640.jpg"
                  alt="Agustín Orcha"
                  className="w-full h-full object-cover animate__animated animate__fadeInDownBig"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
