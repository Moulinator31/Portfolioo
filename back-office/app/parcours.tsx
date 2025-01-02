"use client";
import { useState, useEffect } from 'react';
import "./styles/style.css";
import { NEST_API_BASE_URL } from "./config";

type Parcours = {
  _id?: string;
  entreprise: string;
  startDate: string;
  endDate: string;
  domaine: string;
};

export default function ManageParcours() {
  const [parcours, setParcours] = useState<Parcours[]>([]);
  const [formData, setFormData] = useState<Parcours>({
    entreprise: '',
    startDate: '',
    endDate: '',
    domaine: '',
  });
  const [isEditing, setIsEditing] = useState<string | null>(null);

  useEffect(() => {
    const fetchParcours = async () => {
      try {
        const res = await fetch(`${NEST_API_BASE_URL}/parcours`);
        if (!res.ok) throw new Error(`Erreur: ${res.status}`);
        const data = await res.json();
        setParcours(data);
      } catch (error) {
        console.error("Erreur lors de la récupération des parcours :", error);
      }
    };
  
    fetchParcours();
  }, []);

  // Gérer le formulaire
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Ajouter ou mettre à jour un parcours
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const method = isEditing ? 'PUT' : 'POST';
    const endpoint = isEditing ? `/api/v1/parcours/${isEditing}` : '/api/v1/parcours';

    const response = await fetch(endpoint, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      const updatedParcours = await response.json();
      setParcours(updatedParcours);
      setFormData({ entreprise: '', startDate: '', endDate: '', domaine: '' });
      setIsEditing(null);
    }
  };

  // Supprimer un parcours
  const handleDelete = async (id: string) => {
    const response = await fetch(`/api/v1/parcours/${id}`, { method: 'DELETE' });
    if (response.ok) {
      setParcours(parcours.filter((p) => p._id !== id));
    }
  };

  // Pré-remplir le formulaire pour modifier un parcours
  const handleEdit = (parcoursToEdit: Parcours) => {
    setFormData(parcoursToEdit);
    setIsEditing(parcoursToEdit._id || null);
  };
  
  return (
    <div className="container">
      <h1 className="title">Gestion des parcours</h1>

      {/* Formulaire pour ajouter ou modifier */}
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          name="entreprise"
          placeholder="Entreprise"
          value={formData.entreprise || ''}
          onChange={handleChange}
          required
          className="input"
        />
        <input
          type="date"
          name="startDate"
          value={formData.startDate || ''}
          onChange={handleChange}
          required
          className="input"
        />
        <input
          type="date"
          name="endDate"
          value={formData.endDate || ''}
          onChange={handleChange}
          required
          className="input"
        />
        <input
          type="text"
          name="domaine"
          placeholder="Domaine"
          value={formData.domaine || ''}
          onChange={handleChange}
          required
          className="input"
        />
        <button type="submit" className="button">{isEditing ? 'Modifier' : 'Ajouter'}</button>
      </form>

      {/* Liste des parcours */}
      <table className="table">
        
      <tbody>
  {parcours.map((p, index) => (
    <tr key={p._id || index}>
      <td>{p.entreprise}</td>
      <td>{new Date(p.startDate).toLocaleDateString()}</td>
      <td>{new Date(p.endDate).toLocaleDateString()}</td>
      <td>{p.domaine}</td>
      <td>
        <button onClick={() => handleEdit(p)} className="button-edit">Modifier</button>
        <button onClick={() => handleDelete(p._id || '')} className="button-delete">Supprimer</button>
      </td>
    </tr>
  ))}
</tbody>

      </table>
    </div>
  );
}

