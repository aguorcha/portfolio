export function Navbar() {
  return (
    <nav className="bg-gray-400 p-4">
      <ul className="flex justify-center space-x-8">
        <li>
          <a href="#projects" className="text-black hover:text-white">
            Proyectos
          </a>
        </li>
        <li>
          <a href="#skills" className="text-black hover:text-white">
            Habilidades
          </a>
        </li>
      </ul>
    </nav>
  );
}
