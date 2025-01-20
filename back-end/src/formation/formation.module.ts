// formation.module.ts
import { Module, OnModuleInit } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FormationController } from './formation.controller';
import { FormationService } from './formation.service';
import { FormationSchema } from './formation.shema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Formation', schema: FormationSchema }]), // Assurez-vous que le schéma Formation est bien injecté
  ],
  controllers: [FormationController],
  providers: [FormationService],
})
export class FormationModule implements OnModuleInit {
  constructor(private readonly formationService: FormationService) {}

  // Méthode qui sera appelée au démarrage du module
  async onModuleInit() {
    await this.formationService.seedData(); // Appel de seedData au démarrage
  }
}



