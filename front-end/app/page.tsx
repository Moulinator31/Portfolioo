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
  className="relative flex flex-col items-center justify-center h-auto md:h-screen bg-gradient-to-r from-[#F8DCCB] via-[#FFE5D9] to-[#F3E0D3] overflow-hidden border-b-8 border-[#b97a57] px-4 py-8"
>
  {/* Arrière-plan décoratif */}
  <div className="absolute inset-0 z-0">
    <div className="absolute top-[-50px] left-[-100px] w-[150px] h-[150px] bg-[#FFD3B6] rounded-full blur-2xl opacity-50 animate-clouds md:w-[300px] md:h-[300px]"></div>
    <div className="absolute bottom-[-100px] right-[-150px] w-[200px] h-[200px] bg-[#B8D8D8] rounded-full blur-2xl opacity-50 animate-clouds md:w-[400px] md:h-[400px]"></div>
    <div className="absolute top-[10%] left-[50%] w-[100px] h-[100px] bg-[#FFC1A1] rounded-full blur-2xl opacity-60 animate-clouds md:w-[200px] md:h-[200px]"></div>
  </div>

  {/* Carte de présentation */}
  <div className="relative z-10 flex flex-col items-center bg-white/80 backdrop-blur-md rounded-xl shadow-lg p-6 md:p-12 gap-6 max-w-lg md:max-w-5xl animate-fade-in-y md:flex-row">
    {/* Image de présentation */}
    <div className="flex-shrink-0">
      <Image
        width={300}
        height={300}
        src="/presentation_me.png"
        alt="Photo d'Elsa"
        className="w-40 h-40 rounded-full object-cover shadow-lg border-4 border-[#b97a57] hover:scale-105 transition-transform duration-300 md:w-64 md:h-64"
      />
    </div>

    {/* Texte de présentation */}
    <div className="text-center md:text-left">
      <h1 className="text-2xl font-bold text-[#222222] mb-4 leading-snug md:text-4xl animate-slide-up">
        Bienvenue ! <span className="text-[#b97a57]">Je suis Elsa.</span>
      </h1>
      <p className="text-sm text-[#444444] leading-relaxed md:text-xl">
        Après plusieurs années passées dans la cuisine, j'ai décidé de me réinventer. Aujourd'hui, je me passionne pour le développement web et je suis à la recherche d'une équipe dynamique pour partager mes compétences et relever de nouveaux défis ensemble.
      </p>
      <p className="text-sm text-[#444444] leading-relaxed mt-4 md:text-xl">
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





