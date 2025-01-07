import { useState } from "react";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies?: string[];
  repositoryUrl?: string; // Assurez-vous que le champ est optionnel
  liveUrl?: string;
}

interface SliderProps {
  projects: Project[];
}

const Slider: React.FC<SliderProps> = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState("");

  if (!projects || projects.length === 0) {
    return <p className="text-center text-gray-500">Aucun projet disponible.</p>;
  }

  const currentProject = projects[currentIndex];

  const nextSlide = () => {
    setAnimationClass("slide-in-right");
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, 300);
  };

  const prevSlide = () => {
    setAnimationClass("slide-in-left");
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
    }, 300);
  };

  return (
    <div className="carousel-container flex flex-col justify-center items-center py-12 relative">
      {/* Bouton gauche */}
      <button
        onClick={prevSlide}
        className="absolute left-5 z-10 p-2 bg-gray-800 rounded-full opacity-70 hover:opacity-100 text-white md:left-10"
      >
        <FaArrowLeft />
      </button>

      {/* Slide principal */}
      <div
        className={`carousel-slide w-full max-w-lg sm:max-w-xl md:max-w-4xl overflow-hidden rounded-xl shadow-lg ${animationClass}`}
        onAnimationEnd={() => setAnimationClass("")}
      >
        {/* Image */}
        <Image
          src={currentProject.image || "/placeholder.png"}
          alt={currentProject.title || "Projet"}
          className="w-full object-cover h-64 sm:h-80 md:h-96"
          width={800}
          height={400}
        />

        {/* Overlay texte */}
        <div className="carousel-overlay bg-white p-4 sm:p-6 shadow-lg mt-4 rounded-b-xl">
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800">
            {currentProject.title || "Titre non disponible"}
          </h3>
          <p className="text-sm sm:text-base text-gray-500 mt-2">
            {currentProject.description || "Description non disponible"}
          </p>

          {/* Technologies utilisées */}
          <div className="flex flex-wrap gap-2 mt-4">
            {currentProject.technologies?.map((tech) => (
              <span
                key={tech}
                className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs sm:text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Boutons */}
          <div className="section-buttons mt-4 space-y-2 sm:space-y-0 sm:space-x-4">
            {currentProject.repositoryUrl && (
              <a
                href={currentProject.repositoryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="button-74 w-full sm:w-auto text-center"
              >
                Voir le Repository
              </a>
            )}
            {currentProject.liveUrl && (
              <a
                href={currentProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="button-74 w-full sm:w-auto text-center"
              >
                Voir le Site en Ligne
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Bouton droit */}
      <button
        onClick={nextSlide}
        className="absolute right-5 z-10 p-2 bg-gray-800 rounded-full opacity-70 hover:opacity-100 text-white md:right-10"
      >
        <FaArrowRight />
      </button>
    </div>
  );
};

export default Slider;


