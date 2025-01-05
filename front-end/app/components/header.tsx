import Image from "next/image";
import { useState } from "react";
import "../styles/globals.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-[#D8BFAA] flex flex-row justify-between items-center h-24 px-5 shadow-lg relative">
      {/* Logo */}
      <Image
        src="/logo.png"
        alt="Logo"
        width={75}
        height={50}
        priority
        className="ml-5"
      />

      {/* Navigation (Desktop) */}
      <ul className="hidden md:flex space-x-8 text-[#333333] cursor-pointer">
        <li className="relative group">
          <a
            href="#presentation"
            className="relative text-[#333333] group-hover:text-[#b97a57] transition duration-300"
          >
            Présentation
          </a>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#b97a57] transition-all duration-300 group-hover:w-full"></span>
        </li>
        <li className="relative group">
          <a
            href="#mes-projets"
            className="relative text-[#333333] group-hover:text-[#b97a57] transition duration-300"
          >
            Mes projets
          </a>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#b97a57] transition-all duration-300 group-hover:w-full"></span>
        </li>
        <li className="relative group">
          <a
            href="#mon-parcours"
            className="relative text-[#333333] group-hover:text-[#b97a57] transition duration-300"
          >
            Mon parcours
          </a>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#b97a57] transition-all duration-300 group-hover:w-full"></span>
        </li>
        <li className="relative group">
          <a
            href="#contact"
            className="relative text-[#333333] group-hover:text-[#b97a57] transition duration-300"
          >
            Contact
          </a>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#b97a57] transition-all duration-300 group-hover:w-full"></span>
        </li>
      </ul>

      {/* Bouton pour télécharger le CV (Desktop) */}
      <div className="hidden md:block ml-5">
        <a
          href="/Elsa Tanguy_________.pdf"
          download="Mon_CV"
          className="bg-[#b97a57] text-white py-2 px-4 rounded hover:bg-[#dec9b0] transition duration-300"
        >
          Télécharger mon CV
        </a>
      </div>

      {/* Menu Hamburger (Mobile) */}
      <div className="md:hidden flex items-center">
        <button
          onClick={toggleMenu}
          className="text-[#333333] focus:outline-none"
          aria-label="Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Navigation Déroulante (Mobile) */}
      {isMenuOpen && (
        <div className="absolute top-24 left-0 w-full bg-[#D8BFAA] shadow-lg z-10">
          <ul className="flex flex-col items-center space-y-4 py-4 text-[#333333]">
            <li>
              <a
                href="#presentation"
                onClick={toggleMenu}
                className="text-[#333333] hover:text-[#b97a57] transition duration-300"
              >
                Présentation
              </a>
            </li>
            <li>
              <a
                href="#mes-projets"
                onClick={toggleMenu}
                className="text-[#333333] hover:text-[#b97a57] transition duration-300"
              >
                Mes projets
              </a>
            </li>
            <li>
              <a
                href="#mon-parcours"
                onClick={toggleMenu}
                className="text-[#333333] hover:text-[#b97a57] transition duration-300"
              >
                Mon parcours
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={toggleMenu}
                className="text-[#333333] hover:text-[#b97a57] transition duration-300"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="/Elsa Tanguy_________.pdf"
                download="Mon_CV"
                onClick={toggleMenu}
                className="bg-[#b97a57] text-white py-2 px-4 rounded hover:bg-[#dec9b0] transition duration-300"
              >
                Télécharger mon CV
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
