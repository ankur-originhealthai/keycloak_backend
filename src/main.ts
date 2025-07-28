import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.enableCors({
      origin: 'http://localhost:3003', //allow the access of api in localhost:3002
      credentials: true,
    });

    await app.listen(process.env.PORT ?? 3004);
}

bootstrap();
