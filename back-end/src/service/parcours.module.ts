import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ParcoursService } from './parcours.service';
import { ParcoursController } from './parcours.controller';
import { ParcoursSchema } from './parcours.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Parcours', schema: ParcoursSchema }]),
  ],
  controllers: [ParcoursController],
  providers: [ParcoursService],
  exports: [ParcoursService], // Facultatif si utilisé ailleurs
})
export class ParcoursModule {}

