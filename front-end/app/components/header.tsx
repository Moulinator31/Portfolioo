import Image from "next/image";
import "../styles/globals.css";

function Header() {
  return (
    <header className="bg-[#D8BFAA] flex flex-row justify-between items-center h-24 px-5 shadow-lg">
      {/* Logo */}
      <Image
        src="/logo.png"
        alt="Logo"
        width={75}
        height={50}
        priority
        className="ml-5"
      />
      {/* Navigation */}
      <ul className="flex space-x-8 text-[#333333] cursor-pointer">
        <li className="relative group">
          <a
            href="#presentation"
            className="relative text-[#333333] group-hover:text-[#b97a57] transition duration-300"
          >
            Présentation
          </a>
          <span
            className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#b97a57] transition-all duration-300 group-hover:w-full"
          ></span>
        </li>
        <li className="relative group">
          <a
            href="#mes-projets"
            className="relative text-[#333333] group-hover:text-[#b97a57] transition duration-300"
          >
            Mes projets
          </a>
          <span
            className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#b97a57] transition-all duration-300 group-hover:w-full"
          ></span>
        </li>
        <li className="relative group">
          <a
            href="#Mon parcours"
            className="relative text-[#333333] group-hover:text-[#b97a57] transition duration-300"
          >
            Mon parcours
          </a>
          <span
            className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#b97a57] transition-all duration-300 group-hover:w-full"
          ></span>
        </li>
        <li className="relative group">
          <a
            href="#Contact"
            className="relative text-[#333333] group-hover:text-[#b97a57] transition duration-300"
          >
            Contact
          </a>
          <span
            className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#b97a57] transition-all duration-300 group-hover:w-full"
          ></span>
        </li>
      </ul>
      {/* Bouton pour télécharger le CV */}
      <div className="ml-5">
        <a
          href="/Elsa Tanguy_________.pdf" // Assurez-vous que le chemin d'accès au fichier est correct
          download="Mon_CV"
          className="bg-[#b97a57] text-white py-2 px-4 rounded hover:bg-[#dec9b0] transition duration-300"
        >
          Télécharger mon CV
        </a>
      </div>
    </header>
  );
}

export default Header;

