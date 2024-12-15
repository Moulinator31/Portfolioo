import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');  // Préfixe global pour toutes les routes
  app.enableCors({
    origin: 'http://localhost:3000',  // Frontend URL
    methods: 'GET,POST,PUT,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type, Accept',
    credentials: true,
  });
  await app.listen(3001);  // Serveur sur le port 3001
}

bootstrap();












