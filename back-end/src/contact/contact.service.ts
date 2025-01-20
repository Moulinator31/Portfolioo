import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import * as dotenv from 'dotenv';
dotenv.config();

@Injectable()
export class ContactService {
  private transporter: nodemailer.Transporter;

  constructor() {
    // Vérifier si les variables d'environnement sont bien chargées
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
      console.error('Erreur: EMAIL_USER ou EMAIL_PASSWORD manquant dans les variables d\'environnement');
      throw new Error('Les variables d\'environnement pour l\'email sont manquantes.');
    }

    // Configuration du transporteur SMTP
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // L'adresse email définie dans .env
        pass: process.env.EMAIL_PASSWORD, // Mot de passe d'application généré dans Gmail
      },
    });

    // Vérifier la connexion SMTP
    this.transporter.verify((error, success) => {
      if (error) {
        console.error('Erreur de connexion au serveur SMTP:', error);
      } else {
        console.log('Connexion au serveur SMTP réussie');
      }
    });
  }

  async sendMail(name: string, email: string, message: string): Promise<void> {
    const mailOptions = {
      from: process.env.EMAIL_USER, // Adresse email de l'expéditeur
      to: process.env.EMAIL_USER, // Adresse email de destination (par exemple, toi-même)
      subject: `Message de ${name}`, // Le sujet de l'email
      text: `Nom: ${name}\nEmail: ${email}\nMessage:\n${message}`, // Corps du message
      replyTo: email, // Répondre à l'email de l'utilisateur
    };

    try {
      await this.transporter.sendMail(mailOptions);
      console.log('E-mail envoyé avec succès');
    } catch (error) {
      console.error('Erreur lors de l\'envoi de l\'e-mail :', error.message);
      throw new Error('Erreur lors de l\'envoi de l\'e-mail');
    }
  }
}








