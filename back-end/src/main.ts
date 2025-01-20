import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

// Charger les variables d'environnement basées sur l'environnement
const ENV = process.env.NODE_ENV || 'local'; // Par défaut, "local"
dotenv.config({ path: ENV === 'production' ? '.env' : '.env.local' });

const port = process.env.PORT || 8000;

console.log(`Launching NestJS app on port ${port}, ENV: ${ENV}, URL: http://0.0.0.0:${port}`);

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api/v1');  // Préfixe global pour toutes les routes
  app.enableCors({
    origin: ['http://localhost:3000', // URL locale de votre front-end
      'https://portfolioo-22.vercel.app',
      'http://localhost:3001'], // URL de production
    methods: 'GET,POST,PUT,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type, Accept',
    credentials: true,
  });

  await app.listen(port);
}

bootstrap();













