"use client";
import { useState, useEffect } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa"; // Importation des icônes

export const NEST_API_BASE_URL = 'http://localhost:8000/api/v1';

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
      setLoading(true);
      try {
        const res = await fetch(`${NEST_API_BASE_URL}/formations`);
        if (!res.ok) throw new Error(`Erreur: ${res.status}`);
        const data = await res.json();
        setFormations(data);
      } catch (error) {
        setError("Erreur lors de la récupération des formations.");
        console.error("Erreur lors de la récupération des parcours :", error);
      }
      setLoading(false);
    };

    fetchFormations();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch(`${NEST_API_BASE_URL}/formations`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Erreur lors de l'ajout de la formation");

      const newFormation = await res.json();
      setFormations([...formations, newFormation]);
      setFormData({ title: "", location: "", period: "" });
    } catch (error) {
      setError("Erreur lors de l'ajout de la formation.");
      console.error("Erreur lors de l'ajout de la formation :", error);
    }
    setLoading(false);
  };

  const handleDelete = async (id: string) => {
    setLoading(true);
    try {
      const res = await fetch(`${NEST_API_BASE_URL}/formations/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Erreur lors de la suppression");
      setFormations(formations.filter((formation) => formation._id !== id));
    } catch (error) {
      setError("Erreur lors de la suppression de la formation.");
      console.error("Erreur lors de la suppression :", error);
    }
    setLoading(false);
  };

  const handleEdit = (formation: Formation) => {
    setFormData({
      title: formation.title,
      location: formation.location,
      period: formation.period,
    });
  };

  return (
    <div className="back-office-container">
      <h1>Back Office des Formations</h1>
      
      {/* Formulaire pour ajouter une formation */}
      <section className="formation-form-section">
        <h2>Ajouter ou Modifier une Formation</h2>
        <form onSubmit={handleSubmit} className="formation-form">
          <input
            type="text"
            name="title"
            placeholder="Titre de la formation"
            value={formData.title || ""}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="location"
            placeholder="Lieu de la formation"
            value={formData.location || ""}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="period"
            placeholder="Période de la formation"
            value={formData.period || ""}
            onChange={handleChange}
            required
          />
          <button type="submit" disabled={loading}>
            {loading ? "Chargement..." : "Enregistrer"}
          </button>
        </form>
        {error && <p className="error">{error}</p>}
      </section>

      {/* Liste des formations */}
      <section className="formation-list-section">
        <h2>Liste des Formations</h2>
        <ul className="formation-list">
          {formations.map((formation) => (
            <li key={formation._id || formation.title} className="formation-item">
              <div className="formation-info">
                <p>{formation.title}</p>
                <span>{formation.location} ({formation.period})</span>
              </div>
              <div className="actions">
                <button
                  className="edit-btn"
                  onClick={() => handleEdit(formation)}
                >
                  <FaEdit />
                </button>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(formation._id || "")}
                >
                  <FaTrashAlt />
                </button>
              </div>
            </li>
          ))}
        </ul>
        {loading && <p>Chargement...</p>}
      </section>
    </div>
  );
}







