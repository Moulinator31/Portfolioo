// formation.controller.ts
import { Controller, Get, Post, Body } from '@nestjs/common';
import { FormationService } from './formation.service';

@Controller('formations') // La route commence par /formations
export class FormationController {
  constructor(private readonly formationService: FormationService) {}

  @Get() // Gère la requête GET sur /formations
  async getAllFormations() {
    return this.formationService.findAll(); // Récupère toutes les formations
  }

  @Post() // Gère la requête POST pour ajouter une nouvelle formation
  async createFormation(@Body() createFormationDto: { title: string; location: string; period: string }) {
    return this.formationService.create(createFormationDto); // Crée une nouvelle formation
  }
}



