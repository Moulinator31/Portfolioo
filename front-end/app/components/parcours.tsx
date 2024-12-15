"use client";

import React, { useEffect, useState } from "react";
import "../styles/globals.css";
import { fetchFormation } from "../services/api"; // Importer la fonction API

interface ParcoursData {
  title: string;
  location: string;
  period: string;
}

function Parcours() {
  const [parcours, setParcours] = useState<ParcoursData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadParcours = async () => {
      try {
        const data = await fetchFormation();
        setParcours(data);
      } catch {
        setError("Erreur lors de la récupération des données.");
      } finally {
        setLoading(false);
      }
    };

    loadParcours();
  }, []);

  return (
    <section id="Mon parcours" className="py-16 px-4 bg-[#1F1F1F]">
      <div className="max-w-5xl mx-auto text-[#D8BFAA]">
        <h2 className="text-3xl font-semibold text-center mb-12 petit-formal-script-regular">
          Mon Parcours
        </h2>

        {loading && <p className="text-center text-[#B4A69D]">Chargement...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}

        {!loading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {parcours.map((item, index) => (
              <div
                key={index}
                className="bg-[#2A2A2A] rounded-lg shadow-lg p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
              >
                <h3 className="text-xl font-semibold text-[#D8BFAA]">{item.title}</h3>
                <p className="text-[#B4A69D]">{item.location}</p>
                <span className="block mt-2 text-[#FE9968] font-semibold">{item.period}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Parcours;




