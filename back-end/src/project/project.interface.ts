// src/project/interfaces/project.interface.ts
export interface Project {
    id: string;
    title: string;
    description: string;
    technologies: string[];
    repositoryUrl?: string;
    liveUrl?: string;
}