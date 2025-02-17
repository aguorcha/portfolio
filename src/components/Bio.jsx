import { Button } from "@/components/ui/button";

export function Bio() {
  return (
    <section id="bio" className="bg-black text-white p-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="md:w-1/2 md:pr-8">
            <h2 className="text-2xl mb-4">Hola, me llamo Agustín Orcha</h2>
            <p className="mb-4">
              Estoy especializado en el desarrollo Web Frontend. Tengo
              habilidades en HTML5, CSS3, TailwindCSS, JavaScript, TypeScript,
              Vue.js y React.js, estoy en búsqueda de una posición que me
              permita contribuir al desarrollo de aplicaciones innovadoras,
              aprovechando mi pasión por la tecnología, mi gusto por los
              desafíos, mi creatividad y mi capacidad para trabajar en equipo.
            </p>
            <Button className="bg-[rgb(187,237,47)] text-black hover:bg-[rgb(158,203,34)] rounded-2xl">
              Contáctame
            </Button>
          </div>
          <div className="mt-8 md:mt-0 lg:mr-24 ">
            <img
              src="/src/assets/modular-blockchain.jpeg"
              className="rounded-3xl w-[400px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
