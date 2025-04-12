import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* NAVBAR FIXA */}
      <nav className="flex items-center justify-between bg-mainBlue px-4 py-4 fixed top-0 w-full z-20 h-16">
        <div className="text-white text-xl font-bold">
          <Link href="/">Pedro Grigolli's Portfolio</Link>
        </div>

        {/* Botão hamburguer - mobile */}
        <button
          className="text-white text-2xl md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Abrir menu"
        >
          ☰
        </button>

        {/* Menu desktop */}
        <ul className="hidden md:flex space-x-10 text-white">
          <li><Link href="/" className="hover:text-gray-300">Home</Link></li>
          <li><Link href="#about-me" className="hover:text-gray-300">About me</Link></li>
          <li><Link href="#my-projects" className="hover:text-gray-300">My projects</Link></li>
        </ul>
      </nav>

      {/* MENU MOBILE */}
      {isMenuOpen && (
        <div className="md:hidden bg-mainBlue w-full absolute top-16 z-10 flex flex-col items-center space-y-4 py-4">
          <Link href="/" className="text-white hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link href="#about-me" className="text-white hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>About me</Link>
          <Link href="#my-projects" className="text-white hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>My projects</Link>
        </div>
      )}
    </>
  );
}
