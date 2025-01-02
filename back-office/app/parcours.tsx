"use client";
import { useState, useEffect } from "react";
import { NEST_API_BASE_URL } from "./config";

type Formation = {
  _id?: string;
  title: string;
  location: string;
  period: string;
};

export default function ManageFormations() {
  const [formations, setFormations] = useState<Formation[]>([]);
  const [formData, setFormData] = useState<Formation>({
    title: "",
    location: "",
    period: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchFormations = async () => {
      setLoading(true); // Start loading when fetching
      try {
        const res = await fetch(`${NEST_API_BASE_URL}/parcours`);
        if (!res.ok) throw new Error(`Erreur: ${res.status}`);
        const data = await res.json();
        setFormations(data);
      } catch (error) {
        setError("Erreur lors de la récupération des formations.");
        console.error("Erreur lors de la récupération des parcours :", error);
      }
      setLoading(false); // Stop loading after fetching
    };

    fetchFormations();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); // Show loading indicator when submitting
    setError(""); // Reset previous errors

    try {
      const res = await fetch(`${NEST_API_BASE_URL}/parcours`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Erreur lors de l'ajout de la formation");

      const newFormation = await res.json();
      setFormations([...formations, newFormation]); // Add new formation to the list
      setFormData({ title: "", location: "", period: "" }); // Reset form
    } catch (error) {
      setError("Erreur lors de l'ajout de la formation.");
      console.error("Erreur lors de l'ajout de la formation :", error);
    }
    setLoading(false); // Hide loading indicator
  };

  return (
    <div>
      <h1>Gestion des formations</h1>

      {/* Form to add a new formation */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Titre"
          value={formData.title || ""}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="location"
          placeholder="Lieu"
          value={formData.location || ""}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="period"
          placeholder="Période"
          value={formData.period || ""}
          onChange={handleChange}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? "Ajout en cours..." : "Ajouter"}
        </button>
      </form>

      {/* Error message */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* List of formations */}
      <ul>
        {formations.map((formation) => (
          <li key={formation._id || formation.title}>
            {/* Use _id for key, fallback to title if not available */}
            {formation.title} - {formation.location} ({formation.period})
          </li>
        ))}
      </ul>

      {/* Loading indicator */}
      {loading && <p>Chargement...</p>}
    </div>
  );
}




