import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class ParcoursService {
  private parcours = [
    { id: 1, name: 'Intégration Web', startDate: '2024-01-01', endDate: '2024-12-31', domaine: 'Web' },
    { id: 2, name: 'Développement Frontend', startDate: '2023-01-01', endDate: '2023-12-31', domaine: 'Frontend' },
    // Autres parcours
  ];

  // Récupérer tous les parcours
  getAllParcours() {
    return this.parcours;
  }

  // Créer un nouveau parcours
  createParcours(parcoursDto: { name: string; startDate: string; endDate: string; domaine: string }) {
    const newParcours = {
      id: this.parcours.length > 0 ? this.parcours[this.parcours.length - 1].id + 1 : 1, // Génération d'un nouvel ID
      ...parcoursDto,
    };
    this.parcours.push(newParcours);
    return newParcours;
  }

  // Mettre à jour un parcours existant
  updateParcours(id: number, updateDto: { name?: string; startDate?: string; endDate?: string; domaine?: string }) {
    const parcoursIndex = this.parcours.findIndex((p) => p.id === id);
    if (parcoursIndex === -1) {
      throw new NotFoundException(`Parcours avec l'ID ${id} introuvable`);
    }

    this.parcours[parcoursIndex] = { ...this.parcours[parcoursIndex], ...updateDto };
    return this.parcours[parcoursIndex];
  }

  // Supprimer un parcours
  deleteParcours(id: number) {
    const parcoursIndex = this.parcours.findIndex((p) => p.id === id);
    if (parcoursIndex === -1) {
      throw new NotFoundException(`Parcours avec l'ID ${id} introuvable`);
    }

    this.parcours.splice(parcoursIndex, 1); // Suppression de l'élément
    return { message: `Parcours avec l'ID ${id} supprimé` };
  }
}


