// formation.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Formation } from './formation.shema';

@Injectable()
export class FormationService {
  constructor(@InjectModel('Formation') private readonly formationModel: Model<Formation>) {}

  // Méthode pour insérer des données initiales dans la base
  async seedData() {
    const existingFormations = await this.formationModel.find();
    if (existingFormations.length === 0) {
      const formations = [
        { title: 'Intégrateur Web Junior', location: 'OpenClassrooms', period: '2022 - En cours' },
        { title: 'BTS Management en Hôtellerie-Restauration', location: 'Dolia Nova, Saint-Quentin-Yvelines', period: '2019 - 2021' },
        { title: 'Baccalauréat Professionnel Cuisine', location: 'Lycée d’hôtellerie et de Tourisme de Guyancourt', period: '2017 - 2019' },
      ];
      await this.formationModel.insertMany(formations);
      console.log('Formations insérées !');
    } else {
      console.log('Les formations existent déjà.');
    }
  }

  // Méthode pour récupérer toutes les formations
  async findAll(): Promise<Formation[]> {
    return this.formationModel.find().exec();
  }

  // Méthode pour créer une nouvelle formation
  async create(createFormationDto: { title: string; location: string; period: string }): Promise<Formation> {
    const createdFormation = new this.formationModel(createFormationDto);
    return createdFormation.save();
  }
}
