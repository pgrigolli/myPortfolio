import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between bg-mainBlue p-4 fixed top-0 w-full z-10">
      {/* Logo ou título */}
      <div className="text-white text-xl font-bold">
        <Link href="/">Pedro Grigolli's Portfolio</Link>
      </div>

      {/* Botão do menu para dispositivos menores */}
      <button
        className="text-white text-2xl md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Abrir menu"
      >
        ☰
      </button>

      {/* Itens do menu */}
      <ul
        className={`flex-col md:flex-row md:flex space-y-2 md:space-y-0 md:space-x-10 text-white 
        ${isMenuOpen ? "flex" : "hidden"} md:block`}
      >
        <li>
          <Link href="/" className="hover:text-gray-300">
            Home
          </Link>
        </li>
        <li>
          <Link href="#about-me" className="hover:text-gray-300">
            Sobre mim
          </Link>
        </li>
        <li>
          <Link href="#my-projects" className="hover:text-gray-300">
            Meus projetos
          </Link>
        </li>
      </ul>
    </nav>
  );
}
