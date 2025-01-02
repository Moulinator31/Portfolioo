import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ParcoursDocument = Parcours & Document;

@Schema()
export class Parcours {
  @Prop({ required: true })
  entreprise: string;

  @Prop({ required: true })
  startDate: Date;

  @Prop({ required: true })
  endDate: Date;

  @Prop({ required: true })
  domaine: string;
}

export const ParcoursSchema = SchemaFactory.createForClass(Parcours);
