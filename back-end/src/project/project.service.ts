import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Project } from './project.schema'; // Assurez-vous que le chemin est correct

@Injectable()
export class ProjectService {
  constructor(@InjectModel('Project') private readonly projectModel: Model<Project>) {}

  async seedData() {
    const existingProjects = await this.projectModel.find();

    if (existingProjects.length === 0) {
      const projects = [
        {
          title: "Projet 724",
          description: "Utilisation de JavaScript et TailwindCSS",
          image: "/projet_724.png",
          technologies: ["JavaScript", "TailwindCSS"],
          repositoryUrl: "https://github.com/Moulinator31/Debuggez-une-application-React.JS.git",
        },
        {
          title: "Projet ArgentBank",
          description: "Développement en ReactJS et Redux",
          image: "/projet_argentBank.png",
          technologies: ["ReactJS", "Redux"],
          repositoryUrl: "https://github.com/Moulinator31/ArgentBank-website.git",
          liveUrl: null,
        },
        {
          title: "Projet Kasa",
          description: "Application de gestion avec Vue et Firebase",
          image: "/projet_Kasa.png",
          technologies: ["Vue", "Firebase"],
          repositoryUrl: "https://github.com/Moulinator31/projet-8-kasa-openclassrooms.git",
        },
        {
          title: "Projet Sophie",
          description: "Développement en ReactJS et Redux",
          image: "/projet_Sophie.png",
          technologies: ["ReactJS", "Redux"],
          repositoryUrl: "https://github.com/Moulinator31/Portfolio-architecte-sophie-bluel.git",
          liveUrl: "https://moulinator31.github.io/Portfolio-architecte-sophie-bluel/FrontEnd/",
        },
        {
          title: "Projet Nina",
          description: "Application de gestion avec Vue et Firebase",
          image: "/projet_Nina.png",
          technologies: ["Vue", "Firebase"],
          repositoryUrl: "https://github.com/Moulinator31/ninacarducci.github.io.git",
        },
        
      ];

      await this.projectModel.insertMany(projects); // Insérer tous les projets en une seule fois
      console.log("Données insérées !");
    } else {
      console.log("Les données existent déjà.");
    }
  }

  async findAll(): Promise<Project[]> {
    return await this.projectModel.find().exec(); // Récupère tous les documents de Project.
  }
}


