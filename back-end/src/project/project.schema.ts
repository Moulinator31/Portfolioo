import { Schema, Document } from 'mongoose';

// Interface qui représente le modèle de données
export interface Project extends Document {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  repositoryUrl?: string; // Rendu optionnel
  liveUrl?: string;
}

// Schéma Mongoose pour le modèle Project
export const ProjectSchema = new Schema<Project>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  technologies: [{ type: String, required: true }],
  repositoryUrl: { type: String, required: false }, // Marqué comme facultatif
  liveUrl: { type : String, required: false },
});
