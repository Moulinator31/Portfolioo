import React, { useEffect, useState } from "react";

const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simuler un délai de 3 secondes avant de cacher le loader
    const timer = setTimeout(() => {
      setLoading(false); // Cacher le loader après 3 secondes
    }, 3000); // 3000 ms = 3 secondes

    // Nettoyage du timer à la fin
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-[#F3E0D3]">
        <div className="flex flex-col items-center">
          {/* Tournesol clignotant en jaune moutarde */}
          <div className="mt-4 animate-pulse">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width="80"
              height="80"
              className="text-[#DFAF6D]" // Jaune moutarde pour le tournesol
            >
              <g fill="none">
                <circle cx="24" cy="24" r="6" fill="#DFAF6D" />
                {/* Pétales du tournesol en jaune moutarde */}
                <circle cx="24" cy="8" r="4" fill="#DFAF6D" />
                <circle cx="24" cy="40" r="4" fill="#DFAF6D" />
                <circle cx="8" cy="24" r="4" fill="#DFAF6D" />
                <circle cx="40" cy="24" r="4" fill="#DFAF6D" />
                <circle cx="10" cy="10" r="4" fill="#DFAF6D" />
                <circle cx="38" cy="10" r="4" fill="#DFAF6D" />
                <circle cx="10" cy="38" r="4" fill="#DFAF6D" />
                <circle cx="38" cy="38" r="4" fill="#DFAF6D" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    );
  }
};

export default Loader;


