// formation.schema.ts
import { Schema, Document } from 'mongoose';

export interface Formation extends Document {
  title: string;
  location: string;
  period: string;
}

export const FormationSchema = new Schema({
  title: { type: String, required: true },
  location: { type: String, required: true },
  period: { type: String, required: true },
});
