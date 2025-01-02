import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { FormationService } from './formation.service';

@Controller('formations')
export class FormationController {
  constructor(private readonly formationService: FormationService) {}

  @Get() 
  async getAllFormations() {
    return this.formationService.findAll();
  }

  @Post() 
  async createFormation(@Body() createFormationDto: { title: string; location: string; period: string }) {
    return this.formationService.create(createFormationDto);
  }

  @Put(':id') // Mise à jour d'une formation existante
  async updateFormation(@Param('id') id: string, @Body() updateFormationDto: { title: string; location: string; period: string }) {
    return this.formationService.update(id, updateFormationDto);
  }

  @Delete(':id') // Suppression d'une formation
  async deleteFormation(@Param('id') id: string) {
    return this.formationService.remove(id);
  }
}




