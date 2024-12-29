"use client";

import { useEffect, useState } from "react";
import "./styles/globals.css";
import Header from "./components/header";
import Parcours from "./components/parcours";
import ContactForm from "./components/contactFrom";
import Slider from "./components/slider";
import { fetchProjects } from "./services/api"; // Import de la fonction API
import Loader from "./components/loader"; // Import du composant Loader
import Image from 'next/image';

// Définir une interface pour le type des projets
interface Project {
  title: string;
  description: string;
  image: string;
  technologies?: string[];
}

export default function Home() {
  const [projects, setProjects] = useState<Project[]>([]); // Typage explicite
  const [loading, setLoading] = useState(true); // État pour savoir si les données sont en train de se charger

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const data = await fetchProjects();
        if (data && Array.isArray(data)) {
          setProjects(data); // Mettre à jour les projets
        } else {
          console.warn("Données inattendues :", data);
        }
      } catch (error) {
        console.error("Erreur lors du chargement des projets :", error);
      } finally {
        setLoading(false); // Dès que les données sont chargées, on arrête le loader
      }
    };

    loadProjects();
  }, []);

  if (loading) {
    return <Loader />; // Afficher le loader tant que les données sont en train de se charger
  }

  return (
    <div>
      <main className="bg-[#F3E0D3] min-h-screen">
        <Header />
        {/* Section de présentation */}
        <section
          id="presentation"
          className="relative flex items-center justify-center h-screen bg-gradient-to-r from-[#F8DCCB] via-[#FFE5D9] to-[#F3E0D3] overflow-hidden border-b-8 border-[#b97a57]"
        >
          {/* Arrière-plan décoratif */}
          <div className="absolute inset-0 z-0">
            <div className="absolute top-[-100px] left-[-150px] w-[300px] h-[300px] bg-[#FFD3B6] rounded-full blur-3xl opacity-50 animate-clouds"></div>
            <div className="absolute bottom-[-150px] right-[-200px] w-[400px] h-[400px] bg-[#B8D8D8] rounded-full blur-3xl opacity-50 animate-clouds"></div>
            <div className="absolute top-[20%] left-[60%] w-[200px] h-[200px] bg-[#FFC1A1] rounded-full blur-3xl opacity-60 animate-clouds"></div>
          </div>

          {/* Carte de présentation */}
          <div className="relative z-10 flex flex-col md:flex-row items-center bg-white/80 backdrop-blur-md rounded-xl shadow-lg p-8 md:p-12 gap-8 max-w-5xl animate-fade-in-y">
            {/* Image de présentation */}
            <div className="flex-shrink-0">
              <Image
                width={500}
                height={500}
                src="/presentation_me.png"
                alt="Photo d'Elsa"
                className="w-64 h-64 rounded-full object-cover shadow-lg border-4 border-[#b97a57] hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Texte de présentation */}
            <div className="text-center md:text-left">
              <h1 className="text-4xl font-bold text-[#222222] mb-6 leading-tight animate-slide-up">
                Bienvenue ! <span className="text-[#b97a57]">Je suis Elsaa.</span>
              </h1>
              <p className="text-xl text-[#444444] leading-relaxed">
                Après plusieurs années passées dans la cuisine, j'ai décidé de me réinventer. Aujourd'hui, je me passionne pour le développement web et je suis à la recherche d'une équipe dynamique pour partager mes compétences et relever de nouveaux défis ensemble.
              </p>
              <p className="text-xl text-[#444444] leading-relaxed mt-4">
                Mon objectif : créer des interfaces modernes, accessibles et engageantes, tout en continuant à apprendre et à grandir avec mes futurs collègues.
              </p>
            </div>
          </div>
      </section>


      <h2 id="mes-projets" className="text-center mt-12 text-[#333333] text-3xl petit-formal-script-regular animate-fade-in">
        Mes Projets
      </h2>
      <Slider projects={projects} />
      <Parcours />
      <ContactForm />
    </main>
    </div >
  );
}





