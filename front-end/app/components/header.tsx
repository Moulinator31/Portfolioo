import Image from "next/image";
import { useState, useEffect } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Désactiver le défilement de la page lors de l'ouverture du menu
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isMenuOpen]);

  return (
    <header className="bg-[#D8BFAA] flex justify-between items-center h-24 px-5 shadow-lg relative z-50">
      {/* Logo */}
      <Image src="/logo.png" alt="Logo" width={75} height={50} priority className="ml-5" />

      {/* Navigation (Desktop) */}
      <ul className="hidden md:flex space-x-8 text-[#333333] cursor-pointer">
        <li><a href="#presentation" className="hover:text-[#b97a57]">Présentation</a></li>
        <li><a href="#mes-projets" className="hover:text-[#b97a57]">Mes projets</a></li>
        <li><a href="#mon-parcours" className="hover:text-[#b97a57]">Mon parcours</a></li>
        <li><a href="#contact" className="hover:text-[#b97a57]">Contact</a></li>
        <li><a href="/Elsa Tanguy_________.pdf"  download="Mon_CV" className="bg-[#b97a57] text-white py-2 px-4 rounded hover:bg-[#dec9b0] transition duration-300">Télécharger mon CV</a></li>
      </ul>

      {/* Bouton Hamburger (Mobile) */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-[#333333]" aria-label="Menu">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Menu déroulant */}
      {isMenuOpen && (
        <div className="absolute top-24 left-0 w-full bg-[#D8BFAA] shadow-lg z-50">
          <ul className="flex flex-col items-center space-y-4 py-4 text-[#333333]">
            <li><a href="#presentation" onClick={toggleMenu} className="hover:text-[#b97a57]">Présentation</a></li>
            <li><a href="#mes-projets" onClick={toggleMenu} className="hover:text-[#b97a57]">Mes projets</a></li>
            <li><a href="#mon-parcours" onClick={toggleMenu} className="hover:text-[#b97a57]">Mon parcours</a></li>
            <li><a href="#contact" onClick={toggleMenu} className="hover:text-[#b97a57]">Contact</a></li>
            <li><a href="/Elsa Tanguy_________.pdf" onClick={toggleMenu}  download="Mon_CV" className="bg-[#b97a57] text-white py-2 px-4 rounded hover:bg-[#dec9b0] transition duration-300">Télécharger mon CV</a></li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;

