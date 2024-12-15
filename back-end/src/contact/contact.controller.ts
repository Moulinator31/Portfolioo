// email.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { ContactService } from './contact.service';

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post()
  async handleContact(@Body() body: { name: string; email: string; message: string }) {
    try {
      console.log('Données reçues:', body);
      // Envoyer l'email avec le nom, l'email et le message
      await this.contactService.sendMail(body.name, body.email, body.message);
      return { message: 'Message envoyé avec succès' };
    } catch (error) {
      console.error('Erreur lors de l\'envoi du formulaire:', error.message);
      return { message: 'Erreur lors de l\'envoi du formulaire' };
    }
  }
}
