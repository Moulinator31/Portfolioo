import { Module, OnModuleInit } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectModule } from './project/project.module';
import { FormationModule } from './formation/formation.module';
import { ContactModule } from './contact/contact.module';
import { ProjectService } from './project/project.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://mongodb:27017/portfolio_backend'),
    ProjectModule,
    FormationModule,
    ContactModule,
  ],
})
export class AppModule implements OnModuleInit {
  constructor(private readonly projectService: ProjectService) {}

  async onModuleInit() {
    await this.projectService.seedData(); // Appel de la méthode seedData()
  }
}










