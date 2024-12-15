import { Controller, Get } from '@nestjs/common';
import { ProjectService } from './project.service';

@Controller('projects') // La route commence par /api/projects
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Get()
  async getAllProjects() {
    return this.projectService.findAll(); // Récupère tous les projets
  }
}

