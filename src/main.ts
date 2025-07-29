import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { jwtAuthMiddleware } from './middleware/jwt-auth.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.enableCors({
      origin: 'http://localhost:3003', 
      credentials: true,
    });

    app.use(jwtAuthMiddleware)

    await app.listen(process.env.PORT ?? 3004);
}

bootstrap();
