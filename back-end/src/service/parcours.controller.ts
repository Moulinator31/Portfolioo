import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ParcoursService } from './parcours.service';

@Controller('parcours')
export class ParcoursController {
  constructor(private readonly parcoursService: ParcoursService) {}

  @Get()
  getAllParcours() {
    return this.parcoursService.getAllParcours();
  }

  @Post()
  createParcours(@Body() body: { name: string; startDate: string; endDate: string; domaine: string }) {
    return this.parcoursService.createParcours(body);
  }

  @Put(':id')
  updateParcours(
    @Param('id') id: string,
    @Body() body: { name?: string; startDate?: string; endDate?: string; domaine?: string },
  ) {
    return this.parcoursService.updateParcours(Number(id), body);
  }

  @Delete(':id')
  deleteParcours(@Param('id') id: string) {
    return this.parcoursService.deleteParcours(Number(id));
  }
}



