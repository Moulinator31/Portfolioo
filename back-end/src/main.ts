import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
const port = process.env.PORT || 8000
console.log(`Launching NestJS app on port ${port}, URL: http://0.0.0.0:${port}`)

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');  // Préfixe global pour toutes les routes
  app.enableCors({
    origin: ['https://elsa-11yn6cb4e-moulinator31s-projects.vercel.app','http://localhost:3000','https://protective-barbee-elsa-tanguy-projects-1a18647e.koyeb.app/api/v1','protective-barbee-elsa-tanguy-projects-1a18647e.koyeb.app/'],  // Frontend URL
    methods: 'GET,POST,PUT,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type, Accept',
    credentials: true,
  });
  await app.listen(port, '0.0.0.0')
}

bootstrap();












