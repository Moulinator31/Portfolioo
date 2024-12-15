// formation.controller.ts
import { Controller, Get } from '@nestjs/common';
import { FormationService } from './formation.service';

@Controller('formations') // La route commence par /formations
export class FormationController {
  constructor(private readonly formationService: FormationService) {}

  @Get() // Gère la requête GET sur /formations
  async getAllFormations() {
    return this.formationService.findAll(); // Récupère toutes les formations
  }
}


