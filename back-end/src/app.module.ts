import { Module, OnModuleInit } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectModule } from './project/project.module';
import { FormationModule } from './formation/formation.module';
import { ContactModule } from './contact/contact.module';
import { ProjectService } from './project/project.service';
import { ParcoursModule } from './service/parcours.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://Moulinator31:Moulinator31@cluster0.cczpi.mongodb.net/myDatabase'),
    ProjectModule,
    FormationModule,
    ContactModule,
    ParcoursModule,
  ],
})
export class AppModule implements OnModuleInit {
  constructor(private readonly projectService: ProjectService) {}

  async onModuleInit() {
    await this.projectService.seedData(); // Appel de la méthode seedData()
  }
}










