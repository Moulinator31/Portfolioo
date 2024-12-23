import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api/v1');  // Préfixe global pour toutes les routes

  app.enableCors({
    origin: ['http://localhost:3000', 'https://portfolioo-22.vercel.app'], // Ajoutez vos URLs autorisées
    methods: 'GET,POST,PUT,DELETE,OPTIONS', // Méthodes HTTP autorisées
    allowedHeaders: 'Content-Type, Accept', // En-têtes autorisés
    credentials: true, // Permet les cookies et les sessions
  });

  const port = process.env.PORT || 3001;
  console.log(`Server running on http://localhost:${port}`);
  await app.listen(port);
}

bootstrap();













