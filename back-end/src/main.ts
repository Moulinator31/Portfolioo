import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
const port = process.env.PORT || 8000
console.log(`Launching NestJS app on port ${port}, URL: http://0.0.0.0:${port}`)

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');  // Préfixe global pour toutes les routes
  app.enableCors({
    origin: ['https://portfolioo-22.vercel.app','http://localhost:3000','http://localhost:3001','https://protective-barbee-elsa-tanguy-projects-1a18647e.koyeb.app','https://elsatanguy.com/'],  // Frontend URL
    methods: 'GET,POST,PUT,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type, Accept',
    credentials: true,
  });
  await app.listen(port)
}

bootstrap();












