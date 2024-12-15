// contact.schema.ts
import { Schema, Document } from 'mongoose';

export interface Contact extends Document {
  name: string;
  email: string;
  message: string;
}

export const ContactSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
});