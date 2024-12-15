import { API_BASE_URL } from "./config"; // Importer le préfixe d'API

export const fetchProjects = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}/projects`); // Utilisation du préfixe
    if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
    return await res.json();
  } catch (error) {
    console.error("Erreur lors de la récupération des projets :", error);
    throw error; // Relancer l'erreur pour que l'appelant puisse la gérer
  }
};

// Fonction pour récupérer les données de l'API (côté Frontend)
export const fetchFormation = async () => {
  try {
    // Appel de l'API à l'URL spécifiée
    const res = await fetch(`${API_BASE_URL}/formations`);
    if (!res.ok) {
      // Si le serveur retourne une erreur (par ex., 404 ou 500), on lance une exception
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    // Si tout va bien, on retourne les données JSON
    return await res.json();
  } catch (error) {
    // Gestion des erreurs en cas de problème
    console.error('Erreur lors de la récupération Formation :', error);
    throw error; // On relance l'erreur pour que l'appelant puisse la traiter
  }
};


export const sendContactMessage = async (name: string, email: string, message: string) => {
  try {
    const response = await fetch(`${API_BASE_URL}/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });

    if (!response.ok) {
      throw new Error("Erreur lors de l'envoi du message.");
    }

    return response.json(); // Retourne la réponse du serveur
  } catch (error) {
    console.error("Erreur lors de l'envoi du message :", error);
    throw error;
  }
};

  